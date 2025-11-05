import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/dto/users.interface';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { Response } from 'express';
import { RolesService } from 'src/roles/roles.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private rolesService: RolesService,
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid === true) {
                const userRole = user.role as unknown as { _id: string; name: string };
                const temp = await this.rolesService.findOne(userRole._id);

                const objUser = {
                    ...user.toObject(),
                    permissions: temp?.permissions ?? [],
                };
                return objUser;
            }
        }
        return null;
    }

    async login(user: IUser, response: Response) {
        const { _id, name, email, role, permissions } = user;
        const payload = {
            sub: 'token login',
            iss: 'from server',
            _id,
            name,
            email,
            role,
        };

        const refresh_token = this.createRefreshToken(payload);

        await this.usersService.updateUserToken(refresh_token, _id);

        response.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')),
        });

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                _id,
                name,
                email,
                role,
                permissions,
            },
        };
    }

    async register(user: RegisterUserDto) {
        const newUser = await this.usersService.register(user);
        return {
            _id: newUser?._id,
            createdAt: newUser?.createdAt,
        };
    }
    // async register(user: RegisterUserDto) {
    //     const { _id, email, otp } = await this.usersService.register(user);
    //     await this.sendOtpEmail(email, otp); // Gửi OTP đến email của user
    //     return {
    //       _id,
    //       message: 'Đăng ký thành công, vui lòng xác nhận OTP qua email để hoàn tất thủ tục',
    //     };
    //   }

    //   async verifyOtp(email: string, otp: string): Promise<void> {
    //     await this.usersService.verifyOtp(email, otp);
    //   }

    createRefreshToken = (payload: any) => {
        const refresh_token = this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')) / 1000,
        });
        return refresh_token;
    };

    processNewToken = async (refreshToken: string, response: Response) => {
        try {
            this.jwtService.verify(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
            });
            let user = await this.usersService.findUserByToken(refreshToken);
            if (user) {
                const { _id, name, email, role } = user;
                const payload = {
                    sub: 'token refresh',
                    iss: 'from server',
                    _id,
                    name,
                    email,
                    role,
                };

                const refresh_token = this.createRefreshToken(payload);

                await this.usersService.updateUserToken(refresh_token, _id.toString());

                const userRole = user.role as unknown as { _id: string; name: string };
                const temp = await this.rolesService.findOne(userRole._id);

                response.clearCookie('refresh_token');
                response.cookie('refresh_token', refresh_token, {
                    httpOnly: true,
                    maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')),
                });

                return {
                    access_token: this.jwtService.sign(payload),
                    user: {
                        _id,
                        name,
                        email,
                        role,
                        permissions: temp?.permissions ?? [],
                    },
                };
            } else {
                throw new BadRequestException('Refresh token không hợp lệ. Vui lòng login.');
            }
        } catch (error) {
            throw new BadRequestException('Refresh token không hợp lệ. Vui lòng login.');
        }
    };

    logout = async (response: Response, user: IUser) => {
        await this.usersService.updateUserToken('', user._id);
        response.clearCookie('refresh_token');
        return 'ok';
    };

    async changePassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<void> {
        const user = await this.usersService.findOneById(userId);

        if (!user) {
            throw new BadRequestException('Người dùng không tồn tại');
        }

        const isValidOldPassword = this.usersService.isValidPassword(
            changePasswordDto.oldPassword,
            user.password,
        );

        if (!isValidOldPassword) {
            throw new BadRequestException('Mật khẩu cũ không đúng');
        }

        const isSamePassword = this.usersService.isValidPassword(
            changePasswordDto.newPassword,
            user.password,
        );

        if (isSamePassword) {
            throw new BadRequestException('Mật khẩu mới phải khác mật khẩu cũ');
        }

        await this.usersService.updateUserPassword(userId, changePasswordDto.newPassword);
    }

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void> {
        const { email } = forgotPasswordDto;
        const user = await this.usersService.findOneByEmail(email);

        if (!user) {
            throw new BadRequestException('Email không tồn tại trong hệ thống');
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // Hết hạn sau 10 phút

        await this.usersService.saveOtp(user._id.toString(), otp, otpExpiry);
        await this.sendOtpEmail(email, otp);
    }

    async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
        const { otp, newPassword } = resetPasswordDto;

        const user = await this.usersService.findUserByOtp(otp);

        if (!user) {
            throw new BadRequestException('OTP không hợp lệ hoặc đã hết hạn');
        }

        const now = new Date();
        if (now > user.otpExpiry) {
            throw new BadRequestException('OTP đã hết hạn');
        }

        await this.usersService.updateUserPassword(user.id, newPassword);
        await this.usersService.clearOtp(user.id);
    }

    private async sendOtpEmail(email: string, otp: string): Promise<void> {
        const transporter = nodemailer.createTransport({
            host: this.configService.get<string>('EMAIL_HOST'), // smtp.gmail.com
            port: 587,
            secure: false,
            auth: {
                user: this.configService.get<string>('EMAIL_AUTH_USER'), // tannghia0123@gmail.com
                pass: this.configService.get<string>('EMAIL_AUTH_PASS'), // App Password
            },
        });

        const mailOptions = {
            from: `"Hệ thống" <${this.configService.get<string>('EMAIL_AUTH_USER')}>`, // Người gửi: tannghia0123@gmail.com
            to: email, // Người nhận: email của user, ví dụ tranhung1@gmail.com
            subject: 'Mã OTP để đặt lại mật khẩu',
            text: `Mã OTP của bạn là: ${otp}. Mã này có hiệu lực trong 10 phút.`,
            html: `<p>Mã OTP của bạn là: <strong>${otp}</strong>. Mã này có hiệu lực trong 10 phút.</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${email} with OTP: ${otp}`);
        } catch (error) {
            console.error('Error sending email:', error);
            throw new BadRequestException('Không thể gửi email OTP. Vui lòng thử lại sau.');
        }
    }
}
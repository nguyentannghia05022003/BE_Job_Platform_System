import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User as UserM } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './dto/users.interface';
import { User } from 'src/decorator/customize';
import aqp from 'api-query-params';
import { Role, RoleDocument } from 'src/roles/schemas/role.schema';
import { USER_ROLE } from 'src/databases/sample';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserM.name)
    private userModel: SoftDeleteModel<UserDocument>,

    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RoleDocument>,
  ) { }

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async create(createUserDto: CreateUserDto, @User() user: IUser) {
    const { name, email, password, age, gender, address, role, company } = createUserDto;

    const isExist = await this.userModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(`Email: ${email} đã tồn tại trên hệ thống. Vui lòng sử dụng email khác.`);
    }

    const hashPassword = this.getHashPassword(password);

    const newUser = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role,
      company,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt,
    };
  }

  async register(user: RegisterUserDto) {
    const { name, email, password, age, gender, address } = user;

    const isExist = await this.userModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(`Email: ${email} đã tồn tại trên hệ thống. Vui lòng sử dụng email khác.`);
    }

    const userRole = await this.roleModel.findOne({ name: USER_ROLE });

    const hashPassword = this.getHashPassword(password);
    const newRegister = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role: userRole?._id,
    });
    return newRegister;
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .select('-password')
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Not found user`);

    return await this.userModel
      .findOne({ _id: id })
      .select('-password')
      .populate({ path: 'role', select: { name: 1, _id: 1 } });
  }

  findOneByUsername(username: string) {
    return this.userModel
      .findOne({ email: username })
      .populate({ path: 'role', select: { name: 1 } });
  }

  async findOneById(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Not found user`);

    return await this.userModel.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Not found User`);

    const updated = await this.userModel.updateOne(
      { _id: id },
      {
        ...updateUserDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return updated;
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Not found User`);

    const foundUser = await this.userModel.findById(id);
    if (foundUser && foundUser.email === 'admin@gmail.com') {
      throw new BadRequestException(`Not Delete Account Admin`);
    }

    await this.userModel.updateOne(
      { _id: id },
      {
        deleteBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.userModel.softDelete({ _id: id });
  }

  updateUserToken = async (refreshToken: string, _id: string) => {
    return await this.userModel.updateOne({ _id }, { refreshToken });
  };

  findUserByToken = async (refreshToken: string) => {
    return await this.userModel
      .findOne({ refreshToken })
      .populate({ path: 'role', select: { name: 1 } });
  };

  async findOneByEmail(email: string): Promise<UserDocument> {
    return await this.userModel.findOne({ email });
  }

  async saveOtp(_id: string, otp: string, otpExpiry: Date): Promise<void> {
    await this.userModel.updateOne({ _id }, { otp, otpExpiry });
  }

  async findUserByOtp(otp: string): Promise<UserDocument> {
    return await this.userModel.findOne({ otp });
  }

  async clearOtp(userId: string): Promise<void> {
    await this.userModel.updateOne({ _id: userId }, { otp: null, otpExpiry: null });
  }

  async updateUserPassword(id: string, newPassword: string): Promise<void> {
    const hashPassword = this.getHashPassword(newPassword);
    await this.userModel.updateOne({ _id: id }, { password: hashPassword });
  }

  // async register(user: RegisterUserDto) {
  //   const { name, email, password, age, gender, address } = user;

  //   // Kiểm tra email đã tồn tại
  //   const isExist = await this.userModel.findOne({ email });
  //   if (isExist) {
  //     throw new BadRequestException(`Email: ${email} đã tồn tại trên hệ thống. Vui lòng sử dụng email khác.`);
  //   }

  //   const userRole = await this.roleModel.findOne({ name: USER_ROLE });
  //   const hashPassword = this.getHashPassword(password);

  //   // Tạo user mới với isVerified = false
  //   const newRegister = await this.userModel.create({
  //     name,
  //     email,
  //     password: hashPassword,
  //     age,
  //     gender,
  //     address,
  //     role: userRole?._id,
  //     isVerified: false, // Chưa xác nhận
  //   });

  //   // Tạo và lưu OTP
  //   const otp = Math.floor(100000 + Math.random() * 900000).toString();
  //   const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // Hết hạn sau 10 phút
  //   await this.saveOtp(newRegister._id.toString(), otp, otpExpiry);

  //   return { _id: newRegister._id, email, otp }; // Trả về để gửi OTP qua email
  // }

  // async verifyOtp(email: string, otp: string): Promise<void> {
  //   const user = await this.userModel.findOne({ email, otp });
  //   if (!user) {
  //     throw new BadRequestException('OTP không hợp lệ hoặc email không đúng');
  //   }

  //   const now = new Date();
  //   if (now > user.otpExpiry) {
  //     throw new BadRequestException('OTP đã hết hạn');
  //   }

  //   // Cập nhật trạng thái xác nhận
  //   await this.userModel.updateOne(
  //     { _id: user._id },
  //     { isVerified: true, otp: null, otpExpiry: null },
  //   );
  // }

  // findOneByUsername(username: string) {
  //   return this.userModel
  //     .findOne({ email: username })
  //     .populate({ path: 'role', select: { name: 1 } });
  // }
}
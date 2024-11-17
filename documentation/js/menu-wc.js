'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-basic-hoidanit documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' :
                                            'id="xs-controllers-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' :
                                        'id="xs-injectables-links-module-AppModule-f0cdf96857b45b8cbb412b686dc972f028f4a5843727a060176a9866ca3aebe0b69e6104a10bc872668d041c77c425d8d1d1f75f5e2a2d10b605a7c3caa9a354"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' :
                                            'id="xs-controllers-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' :
                                        'id="xs-injectables-links-module-AuthModule-7945e9ba57aa328ed7086782b00dbac42ea284451c5a848047e9c7e0d4a2fc1e971d132ffba83009c9b234eef1dd49ef33efad431656f6f75218a48a99b830c5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' :
                                            'id="xs-controllers-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' :
                                        'id="xs-injectables-links-module-CompaniesModule-d622436a05c2b0e504edb2ef9e92e1c68c144a303c4db9a6e8bf1ee81d2640ba4ea5ef75186f4960e72f74d3edc31a5c8c8f31cbd8311179ae8ab1a61bca83b8"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' :
                                            'id="xs-controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' :
                                        'id="xs-injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' :
                                            'id="xs-controllers-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' :
                                        'id="xs-injectables-links-module-FilesModule-3c7f78199d7fbec00ddd333714062df4ef707f7bded13110878a2fe0ad91dbee6bd9310b7c362ed7adf28d24750c911ce8763dd2a8116520c71cd3e93a220d5e"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' :
                                            'id="xs-controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' :
                                            'id="xs-controllers-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' :
                                        'id="xs-injectables-links-module-JobsModule-73eb5fb3c004a46fa0a315762cd06402c6520ff6714065edc30ae83345c015798c33c24f00aa86ed4080a8466847936ff2af9b0ab465ae49959ae8c34475bcc9"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' : 'data-bs-target="#xs-controllers-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' :
                                            'id="xs-controllers-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' : 'data-bs-target="#xs-injectables-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' :
                                        'id="xs-injectables-links-module-MailModule-bf0b29ecb45ed4b8917be9714a9d1e6a49138185fbc6b6cc695b7ca9a40d7150e967ca809ecc47b99be1d953712466efb582fbc26bb7ae14aac1bfdfc9b2d977"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' :
                                            'id="xs-controllers-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' :
                                        'id="xs-injectables-links-module-PermissionsModule-f0be16b782165a1fe38bdb2e843461603fac718371d0a211282f3c8cffb86778fd4a9c7f730e59daba6306cd888887e4711d8cc07bafe41ddc89ace6d279a4f3"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' :
                                            'id="xs-controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' :
                                        'id="xs-injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' :
                                            'id="xs-controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' :
                                        'id="xs-injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' :
                                            'id="xs-controllers-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' :
                                        'id="xs-injectables-links-module-SubscribersModule-0f3543f85b54c40d705bb6fd45bbea19087d4402ff283d740aa2f3ba846bc8665794d8a202b0f3114920e76e6056a9a6b8e80b899ed3da2ee9c53d6ceab49a39"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' :
                                            'id="xs-controllers-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' :
                                        'id="xs-injectables-links-module-UsersModule-f5e0d23ebf6b5285235216ae593c7369c5eb7659a348b37541088c8a4e7768a2324c3bc0a1da7ea197ce2885d915e7405b39d0c47412c745a2e20a7fb6ba779d"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedBy.html" data-type="entity-link" >UpdatedBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
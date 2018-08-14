(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.breadcrumb.component.html":
/*!***********************************************!*\
  !*** ./src/app/app.breadcrumb.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-breadcrumb\">\n    <ul>\n        <li>\n            <a routerLink=\"\">\n                <i class=\"material-icons\">home</i>\n            </a>\n        </li>\n        <li>/</li>\n        <ng-template ngFor let-item let-last=\"last\" [ngForOf]=\"items\">\n            <li>\n                <a [routerLink]=\"item.routerLink\" *ngIf=\"item.routerLink\">{{item.label}}</a>\n                <ng-container *ngIf=\"!item.routerLink\">{{item.label}}</ng-container>\n            </li>\n            <li *ngIf=\"!last\">/</li>\n        </ng-template>\n    </ul>\n\n    <div class=\"layout-breadcrumb-options\">\n     \n        <a routerLink=\"/\" title=\"خروج\">\n            <i class=\"material-icons\">power_settings_new</i>\n        </a>\n    </div>\n</div>\n\n\n<!--\n\n       <a routerLink=\"/\" title=\"Backup\">\n            <i class=\"material-icons\">backup</i>\n        </a>\n        <a routerLink=\"/\" title=\"Bookmark\">\n            <i class=\"material-icons\">bookmark</i>\n        </a>\n-->"

/***/ }),

/***/ "./src/app/app.breadcrumb.component.ts":
/*!*********************************************!*\
  !*** ./src/app/app.breadcrumb.component.ts ***!
  \*********************************************/
/*! exports provided: AppBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbComponent", function() { return AppBreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(breadcrumbService) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
            _this.items = response;
        });
    }
    AppBreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppBreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./app.breadcrumb.component.html */ "./src/app/app.breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], AppBreadcrumbComponent);
    return AppBreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"layout-wrapper\" [ngClass]=\"{'layout-compact':layoutCompact}\" (click)=\"onLayoutClick()\">\r\n\r\n    <div   #layoutContainer class=\"layout-container\"\r\n            [ngClass]=\"{'menu-layout-static': !isOverlay(),\r\n            'menu-layout-overlay': isOverlay(),\r\n            'layout-menu-overlay-active': overlayMenuActive,\r\n            'menu-layout-horizontal': isHorizontal(),\r\n            'menu-layout-slim': isSlim(),\r\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\r\n            'layout-menu-static-active': staticMenuMobileActive}\">\r\n\r\n        <app-topbar></app-topbar>\r\n\r\n        <div  id=\"rightpanel\" class=\"layout-menu\" [ngClass]=\"{'layout-menu-dark':darkMenu}\" (click)=\"onMenuClick($event)\">\r\n            <p-scrollPanel #scrollPanel [style]=\"{height: '100%'}\">\r\n                <app-inline-profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\"></app-inline-profile>\r\n               \r\n               \r\n                <app-menu ></app-menu>\r\n\r\n            </p-scrollPanel>\r\n        </div>\r\n\r\n        <div  class=\"layout-main\">\r\n            <app-breadcrumb id=\"crumb\" ></app-breadcrumb>\r\n\r\n            <div  class=\"layout-content\">\r\n                <router-outlet></router-outlet>\r\n\r\n                <form id=\"loginfrm\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputEmail1\">Email address</label>\r\n                      <input [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputPassword1\">Password</label>\r\n                      <input [(ngModel)]=\"pass\" name=\"pass\" id=\"pass\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n                    </div>\r\n                    <button id=\"btnlogin\" type=\"button\" (click)=\"loginme()\" class=\"btn btn-primary\">Login</button>\r\n               \r\n                  </form>\r\n\r\n                \r\n                <app-footer id=\"footer\" ></app-footer>\r\n            </div>\r\n        </div>\r\n\r\n        <app-rightpanel></app-rightpanel>\r\n\r\n        <div class=\"layout-mask\"></div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n  visibility: hidden; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["SLIM"] = 2] = "SLIM";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 3] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer2, zone, route) {
        this.renderer2 = renderer2;
        this.zone = zone;
        this.route = route;
        this.layoutCompact = true;
        this.layoutMode = MenuOrientation.STATIC;
        this.darkMenu = false;
        this.profileMode = 'inline';
        this.login = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        //    this.glob.login=false;
        //  this.zone.runOutsideAngular(() => {this.bindRipple(); });
    };
    AppComponent.prototype.hidecomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.add("hidden");
        element = document.getElementById("crumb");
        element.classList.add("hidden");
        element = document.getElementById("footer");
        element.classList.add("hidden");
        element = document.getElementById("loginfrm");
        element.classList.remove("hidden");
    };
    AppComponent.prototype.showcomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.remove("hidden");
        element = document.getElementById("crumb");
        element.classList.remove("hidden");
        element = document.getElementById("footer");
        element.classList.remove("hidden");
        element = document.getElementById("loginfrm");
        element.classList.add("hidden");
    };
    AppComponent.prototype.loginme = function () {
        if (this.email == 'admin@admin.com'.toLowerCase() && this.pass == '123') {
            localStorage.setItem('login', 'true');
            this.route.navigate(['/dashboard']);
            this.showcomp();
        }
        else {
            alert('بيانات خاطئة');
        }
    };
    AppComponent.prototype.bindRipple = function () {
        this.rippleInitListener = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.rippleInitListener);
    };
    AppComponent.prototype.init = function () {
        this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
        document.addEventListener('mousedown', this.rippleMouseDownListener, false);
    };
    AppComponent.prototype.rippleMouseDown = function (e) {
        for (var target = e.target; target && target !== this; target = target['parentNode']) {
            if (!this.isVisible(target)) {
                continue;
            }
            // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
            if (this.selectorMatches(target, '.ripplelink, .ui-button')) {
                var element = target;
                this.rippleEffect(element, e);
                break;
            }
        }
    };
    AppComponent.prototype.selectorMatches = function (el, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p['webkitMatchesSelector'] || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
    };
    AppComponent.prototype.isVisible = function (el) {
        return !!(el.offsetWidth || el.offsetHeight);
    };
    AppComponent.prototype.rippleEffect = function (element, e) {
        if (element.querySelector('.ink') === null) {
            var inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');
            if (this.hasClass(element, 'ripplelink') && element.querySelector('span')) {
                element.querySelector('span').insertAdjacentHTML('afterend', '<span class=\'ink\'></span>');
            }
            else {
                element.appendChild(inkEl);
            }
        }
        var ink = element.querySelector('.ink');
        this.removeClass(ink, 'ripple-animate');
        if (!ink.offsetHeight && !ink.offsetWidth) {
            var d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        var x = e.pageX - this.getOffset(element).left - (ink.offsetWidth / 2);
        var y = e.pageY - this.getOffset(element).top - (ink.offsetHeight / 2);
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none';
        this.addClass(ink, 'ripple-animate');
    };
    AppComponent.prototype.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    };
    AppComponent.prototype.addClass = function (element, className) {
        if (element.classList) {
            element.classList.add(className);
        }
        else {
            element.className += ' ' + className;
        }
    };
    AppComponent.prototype.removeClass = function (element, className) {
        if (element.classList) {
            element.classList.remove(className);
        }
        else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    AppComponent.prototype.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    };
    AppComponent.prototype.unbindRipple = function () {
        if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
        }
        if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = this.layourContainerViewChild.nativeElement;
        setTimeout(function () { _this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    };
    AppComponent.prototype.onLayoutClick = function () {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.resetMenu = true;
            }
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }
            this.menuHoverActive = false;
        }
        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.menuClick = true;
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }
        }
        event.preventDefault();
    };
    AppComponent.prototype.onMenuClick = function ($event) {
        this.menuClick = true;
        this.resetMenu = false;
    };
    AppComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        this.hideOverlayMenu();
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarSubItemClick = function (event) {
        event.preventDefault();
    };
    AppComponent.prototype.onRightPanelButtonClick = function (event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    };
    AppComponent.prototype.onRightPanelClick = function () {
        this.rightPanelClick = true;
    };
    AppComponent.prototype.hideOverlayMenu = function () {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    };
    AppComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    AppComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    AppComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    AppComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    AppComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    AppComponent.prototype.isSlim = function () {
        return this.layoutMode === MenuOrientation.SLIM;
    };
    AppComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    AppComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    AppComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    AppComponent.prototype.changeToSlimMenu = function () {
        this.layoutMode = MenuOrientation.SLIM;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unbindRipple();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layoutContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "layourContainerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ScrollPanel"])
    ], AppComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.footer.component.ts":
/*!*****************************************!*\
  !*** ./src/app/app.footer.component.ts ***!
  \*****************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: "\n        <div class=\"footer\">\n            <div class=\"card clearfix\">\n                <span style=\"font-family:cairo-semibold;\" class=\"footer-text-left\">By trioinsight.com</span>\n                <span class=\"footer-text-right\">\n                  \n                    <span style=\"font-family:cairo-semibold;\"> \u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u062D\u0641\u0648\u0638\u0629 </span>\n                    <span class=\"material-icons ui-icon-copyright\"></span>\n                </span>\n            </div>\n        </div>\n\n       \n    "
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/app.menu.component.ts":
/*!***************************************!*\
  !*** ./src/app/app.menu.component.ts ***!
  \***************************************/
/*! exports provided: AppMenuComponent, AppSubMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function() { return AppMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSubMenuComponent", function() { return AppSubMenuComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent(app) {
        this.app = app;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        this.model = [
            /*
            {
                label: 'الستايل', icon: 'palette',
                items: [
                    {label: 'أزرق', icon: 'brush', command: (event) => {this.changeTheme('indigo'); }},
                    {label: 'بني', icon: 'brush', command: (event) => {this.changeTheme('brown'); }},
                     {label: 'كحلي', icon: 'brush', command: (event) => {this.changeTheme('dark-green'); }},
                    {label: 'أخضر', icon: 'brush', command: (event) => {this.changeTheme('green'); }},
                     {label: 'بنفسجي', icon: 'brush', command: (event) => {this.changeTheme('purple-amber'); }},
                   ]
            },

            */
            /*
            {
                label: 'تخصيص', icon: 'settings_application',
                items: [
                    {label: 'حجم صغير', icon: 'fiber_manual_record', command: () => this.app.layoutCompact = true},
                    {label: 'حجم كبير', icon: 'fiber_smart_record',  command: () => this.app.layoutCompact = false},
                   
                    {label: 'قائمة مضيئة', icon: 'label_outline',  command: () => this.app.darkMenu = false},
                    {label: 'قائمة معتمة', icon: 'label',  command: () => this.app.darkMenu = true},
          ]
            },

            */
            { label: 'الرئيسية', icon: 'dashboard', routerLink: ['/'] },
            { label: 'المستخدمين', icon: 'account_box', routerLink: ['/users'] },
            { label: 'الحجوزات', icon: 'book', routerLink: ['/books'] },
            { label: 'الأخبار والعروض', icon: 'receipt', routerLink: ['/news'] },
            { label: 'التنبيهات', icon: 'note', routerLink: ['/notes/0'] },
        ];
    };
    AppMenuComponent.prototype.changeTheme = function (theme) {
        var themeLink = document.getElementById('theme-css');
        var layoutLink = document.getElementById('layout-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppMenuComponent.prototype, "reset", void 0);
    AppMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: "\n        <ul style=\"font-family:cairo-semibold;\" app-submenu [item]=\"model\" root=\"true\" class=\"ultima-menu ultima-main-menu clearfix\"\n            [reset]=\"reset\" visible=\"true\" parentActive=\"true\"></ul>\n\n            \n    "
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], AppMenuComponent);
    return AppMenuComponent;
}());

var AppSubMenuComponent = /** @class */ (function () {
    function AppSubMenuComponent(app, route) {
        this.app = app;
        this.route = route;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        var _this = this;
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
            /*
            if(index==0){
                localStorage.setItem('login', 'true');
           }
            if(index==1){
                localStorage.setItem('login', 'users');
           }
           if(index==2){
            localStorage.setItem('login', 'books');
       }
       if(index==3){
        localStorage.setItem('login', 'news');
   }
   if(index==4){
    localStorage.setItem('login', 'notes');
}

*/
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(function () {
                _this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            }
            else {
                this.app.resetMenu = false;
            }
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    };
    AppSubMenuComponent.prototype.onMouseEnter = function (index) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSubMenuComponent.prototype, "parentActive", {
        get: function () {
            return this._parentActive;
        },
        set: function (val) {
            this._parentActive = val;
            if (!this._parentActive) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AppSubMenuComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "root", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "reset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "parentActive", null);
    AppSubMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            /* tslint:disable:component-selector */
            selector: '[app-submenu]',
            /* tslint:enable:component-selector */
            template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\" *ngIf=\"child.visible === false ? false : true\">\n              \n            <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\"\n                   class=\"ripplelink\" *ngIf=\"!child.routerLink\"\n                    [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n\n                <a (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\" class=\"ripplelink\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n                   [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">{{child.label}}</div>\n                </div>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\" [parentActive]=\"isActive(i)\"\n                    [@children]=\"(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?\n                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n            </li>\n        </ng-template>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('children', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*',
                        'z-index': 100
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px',
                        'z-index': '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AppSubMenuComponent);
    return AppSubMenuComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.menu.component */ "./src/app/app.menu.component.ts");
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.topbar.component */ "./src/app/app.topbar.component.ts");
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.footer.component */ "./src/app/app.footer.component.ts");
/* harmony import */ var _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.breadcrumb.component */ "./src/app/app.breadcrumb.component.ts");
/* harmony import */ var _app_rightpanel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.rightpanel.component */ "./src/app/app.rightpanel.component.ts");
/* harmony import */ var _app_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.profile.component */ "./src/app/app.profile.component.ts");
/* harmony import */ var _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demo/view/dashboarddemo.component */ "./src/app/demo/view/dashboarddemo.component.ts");
/* harmony import */ var _demo_view_sampledemo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./demo/view/sampledemo.component */ "./src/app/demo/view/sampledemo.component.ts");
/* harmony import */ var _demo_view_formsdemo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./demo/view/formsdemo.component */ "./src/app/demo/view/formsdemo.component.ts");
/* harmony import */ var _demo_view_datademo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./demo/view/datademo.component */ "./src/app/demo/view/datademo.component.ts");
/* harmony import */ var _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./demo/view/panelsdemo.component */ "./src/app/demo/view/panelsdemo.component.ts");
/* harmony import */ var _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./demo/view/overlaysdemo.component */ "./src/app/demo/view/overlaysdemo.component.ts");
/* harmony import */ var _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./demo/view/menusdemo.component */ "./src/app/demo/view/menusdemo.component.ts");
/* harmony import */ var _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./demo/view/messagesdemo.component */ "./src/app/demo/view/messagesdemo.component.ts");
/* harmony import */ var _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./demo/view/miscdemo.component */ "./src/app/demo/view/miscdemo.component.ts");
/* harmony import */ var _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./demo/view/emptydemo.component */ "./src/app/demo/view/emptydemo.component.ts");
/* harmony import */ var _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./demo/view/filedemo.component */ "./src/app/demo/view/filedemo.component.ts");
/* harmony import */ var _demo_view_utilsdemo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./demo/view/utilsdemo.component */ "./src/app/demo/view/utilsdemo.component.ts");
/* harmony import */ var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./demo/view/documentation.component */ "./src/app/demo/view/documentation.component.ts");
/* harmony import */ var _demo_service_carservice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./demo/service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./demo/service/countryservice */ "./src/app/demo/service/countryservice.ts");
/* harmony import */ var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./demo/service/eventservice */ "./src/app/demo/service/eventservice.ts");
/* harmony import */ var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./demo/service/nodeservice */ "./src/app/demo/service/nodeservice.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./breadcrumb.service */ "./src/app/breadcrumb.service.ts");
/* harmony import */ var _demo_service_myservices__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./demo/service/myservices */ "./src/app/demo/service/myservices.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _mycomponents_books_books__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./mycomponents/books/books */ "./src/app/mycomponents/books/books.ts");
/* harmony import */ var _mycomponents_news_news__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mycomponents/news/news */ "./src/app/mycomponents/news/news.ts");
/* harmony import */ var _mycomponents_notes_notes__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mycomponents/notes/notes */ "./src/app/mycomponents/notes/notes.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mycomponents_users_users__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./mycomponents/users/users */ "./src/app/mycomponents/users/users.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _mycomponents_home_home__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./mycomponents/home/home */ "./src/app/mycomponents/home/home.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./safe-html.pipe */ "./src/app/safe-html.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































































































var config = {
    apiKey: "AIzaSyB1XqxTZmIRCUSqZAa9smfdgRZmPy3zDvI",
    authDomain: "hospital-app-7cd96.firebaseapp.com",
    databaseURL: "https://hospital-app-7cd96.firebaseio.com",
    projectId: "hospital-app-7cd96",
    storageBucket: "hospital-app-7cd96.appspot.com",
    messagingSenderId: "630326690969"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_42__["routes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ChipsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ContextMenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DataGridModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DataListModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DataScrollerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DataTableModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_7__["DataViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["EditorModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["FieldsetModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["GalleriaModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["GMapModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["GrowlModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["InputMaskModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["InputSwitchModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["InputTextareaModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["LightboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ListboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MegaMenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MenubarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MessagesModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MultiSelectModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["OrderListModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["OrganizationChartModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["OverlayPanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["PaginatorModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["PanelMenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["PasswordModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["PickListModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["RadioButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["RatingModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ScheduleModule"],
                primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_8__["ScrollPanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SlideMenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SliderModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SpinnerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["StepsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TabMenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TerminalModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TieredMenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ToggleButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TreeModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TreeTableModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_38__["AngularFireModule"].initializeApp(config),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_36__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_37__["AngularFireAuthModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MessagesModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_48__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_48__["FroalaViewModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _app_menu_component__WEBPACK_IMPORTED_MODULE_11__["AppMenuComponent"],
                _app_menu_component__WEBPACK_IMPORTED_MODULE_11__["AppSubMenuComponent"],
                _app_topbar_component__WEBPACK_IMPORTED_MODULE_12__["AppTopbarComponent"],
                _app_footer_component__WEBPACK_IMPORTED_MODULE_13__["AppFooterComponent"],
                _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__["AppBreadcrumbComponent"],
                _app_rightpanel_component__WEBPACK_IMPORTED_MODULE_15__["AppRightpanelComponent"],
                _app_profile_component__WEBPACK_IMPORTED_MODULE_16__["AppInlineProfileComponent"],
                _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_17__["DashboardDemoComponent"],
                _demo_view_sampledemo_component__WEBPACK_IMPORTED_MODULE_18__["SampleDemoComponent"],
                _demo_view_formsdemo_component__WEBPACK_IMPORTED_MODULE_19__["FormsDemoComponent"],
                _demo_view_datademo_component__WEBPACK_IMPORTED_MODULE_20__["DataDemoComponent"],
                _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_21__["PanelsDemoComponent"],
                _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_22__["OverlaysDemoComponent"], _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_23__["MenusDemoComponent"],
                _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_24__["MessagesDemoComponent"],
                _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_25__["MiscDemoComponent"],
                _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_26__["EmptyDemoComponent"],
                _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_27__["FileDemoComponent"],
                _demo_view_utilsdemo_component__WEBPACK_IMPORTED_MODULE_28__["UtilsDemoComponent"],
                _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_29__["DocumentationComponent"],
                _mycomponents_users_users__WEBPACK_IMPORTED_MODULE_44__["UsersComponent"],
                _mycomponents_books_books__WEBPACK_IMPORTED_MODULE_39__["BooksComponent"],
                _mycomponents_news_news__WEBPACK_IMPORTED_MODULE_40__["NewsComponent"],
                _mycomponents_notes_notes__WEBPACK_IMPORTED_MODULE_41__["NotesComponent"],
                _mycomponents_home_home__WEBPACK_IMPORTED_MODULE_46__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_47__["LoginComponent"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_49__["SafeHtmlPipe"],
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] },
                _demo_service_carservice__WEBPACK_IMPORTED_MODULE_30__["CarService"], _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_31__["CountryService"], _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_32__["EventService"], _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_33__["NodeService"], _breadcrumb_service__WEBPACK_IMPORTED_MODULE_34__["BreadcrumbService"], _demo_service_myservices__WEBPACK_IMPORTED_MODULE_35__["myservicesService"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_45__["MessageService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.profile.component.ts":
/*!******************************************!*\
  !*** ./src/app/app.profile.component.ts ***!
  \******************************************/
/*! exports provided: AppInlineProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInlineProfileComponent", function() { return AppInlineProfileComponent; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppInlineProfileComponent = /** @class */ (function () {
    function AppInlineProfileComponent(app, route) {
        this.app = app;
        this.route = route;
    }
    AppInlineProfileComponent.prototype.onClick = function (event) {
        var _this = this;
        this.active = !this.active;
        setTimeout(function () {
            _this.app.layoutMenuScrollerViewChild.moveBar();
        }, 450);
        event.preventDefault();
    };
    AppInlineProfileComponent.prototype.logout = function () {
        localStorage.setItem('login', 'false');
        this.route.navigate(['/login']);
        this.showcomp();
    };
    AppInlineProfileComponent.prototype.showcomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.remove("hidden");
        element = document.getElementById("crumb");
        element.classList.remove("hidden");
        element = document.getElementById("footer");
        element.classList.remove("hidden");
        element = document.getElementById("loginfrm");
        element.classList.add("hidden");
    };
    AppInlineProfileComponent.prototype.hidecomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.add("hidden");
        element = document.getElementById("crumb");
        element.classList.add("hidden");
        element = document.getElementById("footer");
        element.classList.add("hidden");
        element = document.getElementById("loginfrm");
        element.classList.remove("hidden");
    };
    AppInlineProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inline-profile',
            template: "\n        <div class=\"profile\" [ngClass]=\"{'profile-expanded':active}\">\n            <a href=\"#\" (click)=\"onClick($event)\">\n                <img style=\"width: 80px;\n                height: 80px;\n                border-radius: 50%;\" class=\"profile-image\" src=\"assets/imgs/doc.png\" />\n                <span style=\"font-weight:bold;\" class=\"profile-name\">\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A</span>\n                <i class=\"material-icons\">keyboard_arrow_down</i>\n            </a>\n        </div>\n\n        <ul class=\"ultima-menu profile-menu\" [@menu]=\"active ? 'visible' : 'hidden'\">\n            <li role=\"menuitem\">\n                <a id=\"myprof\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\">person</i>\n                    <span>\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A</span>\n                </a>\n            </li>\n           \n            <li id=\"logout\" (click)=\"logout()\" role=\"menuitem\">\n                <a  class=\"ripplelink mylink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\">power_settings_new</i>\n                    <span>\u062E\u0631\u0648\u062C</span>\n                </a>\n            </li>\n        </ul>\n\n        <style>\n        #logout:hover,#myprof:hover{\n            cursor:pointer;\n            color:blue;\n        } \n        </style>\n     \n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppInlineProfileComponent);
    return AppInlineProfileComponent;
}());



/***/ }),

/***/ "./src/app/app.rightpanel.component.ts":
/*!*********************************************!*\
  !*** ./src/app/app.rightpanel.component.ts ***!
  \*********************************************/
/*! exports provided: AppRightpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightpanelComponent", function() { return AppRightpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppRightpanelComponent = /** @class */ (function () {
    function AppRightpanelComponent(app) {
        this.app = app;
    }
    AppRightpanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollRightPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ScrollPanel"])
    ], AppRightpanelComponent.prototype, "rightPanelMenuScrollerViewChild", void 0);
    AppRightpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rightpanel',
            template: "\n        <div class=\"layout-rightpanel\" [ngClass]=\"{'layout-rightpanel-active': app.rightPanelActive}\" (click)=\"app.onRightPanelClick()\">\n            <p-scrollPanel #scrollRightPanel [style]=\"{height: '100%'}\">\n              <div class=\"layout-rightpanel-wrapper\">\n                <div class=\"layout-rightpanel-header\">\n                    <div class=\"weather-day\">Wednesday</div>\n                    <div class=\"weather-date\">Jan 26</div>\n                </div>\n\n                <div class=\"layout-rightpanel-content\">\n                    <h1>Weather</h1>\n                    <h2>San Francisco, USA</h2>\n\n                    <div class=\"weather-today\">\n                        <span class=\"weather-today-value\">21&#8451;</span>\n                        <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\" width=\"60\"/>\n                    </div>\n\n                    <ul class=\"weekly-weather\">\n                        <li>\n                            Thursday\n                            <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\n                            <span class=\"weekly-weather-value\">24</span>\n                        </li>\n                        <li>\n                            Friday\n                            <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\n                            <span class=\"weekly-weather-value\">19</span>\n                        </li>\n                        <li>\n                            Saturday\n                            <img src=\"assets/layout/images/dashboard/weather-icon-4.svg\"/>\n                            <span class=\"weekly-weather-value\">15</span>\n                        </li>\n                        <li>\n                            Sunday\n                            <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\n                            <span class=\"weekly-weather-value\">24</span>\n                        </li>\n                        <li>\n                            Monday\n                            <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\"/>\n                            <span class=\"weekly-weather-value\">21</span>\n                        </li>\n                        <li>\n                            Tuesday\n                            <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\n                            <span class=\"weekly-weather-value\">20</span>\n                        </li>\n                    </ul>\n                </div>\n              </div>\n            </p-scrollPanel>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], AppRightpanelComponent);
    return AppRightpanelComponent;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes, AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _mycomponents_books_books__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycomponents/books/books */ "./src/app/mycomponents/books/books.ts");
/* harmony import */ var _mycomponents_news_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycomponents/news/news */ "./src/app/mycomponents/news/news.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/view/dashboarddemo.component */ "./src/app/demo/view/dashboarddemo.component.ts");
/* harmony import */ var _mycomponents_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mycomponents/users/users */ "./src/app/mycomponents/users/users.ts");
/* harmony import */ var _mycomponents_notes_notes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mycomponents/notes/notes */ "./src/app/mycomponents/notes/notes.ts");
/* harmony import */ var _mycomponents_home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycomponents/home/home */ "./src/app/mycomponents/home/home.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







//import { AuthGuard } from './core/auth.guard';

//import { AppInlineProfileComponent } from './profile/app.profile.component';
var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'home', component: _mycomponents_home_home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    //  {path: 'profile', component: AppInlineProfileComponent,},
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'dashboard', component: _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_3__["DashboardDemoComponent"] },
    { path: 'users', component: _mycomponents_users_users__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
    { path: 'books', component: _mycomponents_books_books__WEBPACK_IMPORTED_MODULE_0__["BooksComponent"] },
    { path: 'news', component: _mycomponents_news_news__WEBPACK_IMPORTED_MODULE_1__["NewsComponent"] },
    { path: 'notes/:id', component: _mycomponents_notes_notes__WEBPACK_IMPORTED_MODULE_5__["NotesComponent"] },
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.topbar.component.ts":
/*!*****************************************!*\
  !*** ./src/app/app.topbar.component.ts ***!
  \*****************************************/
/*! exports provided: AppTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTopbarComponent", function() { return AppTopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppTopbarComponent = /** @class */ (function () {
    function AppTopbarComponent(app) {
        this.app = app;
    }
    AppTopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: "\n        <div class=\"topbar clearfix\">\n           \n        <img style=\"width: 400px;\n        margin-top: 10px;\n        margin-left: 10px;\n        float: left;\" src=\"assets/imgs/logo2.png\"/>\n\n            <div style=\"background:#3f51b5;\" class=\"topbar-right\">\n         \n            <a id=\"menu-button\" href=\"#\" (click)=\"app.onMenuButtonClick($event)\">\n                    <i></i>\n                </a>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], AppTopbarComponent);
    return AppTopbarComponent;
}());

/*


                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="material-icons">menu</i>
                </a>

                <ul class="topbar-items animated fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                    <li #profile class="profile-item" *ngIf="app.profileMode==='top'||app.isHorizontal()"
                        [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">

                        <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                            <img class="profile-image" src="assets/layout/images/avatar.png" />
                            <span class="topbar-item-name">إدارة العملاء والحجوزات</span>
                        </a>

                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">person</i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">security</i>
                                    <span>Privacy</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">settings_applications</i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">power_settings_new</i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #settings [ngClass]="{'active-top-menu':app.activeTopbarItem === settings}">
                        <a href="#" (click)="app.onTopbarItemClick($event,settings)">
                            <i class="topbar-icon material-icons">settings</i>
                            <span class="topbar-item-name">Settings</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">palette</i>
                                    <span>Change Theme</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">favorite_border</i>
                                    <span>Favorites</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">lock</i>
                                    <span>Lock Screen</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">wallpaper</i>
                                    <span>Wallpaper</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #messages [ngClass]="{'active-top-menu':app.activeTopbarItem === messages}">
                        <a href="#" (click)="app.onTopbarItemClick($event,messages)">
                            <i class="topbar-icon material-icons animated swing">message</i>
                            <span class="topbar-badge animated rubberBand">5</span>
                            <span class="topbar-item-name">Messages</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                    <img src="assets/layout/images/avatar1.png" width="35"/>
                                    <span>Give me a call</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                    <img src="assets/layout/images/avatar2.png" width="35"/>
                                    <span>Sales reports attached</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                    <img src="assets/layout/images/avatar3.png" width="35"/>
                                    <span>About your invoice</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                    <img src="assets/layout/images/avatar2.png" width="35"/>
                                    <span>Meeting today at 10pm</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                    <img src="assets/layout/images/avatar4.png" width="35"/>
                                    <span>Out of office</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #notifications [ngClass]="{'active-top-menu':app.activeTopbarItem === notifications}">
                        <a href="#" (click)="app.onTopbarItemClick($event,notifications)">
                            <i class="topbar-icon material-icons">timer</i>
                            <span class="topbar-badge animated rubberBand">4</span>
                            <span class="topbar-item-name">Notifications</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">bug_report</i>
                                    <span>Pending tasks</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">event</i>
                                    <span>Meeting today at 3pm</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">file_download</i>
                                    <span>Download documents</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">flight</i>
                                    <span>Book flight</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                  
                </ul>
            </div>

*/ 


/***/ }),

/***/ "./src/app/breadcrumb.service.ts":
/*!***************************************!*\
  !*** ./src/app/breadcrumb.service.ts ***!
  \***************************************/
/*! exports provided: BreadcrumbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbService", function() { return BreadcrumbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BreadcrumbService = /** @class */ (function () {
    function BreadcrumbService() {
        this.itemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemsHandler = this.itemsSource.asObservable();
    }
    BreadcrumbService.prototype.setItems = function (items) {
        this.itemsSource.next(items);
    };
    BreadcrumbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BreadcrumbService);
    return BreadcrumbService;
}());



/***/ }),

/***/ "./src/app/demo/service/carservice.ts":
/*!********************************************!*\
  !*** ./src/app/demo/service/carservice.ts ***!
  \********************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('assets/demo/data/cars-small.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsMedium = function () {
        return this.http.get('assets/demo/data/cars-medium.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsLarge = function () {
        return this.http.get('assets/demo/data/cars-large.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/demo/service/countryservice.ts":
/*!************************************************!*\
  !*** ./src/app/demo/service/countryservice.ts ***!
  \************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get('assets/demo/data/countries.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/demo/service/eventservice.ts":
/*!**********************************************!*\
  !*** ./src/app/demo/service/eventservice.ts ***!
  \**********************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        return this.http.get('assets/demo/data/scheduleevents.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/demo/service/myservices.ts":
/*!********************************************!*\
  !*** ./src/app/demo/service/myservices.ts ***!
  \********************************************/
/*! exports provided: myservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myservicesService", function() { return myservicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var myservicesService = /** @class */ (function () {
    function myservicesService(http) {
        this.http = http;
    }
    myservicesService.prototype.getNews = function () {
        var api_url = 'http://wordpress-107138-442964.cloudwaysapps.com/news/datanews.php';
        return this.http.get(api_url);
    };
    myservicesService.prototype.getNotify = function () {
        var api_url = 'http://dhsahospital.com/fcm/datafcm.php';
        return this.http.get(api_url);
    };
    myservicesService.prototype.getAppointments = function () {
        var api_url = 'http://dhsahospital.com/booking/databooking.php';
        //   let api_url= 'http://dhsahospital.com/booking/databooking.php';
        return this.http.get(api_url);
    };
    myservicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], myservicesService);
    return myservicesService;
}());



/***/ }),

/***/ "./src/app/demo/service/nodeservice.ts":
/*!*********************************************!*\
  !*** ./src/app/demo/service/nodeservice.ts ***!
  \*********************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
    }
    NodeService.prototype.getFiles = function () {
        return this.http.get('assets/demo/data/files.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    NodeService.prototype.getFilesystem = function () {
        return this.http.get('assets/demo/data/filesystem.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    NodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "./src/app/demo/view/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo/view/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4 style=\"color: blue;float: right;\">الرئيسية</h4>\n\n<br><br>\n\n<div class=\"ui-g dashboard\">\n   \n   \n\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-1\">\n            <div class=\"ui-g-4\">\n                <i class=\"fa fa-users\"></i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span style=\"position: relative;color:#380d69;\n                top: -57px;\n                right: 59px;\" class=\"colorbox-name\">المستخدمين</span>\n                <a  pInputText pTooltip=\"اذهب لشاشة المستخدمين\" tooltipPosition=\"bottom\" placeholder=\"Bottom\" id=\"usersLink\" routerLink=\"/users\"\n                style=\"position:relative;right:50px;top:-20px;font-weight: bold;\" class=\"colorbox-count\">{{usersLength}}</a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-2\">\n            <div class=\"ui-g-4\">\n                <i class=\"fa fa-book\"></i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span style=\"position: relative;\n                top: -57px;\n                right: 59px;color:#380d69;\" class=\"colorbox-name\">الحجوزات</span>\n                <a  pInputText pTooltip=\"اذهب لشاشة الحجوزات\" tooltipPosition=\"bottom\" placeholder=\"Bottom\" id=\"usersLink\" routerLink=\"/books\" \n                 style=\"position:relative;right:50px;top:-20px;font-weight: bold;\" class=\"colorbox-count\">{{booksLength}}</a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-4\">\n            <div class=\"ui-g-4\">\n                <i class=\"fa fa-newspaper-o\"></i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span \n                style=\"position: relative;\n                top: -57px;\n                right: 75px;color:#380d69;\" class=\"colorbox-name\">الأخبار والعروض</span>\n                 <a  pInputText pTooltip=\"اذهب لشاشة الأخبار والعروض\" tooltipPosition=\"bottom\" placeholder=\"Bottom\" id=\"usersLink\" routerLink=\"/news\" \n                  style=\"position:relative;right:50px;top:-20px;font-weight: bold;\" class=\"colorbox-count\">{{newsLength}}</a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-3\">\n            <div class=\"ui-g-4\">\n                <i class=\"fa fa-bell\"></i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span style=\"position: relative;\n                top: -57px;\n                right: 75px;color:#380d69;\" class=\"colorbox-name\">التنبيهات</span>\n                <a  pInputText pTooltip=\"اذهب لشاشة التنبيهات\" tooltipPosition=\"bottom\" placeholder=\"Bottom\" id=\"usersLink\" routerLink=\"/notes/0\"   \n                style=\"position:relative;right:50px;top:-20px;font-weight: bold;\" class=\"colorbox-count\">{{notesLength}}</a>\n            </div>\n        </div>\n    </div>\n\n    \n    <div class=\"ui-g-12 ui-lg-6\">\n    <div class=\"card\">\n        <h1 style=\"float: right;\" class=\"centerText\">رسم دائري</h1>\n        <p-chart type=\"pie\" [data]=\"pieData\"></p-chart>\n    </div>\n    </div>\n\n\n    <div class=\"ui-g-12 ui-lg-6\">\n            <div class=\"card\">\n                    <h1 class=\"centerText\">رسم دائري</h1>\n                    <p-chart type=\"doughnut\" [data]=\"pieData\"></p-chart>\n                </div>\n                </div>\n\n\n    <div class=\"ui-g-12 ui-lg-6\">\n    <div class=\"card\">\n            <h1 style=\"float: right;\" class=\"centerText\">رسم خطي</h1>\n            <p-chart type=\"line\" [data]=\"lineData\"></p-chart>\n        </div>\n        </div>\n\n\n          \n                <div class=\"ui-g-12 ui-lg-6\">\n                        <div class=\"card\">\n                            <h1 class=\"centerText\">رسم خطي</h1>\n                            <p-chart type=\"bar\" [data]=\"barData\"></p-chart>\n                        </div>\n</div>\n                       \n                    \n\n\n                           \n<style>\n\n   .ui-inputtext{\n    background: none;\n     background-image: none;\n    background-size:none;\n     background-position:none;\n     transition:none;\n     border-width: none;\n     padding: none;\n     font-size: none;\n    -moz-border-radius: none;\n     -webkit-border-radius: none;\n border-radius: none;\n   }\n    #usersLink:hover{\n        color: yellow;\n        text-decoration: none;\n    }\n</style>"

/***/ }),

/***/ "./src/app/demo/view/dashboarddemo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/view/dashboarddemo.component.ts ***!
  \******************************************************/
/*! exports provided: DashboardDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDemoComponent", function() { return DashboardDemoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _service_eventservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/eventservice */ "./src/app/demo/service/eventservice.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
/* harmony import */ var _service_myservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/myservices */ "./src/app/demo/service/myservices.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardDemoComponent = /** @class */ (function () {
    function DashboardDemoComponent(carService, eventService, breadcrumbService, myserv, db, route) {
        var _this = this;
        this.carService = carService;
        this.eventService = eventService;
        this.breadcrumbService = breadcrumbService;
        this.myserv = myserv;
        this.db = db;
        this.route = route;
        route.events.subscribe(function (val) {
            _this.showcomp();
        });
        /*
          route.events.subscribe((val) => {

                if((localStorage.getItem('login').toString())=='users'){
                // this.showcomp();
                  route.navigate(['/#/users']);
               
             
              
              }
             else if((localStorage.getItem('login').toString())=='books'){
                  route.navigate(['/#/books']);
               
                  
              
              }
              else if((localStorage.getItem('login').toString())=='news'){
                  route.navigate(['/#/news']);
               
               
              
              }
              else if((localStorage.getItem('login').toString())=='notes'){
               
                  route.navigate(['/#/notes']);
               
                
              
              }
              else if((localStorage.getItem('login').toString())=='true'){
               
                  this.showcomp();
             
              }else  if((localStorage.getItem('login').toString())=='false'){
                   route.navigate(['/login']);
                    
                
              
              }
          
              
          });

*/
        this.itemList = db.list('users');
        this.breadcrumbService.setItems([
            { label: '' },
        ]);
    }
    DashboardDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemList.snapshotChanges().subscribe(function (actions) {
            _this.usersLength = actions.length;
        });
        this.myserv.getAppointments().subscribe(function (data) {
            _this.appointments = data['appointments'];
            _this.booksLength = data['appointments'].length;
        });
        this.myserv.getNews().subscribe(function (data) {
            _this.news = data['news'];
            _this.newsLength = data['news'].length;
        });
        this.myserv.getNotify().subscribe(function (data) {
            _this.notes = data['notes'];
            _this.notesLength = data['notes'].length;
        });
        setTimeout(function () {
            _this.pieData = {
                labels: ['التنبيهات', 'الأخبار والعروض', 'الحجوزات', 'المستخدمين'],
                datasets: [
                    {
                        data: [_this.notesLength, _this.newsLength, _this.booksLength, _this.usersLength],
                        backgroundColor: [
                            '#673ab7',
                            '#009688',
                            '#03a9f4',
                            '#4CAF50',
                        ],
                        hoverBackgroundColor: [
                            '#673ab7',
                            '#009688',
                            '#03a9f4',
                            '#4CAF50',
                        ]
                    }
                ]
            };
            _this.lineData = {
                labels: ['التنبيهات', 'الأخبار والعروض', 'الحجوزات', 'المستخدمين'],
                datasets: [
                    {
                        label: 'رسم بياني',
                        data: [_this.notesLength, _this.newsLength, _this.booksLength, _this.usersLength],
                        fill: false,
                        borderColor: '#03A9F4'
                    }
                ]
            };
            _this.barData = {
                //  labels: [   'التنبيهات', 'الأخبار والعروض','الحجوزات','المستخدمين'],
                datasets: [
                    {
                        label: 'التنبيهات',
                        backgroundColor: '#673ab7',
                        borderColor: '#673ab7',
                        //   this.notesLength,this.newsLength, this.newsLength,this.notesLength
                        data: [_this.notesLength]
                    },
                    {
                        label: 'الحجوزات',
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [_this.booksLength]
                    },
                    {
                        label: 'الأخبار والعروض',
                        backgroundColor: '#009688',
                        borderColor: '#009688',
                        data: [_this.newsLength]
                    },
                    {
                        label: 'المستخدمين',
                        backgroundColor: '#4CAF50',
                        borderColor: '#4CAF50',
                        data: [_this.usersLength]
                    },
                ]
            };
            _this.polarData2 = {
                datasets: [{
                        data: [
                            _this.notesLength, _this.newsLength, _this.booksLength, _this.usersLength
                        ],
                        backgroundColor: [
                            '#673ab7',
                            '#009688',
                            '#03a9f4',
                            '#4CAF50',
                        ],
                        label: 'My dataset'
                    }],
                labels: [
                    'التنبيهات', 'الأخبار والعروض', 'الحجوزات', 'المستخدمين'
                ]
            };
            _this.radarData = {
                labels: ['التنبيهات', 'الأخبار والعروض', 'الحجوزات', 'المستخدمين'],
                datasets: [
                    {
                        label: 'رسم بياني',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [_this.notesLength, _this.newsLength, _this.booksLength, _this.usersLength]
                    }
                ]
            };
        }, 7000);
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
    };
    DashboardDemoComponent.prototype.showcomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.remove("hidden");
        element = document.getElementById("crumb");
        element.classList.remove("hidden");
        element = document.getElementById("footer");
        element.classList.remove("hidden");
        element = document.getElementById("loginfrm");
        element.classList.add("hidden");
    };
    DashboardDemoComponent.prototype.hidecomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.add("hidden");
        element = document.getElementById("crumb");
        element.classList.add("hidden");
        element = document.getElementById("footer");
        element.classList.add("hidden");
        element = document.getElementById("loginfrm");
        element.classList.remove("hidden");
    };
    DashboardDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/demo/view/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"],
            _service_eventservice__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"],
            _service_myservices__WEBPACK_IMPORTED_MODULE_5__["myservicesService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], DashboardDemoComponent);
    return DashboardDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/datademo.component.html":
/*!***************************************************!*\
  !*** ./src/app/demo/view/datademo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataTable</h1>\n            <p-table [columns]=\"cols\" [value]=\"cars1\" selectionMode=\"single\" dataKey=\"vin\" [(selection)]=\"selectedCar\"\n                     [paginator]=\"true\" [rows]=\"10\" [responsive]=\"true\" paginatorPosition=\"both\">\n                <ng-template pTemplate=\"caption\">\n                    Single with Row Click\n                </ng-template>\n                <ng-template pTemplate=\"header\" let-columns>\n                    <tr>\n                      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                        {{col.header}}\n                        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                      </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                    <tr [pSelectableRow]=\"rowData\">\n                      <td *ngFor=\"let col of columns\">\n                        {{rowData[col.field]}}\n                      </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataView</h1>\n            <p-dataView #dv [value]=\"cars2\" [paginator]=\"true\" [rows]=\"10\" paginatorPosition=\"both\" filterBy=\"brand\" [sortField]=\"sortField\"\n                        [sortOrder]=\"sortOrder\">\n                <p-header>\n                    <div class=\"ui-helper-clearfix\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12 ui-md-4\">\n                                <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [style]=\"{'width':'15em'}\"></p-dropdown>\n                            </div>\n                            <div class=\"ui-g-6 ui-md-4 filter-container\">\n                                <div style=\"position:relative\">\n                                    <input type=\"text\" pInputText placeholder=\"Search by brand\" (keyup)=\"dv.filter($event.target.value)\">\n                                </div>\n                            </div>\n                            <div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\">\n                                <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\n                            </div>\n                        </div>\n                    </div>\n                </p-header>\n                <ng-template let-car pTemplate=\"listItem\">\n                    <div class=\"ui-g\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\">\n                        <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                        </div>\n                        <div class=\"ui-g-12 ui-md-8 car-details\">\n                            <div class=\"ui-g\">\n                                <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\n                                <div class=\"ui-g-10 ui-sm-6\">\n                                    <b>{{car.vin}}</b>\n                                </div>\n\n                                <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n                                <div class=\"ui-g-10 ui-sm-6\">\n                                    <b>{{car.year}}</b>\n                                </div>\n\n                                <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\n                                <div class=\"ui-g-10 ui-sm-6\">\n                                    <b>{{car.brand}}</b>\n                                </div>\n\n                                <div class=\"ui-g-2 ui-sm-6\">Color: </div>\n                                <div class=\"ui-g-10 ui-sm-6\">\n                                    <b>{{car.color}}</b>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"ui-g-12 ui-md-1 search-icon\">\n                            <button pButton type=\"button\" icon=\"pi pi-search\" ></button>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template let-car pTemplate=\"gridItem\">\n                    <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\n                        <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                            <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                            <hr class=\"ui-widget-content\" style=\"border-top:0\">\n                            <button pButton type=\"button\" icon=\"pi pi-search\"  style=\"margin-top:0\"></button>\n                        </p-panel>\n                    </div>\n                </ng-template>\n            </p-dataView>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-8\">\n        <div class=\"card card-w-title\">\n            <h1>PickList</h1>\n            <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\"\n                [sourceStyle]=\"{'height':'250px'}\" [targetStyle]=\"{'height':'250px'}\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\"/>\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-pickList>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"card card-w-title\">\n            <h1>OrderList</h1>\n            <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" />\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-orderList>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-6\">\n                    <h1>Tree</h1>\n                    <p-tree [value]=\"files1\" selectionMode=\"single\" [(selection)]=\"selectedNode1\" [style]=\"{width: '100%'}\"></p-tree>\n                </div>\n                <div class=\"ui-g-12 ui-md-6\">\n                    <h1>Checkbox Tree</h1>\n                    <p-tree [value]=\"files2\" selectionMode=\"checkbox\" [(selection)]=\"selectedNodes\" [style]=\"{width: '100%'}\"></p-tree>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Horizontal Tree</h1>\n            <p-tree [value]=\"files3\" selectionMode=\"single\" [(selection)]=\"selectedNode2\" layout=\"horizontal\"></p-tree>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>TreeTable</h1>\n            <p-treeTable [value]=\"files4\" [columns]=\"cols2\" selectionMode=\"checkbox\" [(selection)]=\"selectedNode3\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Size</th>\n                        <th>Type</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\n                    <tr>\n                        <td *ngFor=\"let col of columns; let i = index\">\n                            <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\n                            <p-treeTableCheckbox [value]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableCheckbox>\n                            <span style=\"vertical-align: middle\">{{rowData[col.field]}}</span>\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-treeTable>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\" style=\"overflow: auto\">\n            <h1>Organization Chart</h1>\n            <p-organizationChart [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedNodeOrg\"></p-organizationChart>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Carousel</h1>\n            <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-g\" style=\"text-align:center\">\n                        <div class=\"ui-g-12\" style=\"text-align:Center\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\n                        </div>\n                        <div class=\"ui-g-6\">Vin: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\n\n                        <div class=\"ui-g-6\">Year: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\n\n                        <div class=\"ui-g-6\">Brand: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\n\n                        <div class=\"ui-g-6\">Color: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\n                    </div>\n                </ng-template>\n            </p-carousel>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Schedule</h1>\n            <p-schedule [events]=\"events\" defaultDate=\"2016-01-12\" [header]=\"scheduleHeader\"></p-schedule>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/view/datademo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/demo/view/datademo.component.ts ***!
  \*************************************************/
/*! exports provided: DataDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDemoComponent", function() { return DataDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/nodeservice */ "./src/app/demo/service/nodeservice.ts");
/* harmony import */ var _service_eventservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/eventservice */ "./src/app/demo/service/eventservice.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataDemoComponent = /** @class */ (function () {
    function DataDemoComponent(carService, eventService, nodeService, breadcrumbService) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Data Components', routerLink: ['/data'] }
        ]);
    }
    DataDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.cols2 = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.files2 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.files3 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files4 = files; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
        this.scheduleHeader = { left: 'prev,next today', center: 'title', right: 'month,agendaWeek,agendaDay' };
        this.data = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
        this.sortOptions = [
            { label: 'Newest First', value: '!year' },
            { label: 'Oldest First', value: 'year' },
            { label: 'Brand', value: 'brand' }
        ];
    };
    DataDemoComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    DataDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datademo.component.html */ "./src/app/demo/view/datademo.component.html"),
            styles: ["\n        .ui-dataview-layout-options .ui-button {\n            margin-left: .5em;\n        }\n        .ui-dataview .filter-container {\n            text-align: center;\n        }\n\n        @media (max-width: 40em) {\n            .ui-dataview .car-details, .ui-dataview .search-icon{\n                text-align: center;\n                margin-top: 0;\n            }\n\n            .ui-dataview .filter-container {\n                text-align: left;\n            }\n            .ui-dataview-layout-options.ui-buttonset > .ui-button {\n                margin-left: 0;\n                display: inline-block;\n            }\n            .ui-dataview-layout-options.ui-buttonset > .ui-button:first-child {\n                border-radius: 50%;\n            }\n            .ui-dataview-layout-options.ui-buttonset > .ui-button:last-child {\n                border-radius: 50%;\n            }\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"], _service_eventservice__WEBPACK_IMPORTED_MODULE_3__["EventService"], _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]])
    ], DataDemoComponent);
    return DataDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/documentation.component.html":
/*!********************************************************!*\
  !*** ./src/app/demo/view/documentation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card docs\">\n\n            <h1>Current Version</h1>\n            <p>Angular 6 and PrimeNG 6</p>\n\n            <h1>Getting Started</h1>\n            <p>Ultima is a true native application template for Angular and is distributed as a CLI project. If you don't have CLI installed already run the following commands to set it up. In case\n            you have an application that do not use CLI, skip the <a href=\"#noncli\">Integration with an Existing Non CLI Application</a> part.</p>\n<pre>\nnpm install -g @angular/cli\n</pre>\n\n            <p>Once CLI is ready in your system, extract the contents of the ultima zip file distribution, cd to the directory,\n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment at http://localhost:4200/.</p>\n<pre>\ncd ultima\nnpm install\nng serve\n</pre>\n\n            <p>That's it, you may now start with the development of your application.</p>\n\n            <h1>Important CLI Commands</h1>\n            <p>Following commands are derived from CLI.</p>\n<pre>\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.\n</pre>\n\n            <h1>Structure</h1>\n            <p>Ultima consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout,\n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder.\n            </p>\n\n            <h1>Template</h1>\n            <p>Main layout is the html view of the app.component.ts, it is divided into a couple of sections such as topbar, profile, menu and footer. Here is the code for\n                the main template. The component class app.component.ts implements the logic such as opening menus, layout modes and so on.\n            </p>\n<pre>\n&lt;div class=\"layout-wrapper\" [ngClass]=\"&#123;'layout-compact':layoutCompact&#125;\" (click)=\"onLayoutClick()\"&gt;\n\n    &lt;div #layoutContainer class=\"layout-container\"\n            [ngClass]=\"&#123;'menu-layout-static': !isOverlay(),\n            'menu-layout-overlay': isOverlay(),\n            'layout-menu-overlay-active': overlayMenuActive,\n            'menu-layout-horizontal': isHorizontal(),\n            'menu-layout-slim': isSlim(),\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\n            'layout-menu-static-active': staticMenuMobileActive&#125;\"&gt;\n\n        &lt;app-topbar&gt;&lt;/app-topbar&gt;\n\n        &lt;div class=\"layout-menu\" [ngClass]=\"&#123;'layout-menu-dark':darkMenu&#125;\" (click)=\"onMenuClick($event)\"&gt;\n            &lt;p-scrollPanel #scrollPanel [style]=\"&#123;height: '100%'&#125;\"&gt;\n                &lt;app-inline-profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\"&gt;&lt;/app-inline-profile&gt;\n                &lt;app-menu [reset]=\"resetMenu\"&gt;&lt;/app-menu&gt;\n            &lt;/p-scrollPanel&gt;\n        &lt;/div&gt;\n\n        &lt;div class=\"layout-main\"&gt;\n            &lt;app-breadcrumb&gt;&lt;/app-breadcrumb&gt;\n\n            &lt;div class=\"layout-content\"&gt;\n                &lt;router-outlet&gt;&lt;/router-outlet&gt;\n\n                &lt;app-footer&gt;&lt;/app-footer&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n        &lt;app-rightpanel&gt;&lt;/app-rightpanel&gt;\n\n        &lt;div class=\"layout-mask\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n\n&lt;/div&gt;\n</pre>\n\n            <h1>Menu</h1>\n            <p>Menu is a separate component defined in app.menu.component.ts file based on PrimeNG MenuModel API. In order to define the menuitems,\n            navigate to this file and define your own model as a nested structure. Here is the menu component from the sample application. The helper\n            app-submenu component is also available in the same file.</p>\n<pre>\nimport &#123;Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate&#125; from '@angular/core';\nimport &#123;Location&#125; from '@angular/common';\nimport &#123;Router&#125; from '@angular/router';\nimport &#123;MenuItem&#125; from 'primeng/primeng';\nimport &#123;AppComponent&#125; from './app.component';\n\n@Component(&#123;\n    selector: 'app-menu',\n    template: `\n        &lt;ul app-submenu [item]=\"model\" root=\"true\" class=\"ultima-menu ultima-main-menu  clearfix\" [reset]=\"reset\"&gt;&lt;/ul&gt;\n    `\n&#125;)\nexport class AppMenuComponent implements OnInit &#123;\n\n    @Input() reset: boolean;\n\n    model: MenuItem[];\n\n    constructor(public app:AppComponent) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.model = [\n            &#123;label: 'Dashboard', icon: 'dashboard', routerLink: ['/']&#125;,\n            &#123;\n                label: 'Components', icon: 'list',\n                items: [\n                    &#123;label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']&#125;,\n                    &#123;label: 'Forms', icon: 'input', routerLink: ['/forms']&#125;,\n                    &#123;label: 'Data', icon: 'grid_on', routerLink: ['/data']&#125;,\n                    &#123;label: 'Panels', icon: 'content_paste', routerLink: ['/panels']&#125;,\n                    &#123;label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']&#125;,\n                    &#123;label: 'Menus', icon: 'menu', routerLink: ['/menus']&#125;,\n                    &#123;label: 'Messages', icon: 'message', routerLink: ['/messages']&#125;,\n                    &#123;label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']&#125;,\n                    &#123;label: 'File', icon: 'attach_file', routerLink: ['/file']&#125;,\n                    &#123;label: 'Misc', icon: 'toys', routerLink: ['/misc']&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Template Pages', icon: 'get_app',\n                items: [\n                    &#123;label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']&#125;,\n                    &#123;label: 'Landing Page', icon: 'flight_land', url: 'landing.html'&#125;,\n                    &#123;label: 'Login Page', icon: 'verified_user', url: 'login.html'&#125;,\n                    &#123;label: 'Error Page', icon: 'error', url: 'error.html'&#125;,\n                    &#123;label: '404 Page', icon: 'error_outline', url: '404.html'&#125;,\n                    &#123;label: 'Access Denied Page', icon: 'security', url: 'access.html'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Menu Hierarchy', icon: 'menu',\n                items: [\n                    &#123;\n                        label: 'Submenu 1', icon: 'subject',\n                        items: [\n                            &#123;\n                                label: 'Submenu 1.1', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 1.1.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 1.1.2', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 1.1.3', icon: 'subject'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 1.2', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 1.2.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 1.2.2', icon: 'subject'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Submenu 2', icon: 'subject',\n                        items: [\n                            &#123;\n                                label: 'Submenu 2.1', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 2.1.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 2.1.2', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 2.1.3', icon: 'subject'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 2.2', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 2.2.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 2.2.2', icon: 'subject'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;label: 'Utils', icon: 'build', routerLink: ['/utils']&#125;,\n            &#123;label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']&#125;\n        ];\n    &#125;\n&#125;\n</pre>\n\n\n            <h1>Integration with an Existing CLI Project</h1>\n            <p>To setup Ultima in an existing project, copy the <i>src/assets</i> folder to your projects folder with the same name\n                and replace the contents of app.component.ts, app.component.html with their counterparts in Ultima under <i>src/app</i> folder.</p>\n\n          <p>Install PrimeNG</p>\n<pre>\nnpm install primeng@latest --save\nnpm install primeicons@latest --save\n</pre>\n\n          <p>Add PrimeNG CSS at styles section in angular.json.</p>\n\n<pre>\n\"styles\": [\n    \"../node_modules/primeng/resources/primeng.min.css\",        //required: PrimeNG components\n    \"node_modules/primeicons/primeicons.css\",                   //required: PrimeIcons\n    \"styles.scss\"                                               //your styles and overrides\n],\n</pre>\n\n\n          <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration so they go inside the bundle.</p>\n\n            <h1 id=\"noncli\">Integration with an Existing Non-CLI Project</h1>\n            <p>For an existing project that do not use CLI, setup steps are more or less similar. Start with installing the dependencies listed above in package.json</p>\n            <p>Copy the <i>src/assets</i> folder to your application and include the resources listed above with a module bundler like webpack or using link-script tags.</p>\n            <p>Finally copy the contents of app.component.html to your application's main component template such as <i>app/application.html</i> along\n            with the sub components which are app.menu.component.ts, app.profile.components.ts, app.topbar.component.ts and app.footer.component.ts.</p>\n\n            <h1>Size</h1>\n            <p>Ultima uses EM units for scalability and comes in two built-in sizes, default is closer to the material design specification with bigger fonts and paddings whereas the alternative compact size\n            shrinks the dimensions of the UI elements. To activate the compact mode add \"layout-compact\" style class to the .layout-wrapper element in application.html\n            which is the enclosing div of whole content.</p>\n\n            <h1>Theme</h1>\n            <p>Ultima provides 12 PrimeNG themes out of the box, setup of a theme simple including the css of theme to your page that are located inside resources/theme folder.</p>\n\n            <ul>\n                <li>theme-blue</li>\n                <li>theme-blue-grey</li>\n                <li>theme-brown</li>\n                <li>theme-cyan</li>\n                <li>theme-dark-blue</li>\n                <li>theme-dark-green</li>\n                <li>theme-green</li>\n                <li>theme-grey</li>\n                <li>theme-indigo</li>\n                <li>theme-purple-amber</li>\n                <li>theme-purple-cyan</li>\n                <li>theme-teal</li>\n            </ul>\n\n            <p>A custom theme can be developed by the following steps.</p>\n            <ul>\n                <li>Choose a custom theme name such as theme-myown.</li>\n                <li>Create a file named theme-myown.scss under <i>assets/theme folder</i>.</li>\n                <li>Define the variables listed below and import the <i>/sass/theme/_theme.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Include the generated theme.css to your page.</li>\n            </ul>\n\n            <p>Here are the variables required to create a theme, you may need to change the last line according to the\n                relative path of the sass folder in your application.</p>\n\n<pre>\n$primaryColor: #009688;\n$primaryDarkColor: #00695C;\n$primaryLightColor: #80CBC4;\n$accentColor: #CDDC39;\n$accentDarkColor: #9E9D24;\n$accentLightColor: #E6EE9C;\n$accentTextColor: #212121;\n\n@import '../sass/theme/_theme';\n</pre>\n\n            <p> An example sass command to compile the css would be;</p>\n\n<pre>\nsass src/assets/theme-myown/theme.scss src/assets/theme-myown/theme.css\n</pre>\n\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\n<pre>\nsass -w resources/ --sourcemap=none\n</pre>\n\n            <p>Same can also be applied to layout itself;</p>\n            <ul>\n                <li>Choose a layout name such as layout-myown.</li>\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Serve the css by importing it using a link tag or a bundler.</li>\n            </ul>\n\n            <p>Here are the variables required to create a layout, you may need to change the last line according to the\n                relative path of the sass folder in your application.</p>\n\n<pre>\n$primaryColor: #3F51B5;\n$primaryDarkColor: #283593;\n$primaryLightColor: #9fa8da;\n$accentColor: #E91E63;\n$accentDarkColor: #ad1457;\n$accentLightColor: #f48fb1;\n$accentTextColor: #ffffff;\n$darkMenuBgColor: #424242;\n$darkMenuHoverColor: #676767;\n$darkMenuRouterLinkActiveColor: #9fa8da;\n$lightMenuRouterLinkActiveColor: #3F51B5;\n$horizontalLightMenuRouterLinkActiveColor: #9fa8da;\n\n@import '../../sass/layout/_layout';\n</pre>\n\n\n            <p>Shared variables between the theme and layout are available in _variables.scss which also define the common settings such as font size.</p>\n<pre>\n/* Common */\n$textColor:#212121;\n$textSecondaryColor:#757575;\n$fontSize:16px;\n$lineHeight:1.5em;\n$transitionDuration:.3s;\n$borderRadius:3px;\n\n/* Layout */\n$bodyBgColor:#f7f7f7;\n$maskBgColor:#424242;\n$topbarButtonColor:#ffffff;\n$topbarButtonHoverColor:#e8e8e8;\n$topbarSearchBorderColor:#ffffff;\n$topbarSearchColor:#ffffff;\n$topbarIconColor:#ffffff;\n$topbarIconHoverColor:#e8e8e8;\n$topbarMenuBgColor:#ffffff;\n$layoutMenuBgColor:#ffffff;\n$layoutMenuScrollbarBgColor:#aaaaaa;\n$layoutMenuItemIconColor:#757575;\n$layoutMenuItemActiveColor:#e8e8e8;\n$horizontalLayoutMenuItemTextColor:#ffffff;\n$horizontalLayoutMenuItemHoverBgColor:#e8e8e8;\n$horizontalLayoutMenuSubMenuBgColor:#ffffff;\n$horizontalLayoutMenuSubMenuActiveBgColor:#e8e8e8;\n$horizontalDarkLayoutMenuItemTextColor:#ffffff;\n$slimLayoutMenuSubMenuBgColor:#ffffff;\n$slimMenuTooltipColor:#ffffff;\n$rightPanelBgColor:#ffffff;\n$topbarSubmenuBgColor:#ffffff;\n$profileMenuBorderBottomColor:#d6d5d5;\n$profileMenuDarkBorderBottomColor:#545454;\n$darkMenuColor:#ffffff;\n\n/* Theme */\n$headerFontSize:1em;\n$headerPadding:.625em 1em;\n$contentFontSize:1em;\n$contentPadding:.625em 1em;\n$inputHeaderFontSize:1em;\n$inputHeaderPadding:.625em 1em;\n$inputBorderColor:#bdbdbd;\n$inputBorderErrorColor:#e62a10;\n$inputErrorTextColor:#e62a10;\n$textboxBgColor:#f7f7f7;\n$inputFontSize:1em;\n$buttonFontSize:1em;\n$inputOptionFontSize:1em;\n$inputOptionPadding:.625em .875em;\n$hoverBgColor:#e8e8e8;\n$hoverTextColor:#000000;\n$dividerColor:#bdbdbd;\n$dividerLightColor:#cacaca;\n$grayBgColor:#757575;\n$iconFontSize:1.5em;\n$invalidInputLabelColor:#e62a10;\n$invalidInputBorderColor:#e62a10;\n$activeMenuItemBadgeColor:#ffffff;\n$activeMenuItemBadgeTextColor:#212121;\n\n/* Compact */\n$c-fontSize:14px;\n$c-lineHeight:18px;\n</pre>\n\n            <h1>Menu Item Badges</h1>\n            <p>Badges are numerical indicators associated with a link.\n               The badge property is the value of the badge and badgeStyleClass is style class of the badge.</p>\n<pre>\nlabel: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'red-badge'\n</pre>\n            <p>Default badge uses the accent color of ultima layout and there are three more alternative colors.</p>\n            <ul>\n                <li>red-badge</li>\n                <li>purple-badge</li>\n                <li>teal-badge</li>\n            </ul>\n\n            <h1>Menu Modes</h1>\n            <p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in application.html is used to define which mode to use by adding specific classes. List\n            below indicates the style classes for each mode. In addition menu</p>\n            <ul>\n                <li>Static: \"layout-wrapper menu-layout-static\"</li>\n                <li>Overlay: \"layout-wrapper menu-layout-overlay\"</li>\n                <li>Slim: \"layout-wrapper menu-layout-static menu-layout-slim\"</li>\n                <li>Horizontal: \"layout-wrapper menu-layout-static menu-layout-horizontal\"</li>\n            </ul>\n\n            <p>For example to create a horizontal menu, the div element should be in following form;</p>\n<pre>\n&lt;div class=\"layout-wrapper layout-compact\"&gt;\n    &lt;div class=\"layout-container menu-layout-static menu-layout-horizonal\"&gt;\n</pre>\n\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample\n            application has an example implementation of such use case. Refer to app.component.ts for an example.</p>\n\n            <h1>Dark Menu</h1>\n            <p>Default color scheme of menu is light and alternative dark mode can be activated by adding layout-menu-dark style class to the menu container that\n                is an element having .layout-menu as its class.</p>\n<pre>\n&lt;div class=\"layout-menu layout-menu-dark\"&gt;\n</pre>\n\n            <h1>Profile Modes</h1>\n            <p>There are two possible locations for the user profile menu, first version is inline located inside the main menu and second option is the topbar menu. For inline mode,\n            profile content should be placed above the menu and for inline mode content goes in topbar-items list. The sample demo application provides examples for\n            both cases.</p>\n\n            <h1>Utilities</h1>\n            <p>Ultima provides various helper features such as material iconset compatible with PrimeNG components and helper classes. Visit <a [routerLink]=\"['/utils']\">utils</a> page for details.</p>\n\n            <h1>Breadcrumb</h1>\n            <p>Ultima has an optional built-in breadcrumb section right below the topbar. The items are dynamically generated using a\n                BreadcrumbService where each main page that goes into the router-outlet should provide a collection of MenuItem instances.\n                Here is an example component that updates the breadcrumb.</p>\n<pre>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;BreadcrumbService&#125; from '../../breadcrumb.service';\n\n@Component(&#123;\n    templateUrl: './emptydemo.component.html'\n&#125;)\nexport class ControlPanelComponent &#123;\n\n    constructor(private breadcrumbService: BreadcrumbService) &#123;\n        this.breadcrumbService.setItems([\n            &#123;label: 'Admin'&#125;,\n            &#123;label: 'Control Panel', routerLink: ['/controlpanel']&#125;\n        ]);\n    &#125;\n\n&#125;\n</pre>\n            <p>Result will be reflected at application breadcrumb component such as \"Home Icon\" -> \"Admin\" -> \"Control Panel\".</p>\n\n            <h1>Grid CSS</h1>\n            <p>Ultima uses PrimeNG Grid CSS (ui-g-*) throughout the samples, we strongly suggest using Grid CSS as your layout framework as it is well tested and supported by PrimeNG. Grid CSS is\n            available inside primeng.css.</p>\n\n            <h1>Customizing Styles</h1>\n            <p>It is suggested to write your customizations in styles.scss file or another file instead of adding them to the\n                scss files under sass folders to avoid maintenance issues after an update.</p>\n\n            <h1>Migration Guide</h1>\n            <p>For seamless updates and easier maintenance, we suggest keeping your CSS customizations in a separate sass file so that your changes\n            are not overriden with an update.</p>\n\n            <h4>5.2.4 to 6.0.0</h4>\n            <p>Brings support for Angular 6 and RxJS 6, adds theming for new components in PrimeNG such as the new TreeTable\n                and improves behaviors of the layout menus.</p>\n            <ul>\n                <li>Add PrimeIcons package.</li>\n                <li>Update app.module.ts and app.component.ts.</li>\n                <li>Update app.topbar.component.ts.</li>\n                <li>Update app.profile.component.ts.</li>\n                <li>Update app.menu.component.ts.</li>\n                <li>Update app.breadcrumb.component.ts and breadcrumb.service.ts.</li>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>5.2.3 to 5.2.4</h4>\n            <ul>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>5.2.2 to 5.2.3</h4>\n            <ul>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>5.2.1 to 5.2.2</h4>\n            <ul>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>5.2.0 to 5.2.1</h4>\n            <p>Aligns input focus animation with the Material specs.</p>\n            <ul>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>5.0.0 to 5.2.0</h4>\n            <p>Adds support for PrimeNG 5.2.0 (e.g. TurboTable), replaces nanoscroller with PrimeNG ScrollPanel and reimplements ripple effect to run outside of NgZone for better performance.</p>\n            <ul>\n              <li>Remove nanoscroller as it is replaced by ScrollPanel component of PrimeNG.</li>\n              <li>Update app.component.ts and app.component.html.</li>\n              <li>Update app.menu.component.ts.</li>\n              <li>Update app.rightpanel.component.ts.</li>\n              <li>Update layout css files.</li>\n              <li>Update theme css files.</li>\n            </ul>\n\n            <h4>4.3.0 to 5.0.0</h4>\n            <ul>\n                <li>Update app.component.ts and app.component.html.</li>\n                <li>Define breadcrumbservice as a provider in your app.module</li>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>4.2.0 to 4.3.0</h4>\n            <ul>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>4.1.1 to 4.2.0</h4>\n            <ul>\n                <li>Update app.*.ts and app.*.html files under app folder.</li>\n                <li>Update theme css and layout css files.</li>\n            </ul>\n\n            <h4>4.0.1 to 4.1.0</h4>\n            <ul>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n                <li>Update AppSubmenu component in app.menu.component.ts.</li>\n            </ul>\n\n            <h4>4.0.0 to 4.0.1</h4>\n            <ul>\n                <li>Update layout css files.</li>\n            </ul>\n\n            <h4>2.1 to 4.0.0</h4>\n            <ul>\n                <li>Includes version updates to PrimeNG 4 and Angular 4.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>2.0.5 to 2.1.0</h4>\n            <ul>\n                <li>Project is updated to CLI RC2, Angular 4-RC3 and PrimeNG 4-RC1.</li>\n                <li>Add <i class=\"inline-code\">import &#123;trigger,state,style,transition,animate&#125; from '@angular/animations';</i> to app.menu.components.ts and remove these imports from 'angular/core'.</li>\n                <li>Add <i class=\"inline-code\">import &#123;BrowserAnimationsModule&#125; from '@angular/platform-browser/animations';</i> to app.module.ts and import the module to your application.</li>\n                <li>Update theme css files, there are no changes to the layout.</li>\n            </ul>\n\n            <h4>2.0.4 to 2.0.5</h4>\n            <ul>\n                <li>No change required, missing .angular-cli.json file in 2.0.4 is added.</li>\n            </ul>\n\n            <h4>2.0.3 to 2.0.4</h4>\n            <ul>\n                <li>No change required, only CLI version is updated to RC</li>\n            </ul>\n\n            <h4>2.0.2 to 2.0.3</h4>\n            <ul>\n                <li>Update AppSubmenu component in app.menu.component.ts by replacing the itemClick method implementation.</li>\n                <li>Update layout css files, there are no changes on themes.</li>\n                <li>Update app.component.ts by changing onTopbarMenuButtonClick method implementation to add <i>event.preventDefault()</i> at the end.</li>\n                <li>Remove [ngClass]=\"&#123;'menu-button-rotate': app.rotateMenuButton&#125;\" from menu-button in app.topbar.component.ts.</li>\n            </ul>\n\n            <h4>2.0.1 to 2.0.2</h4>\n            <ul>\n                <li>Update AppSubmenu component in app.menu.component.ts</li>\n                <li>Update layout css files, there are no changes on themes.</li>\n                <li>Update app.component.ts.</li>\n                <li>Add pInputText to search input at app.topbar.component.ts</li>\n            </ul>\n\n            <h4>2.0.0 to 2.0.1</h4>\n            <ul>\n                <li>Update AppSubmenu component in app.menu.component.ts</li>\n                <li>Update layout css and theme css files.</li>\n                <li>Update app.component.ts.</li>\n            </ul>\n\n            <h4>1.1.0 to 2.0.0</h4>\n            <ul>\n                <li>Update PrimeNG to at least 2.0.</li>\n                <li>Replace app.component.ts and app.component.html</li>\n                <li>Remove layout.js</li>\n                <li>Update the scripts and styles section at angular-cli.json</li>\n                <li>Define menu using PrimeNG MenuModel</li>\n            </ul>\n\n            <h4>1.0.3 to 1.1.0</h4>\n            <ul>\n                <li>Update css files of layout and theme.</li>\n            </ul>\n\n            <h4>1.0.2 to 1.0.3</h4>\n            <ul>\n                <li>Update css files of layout and theme.</li>\n            </ul>\n\n            <h4>1.0.1 to 1.0.2</h4>\n            <ul>\n                <li>Update layout.js</li>\n            </ul>\n\n            <h4>1.0.0 to 1.0.1</h4>\n            <ul>\n                <li>Update layout.js</li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/view/documentation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/view/documentation.component.ts ***!
  \******************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Documentation' }
        ]);
    }
    DocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/demo/view/documentation.component.html"),
            styles: ["\n        .docs h1 {\n            margin-top: 30px;\n        }\n\n        .docs pre {\n            font-family: monospace;\n            background-color: #0C2238;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .inline-code {\n            background-color: #0C2238;\n            color: #dddddd;\n            font-style: normal;\n            font-size: 13px;\n            padding: 0 .5em;\n        }\n\n        .video-container {\n            position: relative;\n            width: 100%;\n            height: 0;\n            padding-bottom: 56.25%;\n        }\n\n        .video-container iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }"
            ]
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/emptydemo.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo/view/emptydemo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Empty Page</h1>\n            <p>Use this page to start from scratch and place your custom content.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/view/emptydemo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/view/emptydemo.component.ts ***!
  \**************************************************/
/*! exports provided: EmptyDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyDemoComponent", function() { return EmptyDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyDemoComponent = /** @class */ (function () {
    function EmptyDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Empty Page' },
        ]);
    }
    EmptyDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./emptydemo.component.html */ "./src/app/demo/view/emptydemo.component.html")
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], EmptyDemoComponent);
    return EmptyDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/filedemo.component.html":
/*!***************************************************!*\
  !*** ./src/app/demo/view/filedemo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <div class=\"card\">\n                <h1>Upload</h1>\n                <p-growl [value]=\"msgs\"></p-growl>\n                    \n                <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" \n                        multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\"> \n                        <ng-template pTemplate=\"content\">\n                            <ul *ngIf=\"uploadedFiles.length\">\n                                <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                            </ul>\n                        </ng-template>    \n                </p-fileUpload>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/view/filedemo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/demo/view/filedemo.component.ts ***!
  \*************************************************/
/*! exports provided: FileDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDemoComponent", function() { return FileDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileDemoComponent = /** @class */ (function () {
    function FileDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.uploadedFiles = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'File Upload', routerLink: ['/file'] }
        ]);
    }
    FileDemoComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    FileDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./filedemo.component.html */ "./src/app/demo/view/filedemo.component.html")
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], FileDemoComponent);
    return FileDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/formsdemo.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo/view/formsdemo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card card-w-title\">\n            <h1>InputText</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText>\n                        <label>Name</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText>\n                        <label>Email</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText>\n                        <label>Phone</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Disabled\" disabled=\"disabled\">\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\n                        <div class=\"ui-message ui-messages-error ui-corner-all\">\n                            This field is required\n                        </div>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText>\n                </div>\n            </div>\n\n            <h1>Filled InputText</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input type=\"text\" pInputText>\n                        <label>Name</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input type=\"text\" pInputText>\n                        <label>Email</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input type=\"text\" pInputText>\n                        <label>Phone</label>\n                    </span>\n                </div>\n            </div>\n\n            <h1>TextBox</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-box\">\n                        <input type=\"text\" pInputText>\n                        <label>Name</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-box\">\n                        <input type=\"text\" pInputText>\n                        <label>Email</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-box\">\n                        <input type=\"text\" pInputText>\n                        <label>Phone</label>\n                    </span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>TextArea</h1>\n            <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"Your Message\" autoResize=\"autoResize\"></textarea>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>AutoComplete</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12\">\n                    <label for=\"acSimple\">Simple</label>\n                </div>\n                <div class=\"ui-g-12\" style=\"margin-bottom:10px\">\n                    <p-autoComplete id=\"acSimple\" [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\" [size]=\"30\"\n                        placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n                </div>\n\n                <div class=\"ui-g-12\">\n                    <label for=\"acAdvanced\">Advanced</label>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-autoComplete id=\"acAdvanced\" [(ngModel)]=\"selectedBrands\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\n                        [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\" (onDropdownClick)=\"handleACDropdownClick()\" multiple=\"true\">\n                        <ng-template let-brand pTemplate=\"item\">\n                            <div class=\"ui-helper-clearfix\">\n                                <img src=\"assets/demo/images/car/{{brand}}.gif\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n                                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\n                            </div>\n                        </ng-template>\n                    </p-autoComplete>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>MultiSelect</h1>\n            <p-multiSelect [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Calendar</h1>\n            <p-calendar [inline]=\"true\"></p-calendar>\n\n            <div class=\"ui-g form-group-m\" style=\"margin-top:20px\">\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"popup\" placeholder=\"Popup\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"datetime\" dateFormat=\"mm/dd/yy\" showTime=\"true\" placeholder=\"DateTime\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"time\" showTime=\"true\" [timeOnly]=\"true\" placeholder=\"Time\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"showIcon\" [showIcon]=\"true\" placeholder=\"Button\"></p-calendar>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Chips</h1>\n            <p-chips></p-chips>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card card-w-title\">\n            <h1>Checkboxes</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>RadioButtons</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>InputSwitch</h1>\n            <p-inputSwitch [(ngModel)]=\"switchChecked\"></p-inputSwitch>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Dropdown</h1>\n            <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Password</h1>\n            <input pPassword type=\"password\"/>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Spinner</h1>\n            <p-spinner></p-spinner>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Slider</h1>\n            <p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"></p-slider>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Listbox</h1>\n            <p-listbox [options]=\"citiesListbox\" [(ngModel)]=\"selectedCity2\" filter=\"true\"></p-listbox>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Rating</h1>\n            <p-rating [(ngModel)]=\"ratingValue\"></p-rating>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>ColorPicker</h1>\n            <p-colorPicker [(ngModel)]=\"color\" inline=\"true\"></p-colorPicker>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Input Groups</h1>\n\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText>\n                            <label>Username</label>\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">credit_card</i></span>\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">card_travel</i></span>\n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText>\n                            <label>Price</label>\n                        </span>\n                        <span class=\"ui-inputgroup-addon\">$</span>\n                        <span class=\"ui-inputgroup-addon\">.00</span>\n                    </div>\n                </div>\n\n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText>\n                            <label>Keyword</label>\n                        </span>\n                        <button pButton type=\"button\" icon=\"ui-icon-search\"></button>\n                    </div>\n                </div>\n\n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText>\n                            <label>Confirm</label>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Editor</h1>\n            <p-editor [style]=\"{'height':'320px'}\"></p-editor>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-g-nopad\">\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\n            <div class=\"card card-w-title\">\n                <h1>Buttons</h1>\n\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">ToggleButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                    </div>\n\n                    <div class=\"ui-g-12\">SelectButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                    </div>\n\n                    <div class=\"ui-g-12\">Button</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Bookmark\" pButton></button>\n                    </div>\n\n                    <div class=\"ui-g-12\">Left Icon</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"ui-icon-clear\"></button>\n                    </div>\n\n                    <div class=\"ui-g-12\">Right Icon</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"ui-icon-clear\" iconPos=\"right\"></button>\n                    </div>\n\n                    <div class=\"ui-g-12\">Icon Only</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" icon=\"ui-icon-add\" pButton></button>\n                    </div>\n\n                    <div class=\"ui-g-12\">Link</div>\n                    <div class=\"ui-g-12\"><a href=\"http://www.primefaces.org\" target=\"_blank\">Homepage</a></div>\n\n                    <div class=\"ui-g-12\">SplitButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-splitButton label=\"Save\" icon=\"ui-icon-save\" [model]=\"splitButtonItems\"></p-splitButton>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\n            <div class=\"card card-w-title\">\n                <h1>Colored Buttons</h1>\n                <p>Raised and Flat buttons with various color alternatives.</p>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">\n                        <button pButton type=\"button\" label=\"Primary\" style=\"margin-bottom:10px\"></button>\n\n                        <div>\n                            <button pButton type=\"button\" label=\"Inline\" style=\"margin-bottom:10px;width:auto\"></button>\n                        </div>\n\n                        <button pButton type=\"button\" label=\"Secondary\" style=\"margin-bottom:10px;width:auto\" class=\"ui-button-secondary\"></button>\n\n                        <button pButton type=\"button\" label=\"Green / Success\" style=\"margin-bottom:10px\" class=\"ui-button-success\"></button>\n\n                        <button pButton type=\"button\" label=\"Blue / Info\" style=\"margin-bottom:10px\" class=\"ui-button-info\"></button>\n\n                        <button pButton type=\"button\" label=\"Amber / Warning\" style=\"margin-bottom:10px\" class=\"ui-button-warning\"></button>\n\n                        <button pButton type=\"button\" label=\"Red / Danger\" style=\"margin-bottom:10px\" class=\"ui-button-danger\"></button>\n\n                        <button pButton type=\"button\" label=\"Blue-Grey\" style=\"margin-bottom:10px\" class=\"blue-grey-btn\"></button>\n\n                        <button pButton type=\"button\" label=\"Cyan\" style=\"margin-bottom:10px\" class=\"cyan-btn\"></button>\n\n                        <button pButton type=\"button\" label=\"Teal\" style=\"margin-bottom:10px\" class=\"teal-btn\"></button>\n\n                        <button pButton type=\"button\" label=\"Orange\" style=\"margin-bottom:10px\" class=\"orange-btn\"></button>\n\n                        <button pButton type=\"button\" label=\"Deep-Orange\" style=\"margin-bottom:10px\" class=\"deep-orange-btn\"></button>\n\n                        <button pButton type=\"button\" label=\"Purple\" style=\"margin-bottom:10px\" class=\"purple-btn\"></button>\n\n                        <button pButton type=\"button\" label=\"Indigo\" style=\"margin-bottom:10px\" class=\"indigo-btn\"></button>\n\n                        <button pButton type=\"button\" label=\"Pink\" style=\"margin-bottom:10px\" class=\"pink-btn\"></button>\n                    </div>\n\n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">\n                        <button pButton type=\"button\" label=\"Primary\" style=\"margin-bottom:10px\" styleClass=\"flat\"></button>\n\n                        <div>\n                            <button pButton type=\"button\" label=\"Inline\" style=\"margin-bottom:10px;width:auto\" styleClass=\"flat\"></button>\n                        </div>\n\n                        <button pButton type=\"button\" label=\"Secondary\" style=\"margin-bottom:10px;width:auto\" class=\"ui-button-secondary flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Green / Success\" style=\"margin-bottom:10px\" class=\"green-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Blue / Info\" style=\"margin-bottom:10px\" class=\"blue-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Amber / Warning\" style=\"margin-bottom:10px\" class=\"amber-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Red / Danger\" style=\"margin-bottom:10px\" class=\"red-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Blue-Grey\" style=\"margin-bottom:10px\" class=\"blue-grey-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Cyan\" style=\"margin-bottom:10px\" class=\"cyan-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Teal\" style=\"margin-bottom:10px\" class=\"teal-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Orange\" style=\"margin-bottom:10px\" class=\"orange-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Deep-Orange\" style=\"margin-bottom:10px\" class=\"deep-orange-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Purple\" style=\"margin-bottom:10px\" class=\"purple-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Indigo\" style=\"margin-bottom:10px\" class=\"indigo-btn flat\"></button>\n\n                        <button pButton type=\"button\" label=\"Pink\" style=\"margin-bottom:10px\" class=\"pink-btn flat\"></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/view/formsdemo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/view/formsdemo.component.ts ***!
  \**************************************************/
/*! exports provided: FormsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsDemoComponent", function() { return FormsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_countryservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/countryservice */ "./src/app/demo/service/countryservice.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsDemoComponent = /** @class */ (function () {
    function FormsDemoComponent(countryService, breadcrumbService) {
        this.countryService = countryService;
        this.breadcrumbService = breadcrumbService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        this.selectedMultiSelectCars = [];
        this.checkboxValues = [];
        this.rangeValues = [20, 80];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Forms', routerLink: ['/forms'] }
        ]);
    }
    FormsDemoComponent.prototype.ngOnInit = function () {
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: 0 });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.citiesListbox = this.cities.slice(1);
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.splitButtonItems = [
            { label: 'Update', icon: 'ui-icon-update' },
            { label: 'Delete', icon: 'ui-icon-close' },
            { label: 'Home', icon: 'ui-icon-home', url: 'http://www.primefaces.org/primeng' }
        ];
    };
    FormsDemoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    FormsDemoComponent.prototype.searchCountry = function (query, countries) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    FormsDemoComponent.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    FormsDemoComponent.prototype.handleACDropdownClick = function () {
        var _this = this;
        this.filteredBrands = [];
        // mimic remote call
        setTimeout(function () {
            _this.filteredBrands = _this.brands;
        }, 100);
    };
    FormsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./formsdemo.component.html */ "./src/app/demo/view/formsdemo.component.html")
        }),
        __metadata("design:paramtypes", [_service_countryservice__WEBPACK_IMPORTED_MODULE_1__["CountryService"], _breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]])
    ], FormsDemoComponent);
    return FormsDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/menusdemo.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo/view/menusdemo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Breadcrumb</h1>\n            <p-breadcrumb [model]=\"breadcrumbItems\" [home]=\"{icon: 'pi pi-home'}\"></p-breadcrumb>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Steps</h1>\n            <p-steps [model]=\"stepsItems\"></p-steps>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>MenuBar</h1>\n            <p-menubar [model]=\"tieredItems\"></p-menubar>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Colum -->\n        <div class=\"card card-w-title\">\n            <h1>Plain Menu</h1>\n            <p-menu #menu [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\n\n            <p-menu #menu popup=\"popup\" [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\n            <button type=\"button\" pButton icon=\"ui-icon-open-in-new\" label=\"Show\" (click)=\"menu.toggle($event)\" style=\"margin-top:20px;width:auto\"></button>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>TieredMenu</h1>\n            <p-tieredMenu [model]=\"tieredItems\" [style]=\"{'width':'250px','margin-bottom':'20px'}\"></p-tieredMenu>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Colum -->\n        <div class=\"card card-w-title\">\n            <h1 style=\"margin-top:40px\">ContextMenu</h1>\n            Right click!\n\n            <p-contextMenu [global]=\"true\" [model]=\"tieredItems\" [style]=\"{'width':'12.5em'}\"></p-contextMenu>\n        </div>\n\n        <div class=\"card\">\n            <h1>SlideMenu</h1>\n            <p-slideMenu [model]=\"items\" [style]=\"{'width':'260px'}\" [menuWidth]=\"260\"></p-slideMenu>\n        </div>\n\n        <div class=\"card\">\n            <h1>PanelMenu</h1>\n            <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-g-6\">\n        <div class=\"card\">\n            <h1>TabMenu</h1>\n            <p-tabMenu [model]=\"tabMenuItems\"></p-tabMenu>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-g-6\">\n        <div class=\"card\">\n            <h1>MegaMenu - Horizontal</h1>\n            <p-megaMenu [model]=\"megaMenuItems\"></p-megaMenu>\n\n            <h1>MegaMenu - Vertical</h1>\n            <p-megaMenu [model]=\"megaMenuItems\" orientation=\"vertical\" [style]=\"{'width':'200px'}\"></p-megaMenu>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/view/menusdemo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/view/menusdemo.component.ts ***!
  \**************************************************/
/*! exports provided: MenusDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusDemoComponent", function() { return MenusDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenusDemoComponent = /** @class */ (function () {
    function MenusDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Menus', routerLink: ['/menus'] }
        ]);
    }
    MenusDemoComponent.prototype.ngOnInit = function () {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Categories' });
        this.breadcrumbItems.push({ label: 'Sports' });
        this.breadcrumbItems.push({ label: 'Football' });
        this.breadcrumbItems.push({ label: 'Countries' });
        this.breadcrumbItems.push({ label: 'Spain' });
        this.breadcrumbItems.push({ label: 'F.C. Barcelona' });
        this.breadcrumbItems.push({ label: 'Squad' });
        this.breadcrumbItems.push({ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' });
        this.tabMenuItems = [
            { label: 'Stats', icon: 'ui-icon-insert-chart' },
            { label: 'Calendar', icon: 'ui-icon-date-range' },
            { label: 'Documentation', icon: 'ui-icon-book' },
            { label: 'Support', icon: 'ui-icon-help-outline' },
            { label: 'Social', icon: 'ui-icon-public' }
        ];
        this.tieredItems = [
            {
                label: 'File',
                icon: 'ui-icon-folder',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-refresh',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-list',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            },
            {
                label: 'Quit', icon: 'ui-icon-power-settings-new'
            }
        ];
        this.items = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'ui-icon-plus' },
                    { label: 'Open', icon: 'ui-icon-open-in-browser' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            }];
        this.megaMenuItems = [
            {
                label: 'TV', icon: 'ui-icon-tv',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                        },
                        {
                            label: 'TV 4',
                            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'ui-icon-alarm',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'ui-icon-stars',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'ui-icon-phone-android',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ]
                ]
            }
        ];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'ui-icon-insert-drive-file',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-add',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-edit',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-phone-android',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            }
        ];
        this.stepsItems = [
            {
                label: 'Personal'
            },
            {
                label: 'Seat'
            },
            {
                label: 'Payment'
            },
            {
                label: 'Confirmation'
            }
        ];
    };
    MenusDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./menusdemo.component.html */ "./src/app/demo/view/menusdemo.component.html"),
            styles: ["\n        .ui-steps-item {\n            width: 25%\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], MenusDemoComponent);
    return MenusDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/messagesdemo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/demo/view/messagesdemo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Messages and Growl</h1>\n            <p-messages [value]=\"msgs\"></p-messages>\n            <p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\n            \n            <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" style=\"width:100px\"></button>\n            <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" style=\"width:100px\" class=\"green-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"deep-orange-button\" style=\"width:100px\" class=\"amber-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"red-button\" style=\"width:100px\" class=\"red-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\" class=\"indigo-button\" style=\"width:100px\" class=\"purple-btn\"></button>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Invalid Field</h1>\n            <span class=\"md-inputfield\">\n                <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\n                <div class=\"ui-message ui-messages-error ui-corner-all\">\n                    This field is required\n                </div>\n            </span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/view/messagesdemo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo/view/messagesdemo.component.ts ***!
  \*****************************************************/
/*! exports provided: MessagesDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemoComponent", function() { return MessagesDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesDemoComponent = /** @class */ (function () {
    function MessagesDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Messages', routerLink: ['/messages'] }
        ]);
    }
    MessagesDemoComponent.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemoComponent.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemoComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemoComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    };
    MessagesDemoComponent.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    MessagesDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./messagesdemo.component.html */ "./src/app/demo/view/messagesdemo.component.html"),
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], MessagesDemoComponent);
    return MessagesDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/miscdemo.component.html":
/*!***************************************************!*\
  !*** ./src/app/demo/view/miscdemo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1>ProgressBar</h1>\n            <p-progressBar [value]=\"value\"></p-progressBar>\n        </div>\n        <div class=\"card\">\n            <h1>Terminal</h1>\n            <p-terminal welcomeMessage=\"Welcome to Ultima\" prompt=\"primeng $\"></p-terminal>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1>Galleria</h1>\n            <p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/view/miscdemo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/demo/view/miscdemo.component.ts ***!
  \*************************************************/
/*! exports provided: MiscDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscDemoComponent", function() { return MiscDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/components/terminal/terminalservice */ "./node_modules/primeng/components/terminal/terminalservice.js");
/* harmony import */ var primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiscDemoComponent = /** @class */ (function () {
    function MiscDemoComponent(terminalService, breadcrumbService) {
        var _this = this;
        this.terminalService = terminalService;
        this.breadcrumbService = breadcrumbService;
        this.value = 0;
        this.subscription = this.terminalService.commandHandler.subscribe(function (command) {
            var response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            _this.terminalService.sendResponse(response);
        });
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Misc', routerLink: ['/misc'] }
        ]);
    }
    MiscDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                clearInterval(_this.interval);
                _this.interval = null;
            }
        }, 2000);
        this.images = [];
        this.images.push({ source: 'assets/demo/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/demo/images/nature/nature2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/demo/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/demo/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/demo/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/demo/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/demo/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    };
    MiscDemoComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    MiscDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./miscdemo.component.html */ "./src/app/demo/view/miscdemo.component.html"),
            providers: [primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__["TerminalService"]]
        }),
        __metadata("design:paramtypes", [primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__["TerminalService"], _breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]])
    ], MiscDemoComponent);
    return MiscDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/overlaysdemo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/demo/view/overlaysdemo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card\">\n            <h1>Overlay Panel</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" pButton label=\"Image\" (click)=\"op1.toggle($event)\"></button>\n                    <p-overlayPanel #op1>\n                        <img src=\"assets/demo/images/nature/nature1.jpg\" alt=\"Nature 1\" />\n                    </p-overlayPanel>\n                </div>\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" pButton label=\"DataTable\" (click)=\"op2.toggle($event)\"></button>\n                    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n                        <p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\" [style]=\"{'width':'500px'}\">\n                            <ng-template pTemplate=\"header\" let-columns>\n                                <tr>\n                                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                      {{col.header}}\n                                      <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                                <tr [pSelectableRow]=\"rowData\">\n                                    <td *ngFor=\"let col of columns\">\n                                      {{rowData[col.field]}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                    </p-overlayPanel>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h1>Dialog</h1>\n            <p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" showEffect=\"fade\" width=\"400\">\n                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n                   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n                   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n                   kind and benevolent to those who give respect,\n                   but given to ruthless violence whenever anything stands against the good of the family.</p>\n                <p-footer>\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                        <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display=false\" label=\"No\"></button>\n                        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\"></button>\n                    </div>\n                </p-footer>\n            </p-dialog>\n\n            <button type=\"text\" (click)=\"display=true\" pButton icon=\"fa fa-external-link-square\" label=\"Show\"></button>\n        </div>\n\n        <div class=\"card\">\n            <h1>Confirm Dialog</h1>\n            <p-confirmDialog header=\"Confirmation\" icon=\"ui-icon-warning\" width=\"425\"></p-confirmDialog>\n\n            <button type=\"text\" (click)=\"confirm()\" pButton icon=\"pi pi-check\" label=\"Confirm\"></button>\n        </div>\n\n        <div class=\"card\">\n            <h1>Tooltip</h1>\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\">\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card\">\n            <h1>LightBox</h1>\n            <p-lightbox [images]=\"images\"></p-lightbox>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/view/overlaysdemo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo/view/overlaysdemo.component.ts ***!
  \*****************************************************/
/*! exports provided: OverlaysDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaysDemoComponent", function() { return OverlaysDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverlaysDemoComponent = /** @class */ (function () {
    function OverlaysDemoComponent(carService, confirmationService, breadcrumbService) {
        this.carService = carService;
        this.confirmationService = confirmationService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Overlays', routerLink: ['/overlay'] }
        ]);
    }
    OverlaysDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars.splice(0, 5); });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.images = [];
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Nature 1' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Nature 2' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Nature 3' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Nature 4' });
    };
    OverlaysDemoComponent.prototype.confirm = function () {
        this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
        });
    };
    OverlaysDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./overlaysdemo.component.html */ "./src/app/demo/view/overlaysdemo.component.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]])
    ], OverlaysDemoComponent);
    return OverlaysDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/panelsdemo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/demo/view/panelsdemo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>AccordionPanel</h1>\n            <p-accordion>\n                <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather II\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather III\">\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                </p-accordionTab>\n            </p-accordion>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Panel</h1>\n            <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n            </p-panel>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>TabView</h1>\n            <p-tabView>\n                <p-tabPanel header=\"Godfather I\" leftIcon=\"ui-icon-check\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather II\" leftIcon=\"ui-icon-edit\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather III\" leftIcon=\"ui-icon-refresh\">\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                </p-tabPanel>\n            </p-tabView>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Fieldset</h1>\n            <p-fieldset legend=\"Toggleable\" toggleable=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n                kind and benevolent to those who give respect,\n                but given to ruthless violence whenever anything stands against the good of the family.\n            </p-fieldset>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Toolbar</h1>\n            <p-toolbar>\n                <div class=\"ui-toolbar-group-left\">\n                    <button pButton type=\"button\" label=\"New\" icon=\"ui-icon-plus\" class=\"green-btn\"></button>\n                    <button pButton type=\"button\" label=\"Update\" icon=\"ui-icon-update\" class=\"orange-btn\"></button>\n\n                    <i class=\"material-icons\" style=\"vertical-align:middle\">dehaze</i>\n\n                    <button pButton type=\"button\" icon=\"ui-icon-save\" class=\"green-btn\"></button>\n                    <button pButton type=\"button\" icon=\"ui-icon-delete\" class=\"orange-btn\"></button>\n                    <button pButton type=\"button\" icon=\"ui-icon-print\" class=\"pink-btn\"></button>\n                </div>\n\n                <div class=\"ui-toolbar-group-right\">\n                    <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\"></p-splitButton>\n                </div>\n           </p-toolbar>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/view/panelsdemo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/view/panelsdemo.component.ts ***!
  \***************************************************/
/*! exports provided: PanelsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsDemoComponent", function() { return PanelsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelsDemoComponent = /** @class */ (function () {
    function PanelsDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Panels', routerLink: ['/panels'] }
        ]);
    }
    PanelsDemoComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Angular.io', icon: 'ui-icon-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'ui-icon-brush', routerLink: ['/theming'] }
        ];
    };
    PanelsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./panelsdemo.component.html */ "./src/app/demo/view/panelsdemo.component.html"),
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], PanelsDemoComponent);
    return PanelsDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/sampledemo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/demo/view/sampledemo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-fluid\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <div class=\"ui-messages ui-widget ui-corner-all ui-messages-success\" style=\"margin: 0 0 1em 0; display: block\">\n                <span class=\"ui-messages-icon pi pi-fw pi-check\"></span>\n                <ul>\n                    <li>\n                        <span class=\"ui-messages-summary\" style=\"font-size:16px\">Ultima provides a theme for all 70+ PrimeNG Components. This page contains samples of the commonly used components for demo purposes.</span>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card no-margin\">\n                <h1>Form Elements</h1>\n                <div class=\"ui-g form-group\">\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"input\">Input</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <span class=\"md-inputfield\">\n                            <input id=\"input\" type=\"text\" pInputText/>\n                            <label>Username</label>\n                        </span>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"textarea\">Textarea</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\n                    </div>\n\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"calendar\">Calendar</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-calendar id=\"calendar\"></p-calendar>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"autocomplete\">AutoComplete</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\"\n                            placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n                    </div>\n\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"dropdown\">Dropdown</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-dropdown id=\"dropdown\" [options]=\"cities1\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"password\">Password</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <input id=\"password\" pPassword type=\"password\"/>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        Button\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <button pButton type=\"button\" label=\"Edit\" icon=\"ui-icon-edit\"></button>\n                    </div>\n\n                    <div class=\"ui-g-12 ui-md-2\">\n                        SplitButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-splitButton label=\"Save\" icon=\"ui-icon-save\" [model]=\"splitButtonItems\"></p-splitButton>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"multiselect\">MultiSelect</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-multiSelect id=\"multiselect\" [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n                    </div>\n\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"slider\">Slider</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-slider></p-slider>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        Checkbox\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        RadioButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"mask\">Mask</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-inputMask mask=\"99/99/9999\" slotChar=\"dd/mm/yyyy\" placeholder=\"Date\"></p-inputMask>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"spinner\">Spinner</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-spinner></p-spinner>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        ToggleButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        SelectButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        Dialog\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <button type=\"button\" label=\"Login\" icon=\"ui-icon-open-in-new\" (click)=\"dialogVisible=true\" pButton></button>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"listbox\">Listbox</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-listbox [options]=\"cities2\" [(ngModel)]=\"selectedCity2\"></p-listbox>\n                    </div>\n                </div>\n\n                <p-dialog header=\"Login\" [resizable]=\"false\" responsive=\"true\" [(visible)]=\"dialogVisible\">\n                    <div class=\"ui-g form-group\" style=\"margin-bottom: 16px;\">\n                        <div class=\"ui-g-12\">\n                            <span class=\"md-inputfield\">\n                                <input type=\"text\" pInputText>\n                                <label>Name</label>\n                            </span>\n                        </div>\n                        <div class=\"ui-g-12\">\n                            <span class=\"md-inputfield\">\n                                <input type=\"password\" pInputText>\n                                <label>Password</label>\n                            </span>\n                        </div>\n                    </div>\n\n                    <p-footer>\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                            <button type=\"button\" label=\"Login\" icon=\"ui-icon-person\" (click)=\"dialogVisible=false\" pButton></button>\n                        </div>\n                    </p-footer>\n                </p-dialog>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>DataTable</h1>\n                <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" dataKey=\"vin\" [style]=\"{'margin-bottom':'20px'}\" [(selection)]=\"selectedCar3\">\n                    <ng-template pTemplate=\"caption\">\n                      DataTable\n                    </ng-template>\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                              {{col.header}}\n                              <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr [pSelectableRow]=\"rowData\">\n                            <td *ngFor=\"let col of columns\">\n                              {{rowData[col.field]}}\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-lg-6\">\n            <!-- Left Side -->\n            <div class=\"card card-w-title\">\n                <h1>DataView</h1>\n                <p-dataView #dv [value]=\"carsLarge\" [paginator]=\"true\" [rows]=\"10\" paginatorPosition=\"both\" filterBy=\"brand\">\n                    <p-header>\n                        <div class=\"ui-helper-clearfix\">\n                            <div class=\"ui-g\">\n                                <div class=\"ui-g-12 ui-md-6\">\n                                    <div style=\"position:relative\">\n                                        <input type=\"search\" pInputText placeholder=\"Search by brand\" (keyup)=\"dv.filter($event.target.value)\">\n                                    </div>\n                                </div>\n                                <div class=\"ui-g-12 ui-md-6\" style=\"text-align:right\">\n                                    <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\n                                </div>\n                            </div>\n                        </div>\n                    </p-header>\n                    <ng-template let-car pTemplate=\"listItem\">\n                        <div class=\"ui-g\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\">\n                            <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                            </div>\n                            <div class=\"ui-g-12 ui-md-8 car-details\">\n                                <div class=\"ui-g\">\n                                    <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\n                                    <div class=\"ui-g-10 ui-sm-6\">\n                                        <b>{{car.vin}}</b>\n                                    </div>\n\n                                    <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n                                    <div class=\"ui-g-10 ui-sm-6\">\n                                        <b>{{car.year}}</b>\n                                    </div>\n\n                                    <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\n                                    <div class=\"ui-g-10 ui-sm-6\">\n                                        <b>{{car.brand}}</b>\n                                    </div>\n\n                                    <div class=\"ui-g-2 ui-sm-6\">Color: </div>\n                                    <div class=\"ui-g-10 ui-sm-6\">\n                                        <b>{{car.color}}</b>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"ui-g-12 ui-md-1 search-icon\">\n                                <button pButton type=\"button\" icon=\"pi pi-search\" ></button>\n                            </div>\n                        </div>\n                    </ng-template>\n                    <ng-template let-car pTemplate=\"gridItem\">\n                        <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\n                            <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                                <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                                <hr class=\"ui-widget-content\" style=\"border-top:0\">\n                                <button pButton type=\"button\" icon=\"pi pi-search\" style=\"margin-top:0\"></button>\n                            </p-panel>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-lg-6\">\n            <!-- Right Side -->\n            <div class=\"card card-w-title\">\n                <h1>PickList</h1>\n                <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <span>{{car.brand}}</span>\n                    </ng-template>\n                </p-pickList>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>OrderList</h1>\n                <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"ui-helper-clearfix\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px; width: 50px;\" />\n                            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\n                        </div>\n                    </ng-template>\n                </p-orderList>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Accordion Panel</h1>\n                <p-accordion>\n                    <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son\n                        ichael has just come home from the war, but does not intend to become part of his father's business.\n                        T hrough Michael's life the nature of the family business becomes clear. The business of the family\n                        is just like the head of the family, kind and benevolent to those who give respect, but given to\n                        ruthless violence whenever anything stands against the good of the family.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather II\">\n                        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito\n                        Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the\n                        dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for\n                        America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally,\n                        for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands\n                        his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather III\">\n                        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third\n                        and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin\n                        Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n                        his family would one day be completely legitimate.\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Panel</h1>\n                <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business.\n                    Through Michael's life the nature of the family business becomes clear. The business of the family is\n                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless\n                    violence whenever anything stands against the good of the family.\n                </p-panel>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>ProgressBar - Static Display</h1>\n                <p-progressBar [value]=\"50\"></p-progressBar>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Tree</h1>\n                <p-tree [value]=\"filesTree\"></p-tree>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Menu</h1>\n                <p-menu [model]=\"menuItems\" [style]=\"{'width':'100%'}\"></p-menu>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>PanelMenu</h1>\n                <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n            </div>\n        </div>\n\n        <div class=\"ui-g-12\">\n            <div class=\"card card-w-title\">\n                <h1>Carousel</h1>\n                <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"ui-g\" style=\"text-align:center\">\n                            <div class=\"ui-g-12\" style=\"text-align:Center\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\n                            </div>\n                            <div class=\"ui-g-6\">Vin: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\n\n                            <div class=\"ui-g-6\">Year: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\n\n                            <div class=\"ui-g-6\">Brand: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\n\n                            <div class=\"ui-g-6\">Color: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\n                        </div>\n                    </ng-template>\n                </p-carousel>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/view/sampledemo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/view/sampledemo.component.ts ***!
  \***************************************************/
/*! exports provided: SampleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleDemoComponent", function() { return SampleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _service_countryservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/countryservice */ "./src/app/demo/service/countryservice.ts");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/nodeservice */ "./src/app/demo/service/nodeservice.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SampleDemoComponent = /** @class */ (function () {
    function SampleDemoComponent(carService, countryService, nodeService, breadcrumbService) {
        this.carService = carService;
        this.countryService = countryService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.checkboxValues = [];
        this.selectedMultiSelectCars = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Sample', routerLink: ['/sample'] }
        ]);
    }
    SampleDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.carService.getCarsLarge().then(function (cars) { return _this.carsLarge = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree = files; });
        this.carService.getCarsSmall().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.cities1 = [];
        this.cities1.push({ label: 'Select City', value: null });
        this.cities1.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities1.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities1.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities1.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities1.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.cities2 = this.cities1.slice(1, 6);
        this.splitButtonItems = [
            { label: 'Update', icon: 'ui-icon-update' },
            { label: 'Delete', icon: 'ui-icon-close' },
            { label: 'Home', icon: 'ui-icon-home', url: 'http://www.primefaces.org/primeng' }
        ];
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.menuItems = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'ui-icon-plus' },
                    { label: 'Open', icon: 'ui-icon-open-in-browser' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            }];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'ui-icon-insert-drive-file',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-add',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-edit',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-list',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            }
        ];
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
    };
    SampleDemoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    SampleDemoComponent.prototype.searchCountry = function (query, countries) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    SampleDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./sampledemo.component.html */ "./src/app/demo/view/sampledemo.component.html"),
            styles: ["\n        .ui-dataview-layout-options .ui-button {\n            margin-left: .5em;\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"], _service_countryservice__WEBPACK_IMPORTED_MODULE_2__["CountryService"], _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__["NodeService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]])
    ], SampleDemoComponent);
    return SampleDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/view/utilsdemo.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo/view/utilsdemo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Card</h1>\n            <p>Card is a section to group content and layout provides a built-in css for it. Apply .card style class to your container to use it. If the\n            card has a title defined with h1 tag, add card-w-title to adjust paddings.</p>\n<pre>\n&lt;div class=\"card\"&gt;\n    Content here\n&lt;/div&gt;\n\n&lt;div class=\"card card-w-title\"&gt;\n    &lt;h1&gt;Card with Title&lt;h1&gt;\n    Content here\n&lt;/div&gt;\n</pre>  \n            \n            <div class=\"card\">\n                Content\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Card with Title</h1>\n                Content\n            </div>\n            \n            <h1>Input Animations</h1>\n            <p>Label of an input can be animated on focus by wrapping both the input and label in an element with md-inputfield style class.</p>\n            <br />\n            \n            <span class=\"md-inputfield\">\n                <input type=\"text\" pInputText>\n                <label>Name</label>\n            </span>\n\n<pre>\n&lt;span class=\"md-inputfield\"&gt;\n    &lt;input type=\"text\" pInputText&gt;\n    &lt;label>Name&lt;/label&gt;\n&lt;/span>\n</pre>      \n\n            <p>Input fields can be filled as well by adding \"md-inputfield-fill\"</p>\n        \n<pre>\n&lt;span class=\"md-inputfield md-inputfield-fill\"&gt;\n    &lt;input type=\"text\" pInputText&gt;\n    &lt;label>Name&lt;/label&gt;\n&lt;/span>\n</pre>        \n\n            <p>Textbox is an extension to md-inputfield to fill the label and inputfield together.</p>   \n<pre>\n&lt;span class=\"md-inputfield md-inputfield-box\"&gt;\n    &lt;input type=\"text\" pInputText&gt;\n    &lt;label>Name&lt;/label&gt;\n&lt;/span>\n</pre> \n            \n            <h1>Shadows</h1>\n            <p>5 levels of shadows are provided varying from ui-shadow-1 to ui-shadow-5 to define the level of depth.</p>\n            \n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-1\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-2\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-3\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-4\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-5\"></div>\n                </div>\n            </div>\n<pre>\n&lt;div class=\"ui-g\"&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-1\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-2\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-3\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-4\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-5\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</pre>  \n            \n            <h1>Icons</h1>\n            <p><a href=\"https://design.google.com/icons/\">All material icons</a> have been ported \n                using <i>ui-icon-</i> convention. To use an icon within a component\n                such as button below, define it using the icon attribute prefixed by <i>ui-icon-</i>.</p>\n                \n                <div style=\"text-align:center;margin-bottom:16px;\">\n                    <button type=\"button\" pButton label=\"ui-icon-check\" icon=\"ui-icon-check\"></button>\n                </div>\n                \n<pre>\n&lt;button type=\"button\" pButton label=\"ui-icon-check\" icon=\"ui-icon-check\"&gt;&lt;/button&gt;\n</pre>  \n                \n                <div class=\"ui-g icon-grid\">\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-3d-rotation\"></i>3d-rotation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ac-unit\"></i>ac-unit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-alarm\"></i>access-alarm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-alarms\"></i>access-alarms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-time\"></i>access-time</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-accessibility\"></i>accessibility</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-accessible\"></i>accessible</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-balance\"></i>account-balance</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-balance-wallet\"></i>account-balance-wallet</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-box\"></i>account-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-circle\"></i>account-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add\"></i>add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-a-photo\"></i>add-a-photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-alarm\"></i>add-alarm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-alert\"></i>add-alert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-box\"></i>add-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-circle\"></i>add-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-circle-outline\"></i>add-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-location\"></i>add-location</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-shopping-cart\"></i>add-shopping-cart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-to-photos\"></i>add-to-photos</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-to-queue\"></i>add-to-queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-adjust\"></i>adjust</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-flat\"></i>airline-seat-flat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-flat-angled\"></i>airline-seat-flat-angled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-individual-suite\"></i>airline-seat-individual-suite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-extra\"></i>airline-seat-legroom-extra</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-normal\"></i>airline-seat-legroom-normal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-reduced\"></i>airline-seat-legroom-reduced</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-recline-extra\"></i>airline-seat-recline-extra</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-recline-normal\"></i>airline-seat-recline-normal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplanemode-active\"></i>airplanemode-active</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplanemode-inactive\"></i>airplanemode-inactive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplay\"></i>airplay</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airport-shuttle\"></i>airport-shuttle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm\"></i>alarm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-add\"></i>alarm-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-off\"></i>alarm-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-on\"></i>alarm-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-album\"></i>album</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-all-inclusive\"></i>all-inclusive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-all-out\"></i>all-out</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-android\"></i>android</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-announcement\"></i>announcement</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-apps\"></i>apps</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-archive\"></i>archive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-back\"></i>arrow-back</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-downward\"></i>arrow-downward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-down\"></i>arrow-drop-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-down-circle\"></i>arrow-drop-down-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-up\"></i>arrow-drop-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-forward\"></i>arrow-forward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-upward\"></i>arrow-upward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-art-track\"></i>art-track</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-aspect-ratio\"></i>aspect-ratio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assessment\"></i>assessment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment\"></i>assignment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-ind\"></i>assignment-ind</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-late\"></i>assignment-late</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-return\"></i>assignment-return</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-returned\"></i>assignment-returned</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-turned-in\"></i>assignment-turned-in</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assistant\"></i>assistant</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assistant-photo\"></i>assistant-photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attach-file\"></i>attach-file</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attach-money\"></i>attach-money</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attachment\"></i>attachment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-audiotrack\"></i>audiotrack</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-autorenew\"></i>autorenew</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-av-timer\"></i>av-timer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-backspace\"></i>backspace</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-backup\"></i>backup</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-alert\"></i>battery-alert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-charging-full\"></i>battery-charging-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-full\"></i>battery-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-std\"></i>battery-std</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-unknown\"></i>battery-unknown</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-beach-access\"></i>beach-access</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-beenhere\"></i>beenhere</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-block\"></i>block</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth\"></i>bluetooth</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-audio\"></i>bluetooth-audio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-connected\"></i>bluetooth-connected</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-disabled\"></i>bluetooth-disabled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-searching\"></i>bluetooth-searching</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-circular\"></i>blur-circular</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-linear\"></i>blur-linear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-off\"></i>blur-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-on\"></i>blur-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-book\"></i>book</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bookmark\"></i>bookmark</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bookmark-border\"></i>bookmark-border</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-all\"></i>border-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-bottom\"></i>border-bottom</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-clear\"></i>border-clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-color\"></i>border-color</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-horizontal\"></i>border-horizontal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-inner\"></i>border-inner</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-left\"></i>border-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-outer\"></i>border-outer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-right\"></i>border-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-style\"></i>border-style</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-top\"></i>border-top</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-vertical\"></i>border-vertical</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-branding-watermark\"></i>branding-watermark</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-1\"></i>brightness-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-2\"></i>brightness-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-3\"></i>brightness-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-4\"></i>brightness-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-5\"></i>brightness-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-6\"></i>brightness-6</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-7\"></i>brightness-7</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-auto\"></i>brightness-auto</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-high\"></i>brightness-high</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-low\"></i>brightness-low</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-medium\"></i>brightness-medium</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-broken-image\"></i>broken-image</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brush\"></i>brush</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bubble-chart\"></i>bubble-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bug-report\"></i>bug-report</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-build\"></i>build</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-burst-mode\"></i>burst-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-business\"></i>business</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-business-center\"></i>business-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cached\"></i>cached</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cake\"></i>cake</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call\"></i>call</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-end\"></i>call-end</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-made\"></i>call-made</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-merge\"></i>call-merge</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-missed\"></i>call-missed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-missed-outgoing\"></i>call-missed-outgoing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-received\"></i>call-received</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-split\"></i>call-split</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-to-action\"></i>call-to-action</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera\"></i>camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-alt\"></i>camera-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-enhance\"></i>camera-enhance</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-front\"></i>camera-front</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-rear\"></i>camera-rear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-roll\"></i>camera-roll</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cancel\"></i>cancel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-giftcard\"></i>card-giftcard</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-membership\"></i>card-membership</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-travel\"></i>card-travel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-casino\"></i>casino</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cast\"></i>cast</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cast-connected\"></i>cast-connected</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-center-focus-strong\"></i>center-focus-strong</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-center-focus-weak\"></i>center-focus-weak</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-change-history\"></i>change-history</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat\"></i>chat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat-bubble\"></i>chat-bubble</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat-bubble-outline\"></i>chat-bubble-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check\"></i>check</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-box\"></i>check-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-box-outline-blank\"></i>check-box-outline-blank</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-circle\"></i>check-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chevron-left\"></i>chevron-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chevron-right\"></i>chevron-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-child-care\"></i>child-care</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-child-friendly\"></i>child-friendly</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chrome-reader-mode\"></i>chrome-reader-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-class\"></i>class</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-clear\"></i>clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-clear-all\"></i>clear-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-close\"></i>close</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-closed-caption\"></i>closed-caption</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud\"></i>cloud</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-circle\"></i>cloud-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-done\"></i>cloud-done</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-download\"></i>cloud-download</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-off\"></i>cloud-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-queue\"></i>cloud-queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-upload\"></i>cloud-upload</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-code\"></i>code</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-collections\"></i>collections</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-collections-bookmark\"></i>collections-bookmark</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-color-lens\"></i>color-lens</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-colorize\"></i>colorize</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-comment\"></i>comment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-compare\"></i>compare</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-compare-arrows\"></i>compare-arrows</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-computer\"></i>computer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-confirmation-number\"></i>confirmation-number</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contact-mail\"></i>contact-mail</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contact-phone\"></i>contact-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contacts\"></i>contacts</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-copy\"></i>content-copy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-cut\"></i>content-cut</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-paste\"></i>content-paste</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-control-point\"></i>control-point</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-control-point-duplicate\"></i>control-point-duplicate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-copyright\"></i>copyright</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-create\"></i>create</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-create-new-folder\"></i>create-new-folder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-credit-card\"></i>credit-card</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop\"></i>crop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-16-9\"></i>crop-16-9</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-3-2\"></i>crop-3-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-5-4\"></i>crop-5-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-7-5\"></i>crop-7-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-din\"></i>crop-din</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-free\"></i>crop-free</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-landscape\"></i>crop-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-original\"></i>crop-original</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-portrait\"></i>crop-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-rotate\"></i>crop-rotate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-square\"></i>crop-square</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dashboard\"></i>dashboard</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-data-usage\"></i>data-usage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-date-range\"></i>date-range</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dehaze\"></i>dehaze</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete\"></i>delete</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete-forever\"></i>delete-forever</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete-sweep\"></i>delete-sweep</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-description\"></i>description</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-desktop-mac\"></i>desktop-mac</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-desktop-windows\"></i>desktop-windows</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-details\"></i>details</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-developer-board\"></i>developer-board</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-developer-mode\"></i>developer-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-device-hub\"></i>device-hub</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-devices\"></i>devices</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-devices-other\"></i>devices-other</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dialer-sip\"></i>dialer-sip</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dialpad\"></i>dialpad</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions\"></i>directions</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-bike\"></i>directions-bike</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-boat\"></i>directions-boat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-bus\"></i>directions-bus</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-car\"></i>directions-car</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-railway\"></i>directions-railway</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-run\"></i>directions-run</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-subway\"></i>directions-subway</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-transit\"></i>directions-transit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-walk\"></i>directions-walk</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-disc-full\"></i>disc-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dns\"></i>dns</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb\"></i>do-not-disturb</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-alt\"></i>do-not-disturb-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-off\"></i>do-not-disturb-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-on\"></i>do-not-disturb-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dock\"></i>dock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-domain\"></i>domain</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-done\"></i>done</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-done-all\"></i>done-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-donut-large\"></i>donut-large</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-donut-small\"></i>donut-small</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drafts\"></i>drafts</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drag-handle\"></i>drag-handle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drive-eta\"></i>drive-eta</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dvr\"></i>dvr</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-edit\"></i>edit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-edit-location\"></i>edit-location</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-eject\"></i>eject</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-email\"></i>email</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-enhanced-encryption\"></i>enhanced-encryption</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-equalizer\"></i>equalizer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-error\"></i>error</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-error-outline\"></i>error-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-euro-symbol\"></i>euro-symbol</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ev-station\"></i>ev-station</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event\"></i>event</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-available\"></i>event-available</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-busy\"></i>event-busy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-note\"></i>event-note</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-seat\"></i>event-seat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exit-to-app\"></i>exit-to-app</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-expand-less\"></i>expand-less</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-expand-more\"></i>expand-more</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-explicit\"></i>explicit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-explore\"></i>explore</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure\"></i>exposure</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-neg-1\"></i>exposure-neg-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-neg-2\"></i>exposure-neg-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-plus-1\"></i>exposure-plus-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-plus-2\"></i>exposure-plus-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-zero\"></i>exposure-zero</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-extension\"></i>extension</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-face\"></i>face</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fast-forward\"></i>fast-forward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fast-rewind\"></i>fast-rewind</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-favorite\"></i>favorite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-favorite-border\"></i>favorite-border</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-featured-play-list\"></i>featured-play-list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-featured-video\"></i>featured-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-feedback\"></i>feedback</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-dvr\"></i>fiber-dvr</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-manual-record\"></i>fiber-manual-record</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-new\"></i>fiber-new</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-pin\"></i>fiber-pin</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-smart-record\"></i>fiber-smart-record</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-file-download\"></i>file-download</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-file-upload\"></i>file-upload</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter\"></i>filter</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-1\"></i>filter-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-2\"></i>filter-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-3\"></i>filter-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-4\"></i>filter-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-5\"></i>filter-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-6\"></i>filter-6</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-7\"></i>filter-7</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-8\"></i>filter-8</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-9\"></i>filter-9</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-9-plus\"></i>filter-9-plus</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-b-and-w\"></i>filter-b-and-w</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-center-focus\"></i>filter-center-focus</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-drama\"></i>filter-drama</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-frames\"></i>filter-frames</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-hdr\"></i>filter-hdr</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-list\"></i>filter-list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-none\"></i>filter-none</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-tilt-shift\"></i>filter-tilt-shift</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-vintage\"></i>filter-vintage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-find-in-page\"></i>find-in-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-find-replace\"></i>find-replace</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fingerprint\"></i>fingerprint</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-first-page\"></i>first-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fitness-center\"></i>fitness-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flag\"></i>flag</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flare\"></i>flare</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-auto\"></i>flash-auto</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-off\"></i>flash-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-on\"></i>flash-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight\"></i>flight</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight-land\"></i>flight-land</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight-takeoff\"></i>flight-takeoff</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip\"></i>flip</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip-to-back\"></i>flip-to-back</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip-to-front\"></i>flip-to-front</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder\"></i>folder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-open\"></i>folder-open</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-shared\"></i>folder-shared</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-special\"></i>folder-special</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-font-download\"></i>font-download</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-center\"></i>format-align-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-justify\"></i>format-align-justify</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-left\"></i>format-align-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-right\"></i>format-align-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-bold\"></i>format-bold</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-clear\"></i>format-clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-fill\"></i>format-color-fill</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-reset\"></i>format-color-reset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-text\"></i>format-color-text</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-indent-decrease\"></i>format-indent-decrease</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-indent-increase\"></i>format-indent-increase</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-italic\"></i>format-italic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-line-spacing\"></i>format-line-spacing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-list-bulleted\"></i>format-list-bulleted</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-list-numbered\"></i>format-list-numbered</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-paint\"></i>format-paint</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-quote\"></i>format-quote</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-shapes\"></i>format-shapes</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-size\"></i>format-size</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-strikethrough\"></i>format-strikethrough</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-textdirection-l-to-r\"></i>format-textdirection-l-to-r</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-textdirection-r-to-l\"></i>format-textdirection-r-to-l</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-underlined\"></i>format-underlined</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forum\"></i>forum</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward\"></i>forward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-10\"></i>forward-10</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-30\"></i>forward-30</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-5\"></i>forward-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-free-breakfast\"></i>free-breakfast</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fullscreen\"></i>fullscreen</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fullscreen-exit\"></i>fullscreen-exit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-functions\"></i>functions</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-g-translate\"></i>g-translate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gamepad\"></i>gamepad</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-games\"></i>games</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gavel\"></i>gavel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gesture\"></i>gesture</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-get-app\"></i>get-app</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gif\"></i>gif</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-golf-course\"></i>golf-course</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-fixed\"></i>gps-fixed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-not-fixed\"></i>gps-not-fixed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-off\"></i>gps-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grade\"></i>grade</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gradient\"></i>gradient</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grain\"></i>grain</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-graphic-eq\"></i>graphic-eq</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grid-off\"></i>grid-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grid-on\"></i>grid-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group\"></i>group</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group-add\"></i>group-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group-work\"></i>group-work</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hd\"></i>hd</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-off\"></i>hdr-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-on\"></i>hdr-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-strong\"></i>hdr-strong</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-weak\"></i>hdr-weak</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-headset\"></i>headset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-headset-mic\"></i>headset-mic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-healing\"></i>healing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hearing\"></i>hearing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-help\"></i>help</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-help-outline\"></i>help-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-high-quality\"></i>high-quality</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-highlight\"></i>highlight</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-highlight-off\"></i>highlight-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-history\"></i>history</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-home\"></i>home</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hot-tub\"></i>hot-tub</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hotel\"></i>hotel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hourglass-empty\"></i>hourglass-empty</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hourglass-full\"></i>hourglass-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-http\"></i>http</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-https\"></i>https</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-image\"></i>image</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-image-aspect-ratio\"></i>image-aspect-ratio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-import-contacts\"></i>import-contacts</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-import-export\"></i>import-export</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-important-devices\"></i>important-devices</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-inbox\"></i>inbox</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-indeterminate-check-box\"></i>indeterminate-check-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-info\"></i>info</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-info-outline\"></i>info-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-input\"></i>input</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-chart\"></i>insert-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-comment\"></i>insert-comment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-drive-file\"></i>insert-drive-file</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-emoticon\"></i>insert-emoticon</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-invitation\"></i>insert-invitation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-link\"></i>insert-link</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-photo\"></i>insert-photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-invert-colors\"></i>invert-colors</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-invert-colors-off\"></i>invert-colors-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-iso\"></i>iso</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard\"></i>keyboard</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-down\"></i>keyboard-arrow-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-left\"></i>keyboard-arrow-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-right\"></i>keyboard-arrow-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-up\"></i>keyboard-arrow-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-backspace\"></i>keyboard-backspace</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-capslock\"></i>keyboard-capslock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-hide\"></i>keyboard-hide</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-return\"></i>keyboard-return</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-tab\"></i>keyboard-tab</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-voice\"></i>keyboard-voice</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-kitchen\"></i>kitchen</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-label\"></i>label</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-label-outline\"></i>label-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-landscape\"></i>landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-language\"></i>language</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop\"></i>laptop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-chromebook\"></i>laptop-chromebook</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-mac\"></i>laptop-mac</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-windows\"></i>laptop-windows</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-last-page\"></i>last-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-launch\"></i>launch</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-layers\"></i>layers</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-layers-clear\"></i>layers-clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-leak-add\"></i>leak-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-leak-remove\"></i>leak-remove</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lens\"></i>lens</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-add\"></i>library-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-books\"></i>library-books</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-music\"></i>library-music</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lightbulb-outline\"></i>lightbulb-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-line-style\"></i>line-style</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-line-weight\"></i>line-weight</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-linear-scale\"></i>linear-scale</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-link\"></i>link</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-linked-camera\"></i>linked-camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-list\"></i>list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-live-help\"></i>live-help</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-live-tv\"></i>live-tv</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-activity\"></i>local-activity</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-airport\"></i>local-airport</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-atm\"></i>local-atm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-bar\"></i>local-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-cafe\"></i>local-cafe</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-car-wash\"></i>local-car-wash</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-convenience-store\"></i>local-convenience-store</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-dining\"></i>local-dining</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-drink\"></i>local-drink</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-florist\"></i>local-florist</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-gas-station\"></i>local-gas-station</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-grocery-store\"></i>local-grocery-store</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-hospital\"></i>local-hospital</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-hotel\"></i>local-hotel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-laundry-service\"></i>local-laundry-service</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-library\"></i>local-library</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-mall\"></i>local-mall</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-movies\"></i>local-movies</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-offer\"></i>local-offer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-parking\"></i>local-parking</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-pharmacy\"></i>local-pharmacy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-phone\"></i>local-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-pizza\"></i>local-pizza</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-play\"></i>local-play</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-post-office\"></i>local-post-office</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-printshop\"></i>local-printshop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-see\"></i>local-see</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-shipping\"></i>local-shipping</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-taxi\"></i>local-taxi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-city\"></i>location-city</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-disabled\"></i>location-disabled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-off\"></i>location-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-on\"></i>location-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-searching\"></i>location-searching</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock\"></i>lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock-open\"></i>lock-open</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock-outline\"></i>lock-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks\"></i>looks</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-3\"></i>looks-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-4\"></i>looks-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-5\"></i>looks-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-6\"></i>looks-6</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-one\"></i>looks-one</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-two\"></i>looks-two</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loop\"></i>loop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loupe\"></i>loupe</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-low-priority\"></i>low-priority</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loyalty\"></i>loyalty</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mail\"></i>mail</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mail-outline\"></i>mail-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-map\"></i>map</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-markunread\"></i>markunread</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-markunread-mailbox\"></i>markunread-mailbox</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-memory\"></i>memory</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-menu\"></i>menu</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-merge-type\"></i>merge-type</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-message\"></i>message</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic\"></i>mic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic-none\"></i>mic-none</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic-off\"></i>mic-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mms\"></i>mms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mode-comment\"></i>mode-comment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mode-edit\"></i>mode-edit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-monetization-on\"></i>monetization-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-money-off\"></i>money-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-monochrome-photos\"></i>monochrome-photos</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mood\"></i>mood</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mood-bad\"></i>mood-bad</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more\"></i>more</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more-horiz\"></i>more-horiz</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more-vert\"></i>more-vert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-motorcycle\"></i>motorcycle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mouse\"></i>mouse</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-move-to-inbox\"></i>move-to-inbox</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie\"></i>movie</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie-creation\"></i>movie-creation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie-filter\"></i>movie-filter</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-multiline-chart\"></i>multiline-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-music-note\"></i>music-note</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-music-video\"></i>music-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-my-location\"></i>my-location</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nature\"></i>nature</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nature-people\"></i>nature-people</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigate-before\"></i>navigate-before</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigate-next\"></i>navigate-next</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigation\"></i>navigation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-near-me\"></i>near-me</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-cell\"></i>network-cell</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-check\"></i>network-check</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-locked\"></i>network-locked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-wifi\"></i>network-wifi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-new-releases\"></i>new-releases</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-next-week\"></i>next-week</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nfc\"></i>nfc</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-no-encryption\"></i>no-encryption</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-no-sim\"></i>no-sim</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-not-interested\"></i>not-interested</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-note\"></i>note</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-note-add\"></i>note-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications\"></i>notifications</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-active\"></i>notifications-active</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-none\"></i>notifications-none</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-off\"></i>notifications-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-paused\"></i>notifications-paused</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-offline-pin\"></i>offline-pin</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ondemand-video\"></i>ondemand-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-opacity\"></i>opacity</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-in-browser\"></i>open-in-browser</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-in-new\"></i>open-in-new</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-with\"></i>open-with</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pages\"></i>pages</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pageview\"></i>pageview</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-palette\"></i>palette</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pan-tool\"></i>pan-tool</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama\"></i>panorama</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-fish-eye\"></i>panorama-fish-eye</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-horizontal\"></i>panorama-horizontal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-vertical\"></i>panorama-vertical</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-wide-angle\"></i>panorama-wide-angle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-party-mode\"></i>party-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause\"></i>pause</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause-circle-filled\"></i>pause-circle-filled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause-circle-outline\"></i>pause-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-payment\"></i>payment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-people\"></i>people</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-people-outline\"></i>people-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-camera-mic\"></i>perm-camera-mic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-contact-calendar\"></i>perm-contact-calendar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-data-setting\"></i>perm-data-setting</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-device-information\"></i>perm-device-information</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-identity\"></i>perm-identity</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-media\"></i>perm-media</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-phone-msg\"></i>perm-phone-msg</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-scan-wifi\"></i>perm-scan-wifi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person\"></i>person</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-add\"></i>person-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-outline\"></i>person-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-pin\"></i>person-pin</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-pin-circle\"></i>person-pin-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-personal-video\"></i>personal-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pets\"></i>pets</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone\"></i>phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-android\"></i>phone-android</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-bluetooth-speaker\"></i>phone-bluetooth-speaker</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-forwarded\"></i>phone-forwarded</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-in-talk\"></i>phone-in-talk</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-iphone\"></i>phone-iphone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-locked\"></i>phone-locked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-missed\"></i>phone-missed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-paused\"></i>phone-paused</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink\"></i>phonelink</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-erase\"></i>phonelink-erase</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-lock\"></i>phonelink-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-off\"></i>phonelink-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-ring\"></i>phonelink-ring</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-setup\"></i>phonelink-setup</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo\"></i>photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-album\"></i>photo-album</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-camera\"></i>photo-camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-filter\"></i>photo-filter</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-library\"></i>photo-library</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-actual\"></i>photo-size-select-actual</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-large\"></i>photo-size-select-large</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-small\"></i>photo-size-select-small</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-as-pdf\"></i>picture-as-pdf</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-in-picture\"></i>picture-in-picture</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-in-picture-alt\"></i>picture-in-picture-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pie-chart\"></i>pie-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pie-chart-outlined\"></i>pie-chart-outlined</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pin-drop\"></i>pin-drop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-place\"></i>place</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-arrow\"></i>play-arrow</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-circle-filled\"></i>play-circle-filled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-circle-outline\"></i>play-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-for-work\"></i>play-for-work</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-add\"></i>playlist-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-add-check\"></i>playlist-add-check</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-play\"></i>playlist-play</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-plus-one\"></i>plus-one</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-poll\"></i>poll</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-polymer\"></i>polymer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pool\"></i>pool</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-portable-wifi-off\"></i>portable-wifi-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-portrait\"></i>portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power\"></i>power</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power-input\"></i>power-input</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power-settings-new\"></i>power-settings-new</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pregnant-woman\"></i>pregnant-woman</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-present-to-all\"></i>present-to-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-print\"></i>print</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-priority-high\"></i>priority-high</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-public\"></i>public</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-publish\"></i>publish</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-query-builder\"></i>query-builder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-question-answer\"></i>question-answer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue\"></i>queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue-music\"></i>queue-music</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue-play-next\"></i>queue-play-next</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio\"></i>radio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio-button-checked\"></i>radio-button-checked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio-button-unchecked\"></i>radio-button-unchecked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rate-review\"></i>rate-review</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-receipt\"></i>receipt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-recent-actors\"></i>recent-actors</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-record-voice-over\"></i>record-voice-over</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-redeem\"></i>redeem</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-redo\"></i>redo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-refresh\"></i>refresh</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove\"></i>remove</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-circle\"></i>remove-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-circle-outline\"></i>remove-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-from-queue\"></i>remove-from-queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-red-eye\"></i>remove-red-eye</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-shopping-cart\"></i>remove-shopping-cart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reorder\"></i>reorder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-repeat\"></i>repeat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-repeat-one\"></i>repeat-one</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay\"></i>replay</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-10\"></i>replay-10</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-30\"></i>replay-30</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-5\"></i>replay-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reply\"></i>reply</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reply-all\"></i>reply-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-report\"></i>report</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-report-problem\"></i>report-problem</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restaurant\"></i>restaurant</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restaurant-menu\"></i>restaurant-menu</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restore\"></i>restore</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restore-page\"></i>restore-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ring-volume\"></i>ring-volume</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-room\"></i>room</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-room-service\"></i>room-service</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-90-degrees-ccw\"></i>rotate-90-degrees-ccw</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-left\"></i>rotate-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-right\"></i>rotate-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rounded-corner\"></i>rounded-corner</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-router\"></i>router</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rowing\"></i>rowing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rss-feed\"></i>rss-feed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rv-hookup\"></i>rv-hookup</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-satellite\"></i>satellite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-save\"></i>save</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-scanner\"></i>scanner</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-schedule\"></i>schedule</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-school\"></i>school</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-landscape\"></i>screen-lock-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-portrait\"></i>screen-lock-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-rotation\"></i>screen-lock-rotation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-rotation\"></i>screen-rotation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-share\"></i>screen-share</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sd-card\"></i>sd-card</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sd-storage\"></i>sd-storage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-search\"></i>search</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-security\"></i>security</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-select-all\"></i>select-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-send\"></i>send</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-dissatisfied\"></i>sentiment-dissatisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-neutral\"></i>sentiment-neutral</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-satisfied\"></i>sentiment-satisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-very-dissatisfied\"></i>sentiment-very-dissatisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-very-satisfied\"></i>sentiment-very-satisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings\"></i>settings</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-applications\"></i>settings-applications</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-backup-restore\"></i>settings-backup-restore</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-bluetooth\"></i>settings-bluetooth</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-brightness\"></i>settings-brightness</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-cell\"></i>settings-cell</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-ethernet\"></i>settings-ethernet</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-antenna\"></i>settings-input-antenna</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-component\"></i>settings-input-component</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-composite\"></i>settings-input-composite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-hdmi\"></i>settings-input-hdmi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-svideo\"></i>settings-input-svideo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-overscan\"></i>settings-overscan</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-phone\"></i>settings-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-power\"></i>settings-power</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-remote\"></i>settings-remote</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-system-daydream\"></i>settings-system-daydream</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-voice\"></i>settings-voice</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-share\"></i>share</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shop\"></i>shop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shop-two\"></i>shop-two</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shopping-basket\"></i>shopping-basket</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shopping-cart\"></i>shopping-cart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-short-text\"></i>short-text</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-show-chart\"></i>show-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shuffle\"></i>shuffle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-4-bar\"></i>signal-cellular-4-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-connected-no-internet-4-bar\"></i>signal-cellular-connected-no-internet-4-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-no-sim\"></i>signal-cellular-no-sim</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-null\"></i>signal-cellular-null</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-off\"></i>signal-cellular-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-4-bar\"></i>signal-wifi-4-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-4-bar-lock\"></i>signal-wifi-4-bar-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-off\"></i>signal-wifi-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sim-card\"></i>sim-card</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sim-card-alert\"></i>sim-card-alert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-skip-next\"></i>skip-next</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-skip-previous\"></i>skip-previous</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-slideshow\"></i>slideshow</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-slow-motion-video\"></i>slow-motion-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smartphone\"></i>smartphone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smoke-free\"></i>smoke-free</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smoking-rooms\"></i>smoking-rooms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sms\"></i>sms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sms-failed\"></i>sms-failed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-snooze\"></i>snooze</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sort\"></i>sort</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sort-by-alpha\"></i>sort-by-alpha</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-spa\"></i>spa</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-space-bar\"></i>space-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker\"></i>speaker</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-group\"></i>speaker-group</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-notes\"></i>speaker-notes</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-notes-off\"></i>speaker-notes-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-phone\"></i>speaker-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-spellcheck\"></i>spellcheck</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star\"></i>star</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star-border\"></i>star-border</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star-half\"></i>star-half</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stars\"></i>stars</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-current-landscape\"></i>stay-current-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-current-portrait\"></i>stay-current-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-primary-landscape\"></i>stay-primary-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-primary-portrait\"></i>stay-primary-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stop\"></i>stop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stop-screen-share\"></i>stop-screen-share</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-storage\"></i>storage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-store\"></i>store</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-store-mall-directory\"></i>store-mall-directory</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-straighten\"></i>straighten</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-streetview\"></i>streetview</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-strikethrough-s\"></i>strikethrough-s</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-style\"></i>style</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subdirectory-arrow-left\"></i>subdirectory-arrow-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subdirectory-arrow-right\"></i>subdirectory-arrow-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subject\"></i>subject</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subscriptions\"></i>subscriptions</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subtitles\"></i>subtitles</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subway\"></i>subway</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-supervisor-account\"></i>supervisor-account</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-surround-sound\"></i>surround-sound</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-calls\"></i>swap-calls</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-horiz\"></i>swap-horiz</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-vert\"></i>swap-vert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-vertical-circle\"></i>swap-vertical-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-switch-camera\"></i>switch-camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-switch-video\"></i>switch-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync\"></i>sync</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync-disabled\"></i>sync-disabled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync-problem\"></i>sync-problem</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-system-update\"></i>system-update</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-system-update-alt\"></i>system-update-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tab\"></i>tab</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tab-unselected\"></i>tab-unselected</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet\"></i>tablet</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet-android\"></i>tablet-android</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet-mac\"></i>tablet-mac</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tag-faces\"></i>tag-faces</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tap-and-play\"></i>tap-and-play</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-terrain\"></i>terrain</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-text-fields\"></i>text-fields</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-text-format\"></i>text-format</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-textsms\"></i>textsms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-texture\"></i>texture</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-theaters\"></i>theaters</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumb-down\"></i>thumb-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumb-up\"></i>thumb-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumbs-up-down\"></i>thumbs-up-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-time-to-leave\"></i>time-to-leave</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timelapse\"></i>timelapse</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timeline\"></i>timeline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer\"></i>timer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-10\"></i>timer-10</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-3\"></i>timer-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-off\"></i>timer-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-title\"></i>title</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toc\"></i>toc</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-today\"></i>today</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toll\"></i>toll</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tonality\"></i>tonality</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-touch-app\"></i>touch-app</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toys\"></i>toys</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-track-changes\"></i>track-changes</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-traffic\"></i>traffic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-train\"></i>train</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tram\"></i>tram</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-transfer-within-a-station\"></i>transfer-within-a-station</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-transform\"></i>transform</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-translate\"></i>translate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-down\"></i>trending-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-flat\"></i>trending-flat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-up\"></i>trending-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tune\"></i>tune</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-turned-in\"></i>turned-in</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-turned-in-not\"></i>turned-in-not</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tv\"></i>tv</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unarchive\"></i>unarchive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-undo\"></i>undo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unfold-less\"></i>unfold-less</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unfold-more\"></i>unfold-more</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-update\"></i>update</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-usb\"></i>usb</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-verified-user\"></i>verified-user</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-bottom\"></i>vertical-align-bottom</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-center\"></i>vertical-align-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-top\"></i>vertical-align-top</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vibration\"></i>vibration</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-call\"></i>video-call</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-label\"></i>video-label</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-library\"></i>video-library</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videocam\"></i>videocam</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videocam-off\"></i>videocam-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videogame-asset\"></i>videogame-asset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-agenda\"></i>view-agenda</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-array\"></i>view-array</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-carousel\"></i>view-carousel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-column\"></i>view-column</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-comfy\"></i>view-comfy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-compact\"></i>view-compact</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-day\"></i>view-day</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-headline\"></i>view-headline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-list\"></i>view-list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-module\"></i>view-module</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-quilt\"></i>view-quilt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-stream\"></i>view-stream</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-week\"></i>view-week</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vignette\"></i>vignette</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-visibility\"></i>visibility</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-visibility-off\"></i>visibility-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-voice-chat\"></i>voice-chat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-voicemail\"></i>voicemail</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-down\"></i>volume-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-mute\"></i>volume-mute</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-off\"></i>volume-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-up\"></i>volume-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vpn-key\"></i>vpn-key</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vpn-lock\"></i>vpn-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wallpaper\"></i>wallpaper</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-warning\"></i>warning</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-watch\"></i>watch</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-watch-later\"></i>watch-later</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-auto\"></i>wb-auto</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-cloudy\"></i>wb-cloudy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-incandescent\"></i>wb-incandescent</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-iridescent\"></i>wb-iridescent</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-sunny\"></i>wb-sunny</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wc\"></i>wc</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-web\"></i>web</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-web-asset\"></i>web-asset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-weekend\"></i>weekend</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-whatshot\"></i>whatshot</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-widgets\"></i>widgets</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi\"></i>wifi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi-lock\"></i>wifi-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi-tethering\"></i>wifi-tethering</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-work\"></i>work</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wrap-text\"></i>wrap-text</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-youtube-searched-for\"></i>youtube-searched-for</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-in\"></i>zoom-in</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-out\"></i>zoom-out</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-out-map\"></i>zoom-out-map</div>\n                </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/view/utilsdemo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/view/utilsdemo.component.ts ***!
  \**************************************************/
/*! exports provided: UtilsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsDemoComponent", function() { return UtilsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsDemoComponent = /** @class */ (function () {
    function UtilsDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Utilities' }
        ]);
    }
    UtilsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./utilsdemo.component.html */ "./src/app/demo/view/utilsdemo.component.html"),
            styles: ["\n        .icon-grid div.ui-g-12 {\n            color: #757575;\n            text-align: center;\n            padding: 16px;\n            font-size: 12px;\n        }\n\n        .icon-grid i {\n            display: block;\n            margin: 0 auto;\n            font-size: 24px;\n        }\n\n        pre {\n            font-family: monospace;\n            background-color: #0C2238;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .shadow-box {\n            background-color: #607D8B;\n            width: 100px;\n            height: 100px;\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]])
    ], UtilsDemoComponent);
    return UtilsDemoComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route) {
        var _this = this;
        this.route = route;
        route.events.subscribe(function (val) {
            _this.hidecomp();
        });
        /*
     
       route.events.subscribe((val) => {
   
         if((localStorage.getItem('login').toString())=='true'){
             setTimeout(() => {
              route.navigate(['/dashboard']);
         }, 5);
         }else  if((localStorage.getItem('login').toString())=='false'){
             setTimeout(() => {
              
                 this.hidecomp();
             }, 5);
         
         }
     
     });
   */
    }
    LoginComponent.prototype.OnInit = function () {
    };
    LoginComponent.prototype.hidecomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.add("hidden");
        element = document.getElementById("crumb");
        element.classList.add("hidden");
        element = document.getElementById("footer");
        element.classList.add("hidden");
        element = document.getElementById("loginfrm");
        element.classList.remove("hidden");
    };
    LoginComponent.prototype.showcomp = function () {
        var element = document.getElementById("rightpanel");
        element.classList.remove("hidden");
        element = document.getElementById("crumb");
        element.classList.remove("hidden");
        element = document.getElementById("footer");
        element.classList.remove("hidden");
        element = document.getElementById("loginfrm");
        element.classList.add("hidden");
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.scss */ "./src/app/login/login.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.scss":
/*!**********************************!*\
  !*** ./src/app/login/login.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mycomponents/books/books.html":
/*!***********************************************!*\
  !*** ./src/app/mycomponents/books/books.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<p-messages [value]=\"msgs\"></p-messages>\r\n\r\n\r\n<p-table  #dt [columns]=\"cols\" [value]=\"appointments\" [paginator]=\"true\" [rows]=\"10\" \r\n>\r\n\r\n        <ng-template pTemplate=\"caption\" let-columns>\r\n            قائمة الحجوزات\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"ابحث هنا...\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\r\n                    style=\"width:auto\">\r\n            </div>\r\n           \r\n\r\n        </ng-template>\r\n    \r\n        <ng-template pTemplate=\"header\"  let-columns>\r\n            <tr>\r\n     <!--\r\n                    <th style=\"width: 3em\">\r\n                       \r\n                            <p-tableHeaderCheckbox>\r\n\r\n                            </p-tableHeaderCheckbox>\r\n                          \r\n                        </th>\r\n                          -->\r\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                    {{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n    \r\n                </th>\r\n    \r\n             \r\n    \r\n                <th>إلغاء الحجز</th>\r\n\r\n                <th>تأكيد الحجز</th>\r\n            </tr>\r\n    \r\n       \r\n    \r\n        </ng-template>\r\n    \r\n        <ng-template pTemplate=\"body\" let-rowData let-appointments>\r\n            <tr  [pSelectableRow]=\"rowData\">\r\n    \r\n                <!--\r\n                <td>\r\n                    <p-tableCheckbox   (click)=\"onFilterChange($event)\" [value]=\"rowData\"></p-tableCheckbox>\r\n                </td>\r\n\r\n                -->\r\n\r\n                <td >\r\n                   {{appointments.id}}\r\n                </td>\r\n    \r\n                <td >\r\n                        {{appointments.name}}\r\n                     </td>\r\n\r\n                     <td >\r\n                            {{appointments.email}}\r\n                         </td>\r\n                         \r\n                         <td>\r\n                                {{appointments.phone}}\r\n                             </td>\r\n                             <td >\r\n                                    <ng-template [ngIf]=\"appointments.time\"> {{ appointments.time * 1000 | date:'dd/MM/yyyy' }}</ng-template>\r\n       \r\n                                 </td>\r\n                                 <td >\r\n                                        <ng-template [ngIf]=\"appointments.time\"> {{ (appointments.time * 1000 ) | date:'HH:mm ':'-000' }}</ng-template>\r\n       \r\n                                     </td>\r\n                                   \r\n                         <td >\r\n                                <ng-template [ngIf]=\"appointments.service_id == 17\">د.حامد سليمان الأحمدي</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 18\">د. عبدالله محمد الدرديري</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 19\">د. محمد الشاذلي</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 20\">د. خالد حسام الدين</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 21\">د. عبد الله بخارى</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 22\">د. أحمد عنان</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 23\">د. سعاد بخاري</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 24\">د. محمد يوسف</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 25\">د. عبدالمنعم فضل الله</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 26\">د. ياسر تعلب</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 27\">د. هبة السيد</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 28\">د. حواء نور</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 29\">د. رحاب سيف اليزل</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 30\">د. فهد المطيري</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 31\">د. محمد لطفي</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 32\">د. أميرة أبو العنين</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 33\">د. عاصم عبد الواحد</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 34\">د. أمل إبراهيم</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 35\">د. يسرية محمود</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 36\">د. شيماء عبد الهادي</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 37\">د. فوزية بسيوني</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 38\">د. إبراهيم الحندليشي</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 39\">د. محمد حلبية</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 40\">د. جميل ميرزا</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 41\">د. مصطفى عفيف</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 42\">د. صالح خواجة</ng-template>\r\n                                <ng-template [ngIf]=\"appointments.service_id == 43\">د. فوزي أبو زيد</ng-template>\r\n                         \r\n                             </td>\r\n<td>\r\n        <ng-template [ngIf]=\"appointments.service_id == 17\">Ophthalmology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 18\">Surgery</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 19\">Urology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 20\">Cardiology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 21\">Pediatric</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 22\">Ophthalmology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 23\">Pediatric</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 24\">Orthopaedic</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 25\">Internal Medicine</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 26\">Endoscopy</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 27\">Dermatology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 28\">Physical Therapy</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 29\">Dental</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 30\">Physical Therapy</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 31\">Physical Therapy</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 32\">Nutrition And Dietary</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 33\">ENT</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 34\">Obstetric / Gyne</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 35\">Obstetric / Gyne</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 36\">Obstetric / Gyne</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 37\">Obstetric / Gyne</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 38\">Obstetric / Gyne</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 39\">Ophthalmology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 40\">Ophthalmology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 41\">Urology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 42\">Dermatology</ng-template>\r\n              <ng-template [ngIf]=\"appointments.service_id == 43\">Pediatric</ng-template>\r\n         \r\n\r\n</td>\r\n                             <td>\r\n                                    <ng-template [ngIf]=\"appointments.description == '' \">ـــــــــــــــــ</ng-template>\r\n                                    <ng-template [ngIf]=\"appointments.description != '' \"> {{appointments.description}}</ng-template>\r\n                                   \r\n                             </td>\r\n                             <td >\r\n                                    <ng-template [ngIf]=\"appointments.payed == 1\"><i style=\"color:green;font-size: 22px;\" class=\"fa fa-check\"></i> مؤكد </ng-template>\r\n                                    <ng-template [ngIf]=\"appointments.payed == 0\"><i style=\"color:red;font-size: 22px;\" class=\"fa fa-times\"></i> غير مؤكد </ng-template>\r\n                         \r\n                                 </td>\r\n\r\n                              <td>\r\n\r\n                                 \r\n                                  <button (click)=\"confirm(appointments.id)\"\r\n                                   pButton type=\"button\" label=\"إلغاء الحجز\" icon=\"pi pi-times\" class=\"ui-button-danger\" style=\"margin-right: .25em\"></button>\r\n                                </td>\r\n                              <td>\r\n\r\n                                    <ng-template [ngIf]=\"appointments.payed == 0\">\r\n                                        \r\n                                            <button (click)=\"okapp(appointments.id)\" \r\n                                            class=\"btn btn-primary\"> تأكيد الحجز </button>\r\n                                            \r\n                                    </ng-template>\r\n                         \r\n                                \r\n                                \r\n                                </td>\r\n                \r\n            </tr>\r\n        </ng-template>\r\n    \r\n    \r\n        <ng-template pTemplate=\"summary\">\r\n            يوجد {{appointments?.length}} حجز\r\n\r\n            <!--\r\n            <br>\r\n            <ul  *ngFor=\"let app of appointments;let i = index;\" style=\"text-align: right;\">\r\n                    \r\n                <ng-template [ngIf]=\"app.payed==1\">\r\n                        <li > {{i+1}} -  {{app.name}}</li>\r\n                </ng-template>\r\n              \r\n            </ul>\r\n            -->\r\n        </ng-template>\r\n    \r\n    </p-table>\r\n    \r\n    \r\n  \r\n    <p-confirmDialog></p-confirmDialog>\r\n\r\n\r\n    <iframe style=\"visibility: hidden;\"  id=\"hid\" id=\"iframe1\" width=\"100%\" height=\"100%\" [src]=\"myurl\" frameborder=\"5\" allowfullscreen></iframe>\r\n    "

/***/ }),

/***/ "./src/app/mycomponents/books/books.scss":
/*!***********************************************!*\
  !*** ./src/app/mycomponents/books/books.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  color: blue; }\n\n.ui-dataview-layout-options .ui-button {\n  margin-left: .5em; }\n\n.ui-dataview .filter-container {\n  text-align: center; }\n\n@media (max-width: 40em) {\n  .ui-dataview .car-details, .ui-dataview .search-icon {\n    text-align: center;\n    margin-top: 0; }\n  .ui-dataview .filter-container {\n    text-align: left; }\n  .ui-dataview-layout-options.ui-buttonset > .ui-button {\n    margin-left: 0;\n    display: inline-block; }\n  .ui-dataview-layout-options.ui-buttonset > .ui-button:first-child {\n    border-radius: 50%; }\n  .ui-dataview-layout-options.ui-buttonset > .ui-button:last-child {\n    border-radius: 50%; }\n  #hid {\n    visibility: hidden; } }\n"

/***/ }),

/***/ "./src/app/mycomponents/books/books.ts":
/*!*********************************************!*\
  !*** ./src/app/mycomponents/books/books.ts ***!
  \*********************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _demo_service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../demo/service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../demo/service/eventservice */ "./src/app/demo/service/eventservice.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
/* harmony import */ var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../demo/service/nodeservice */ "./src/app/demo/service/nodeservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _demo_service_myservices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../demo/service/myservices */ "./src/app/demo/service/myservices.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BooksComponent = /** @class */ (function () {
    function BooksComponent(carService, eventService, nodeService, breadcrumbService, db, router, myserv, confirmationService2, sanitizer) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.db = db;
        this.router = router;
        this.myserv = myserv;
        this.confirmationService2 = confirmationService2;
        this.sanitizer = sanitizer;
        this.myurl = "";
        this.msgs = [];
        this.filter = false;
        this.breadcrumbService.setItems([
            { label: 'الحجوزات' },
        ]);
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cols = [
            { field: 'id', header: 'الكود' },
            { field: 'name', header: 'الاسم' },
            { field: 'email', header: 'الإيميل' },
            { field: 'phone', header: 'الرقم' },
            { field: 'day', header: 'التاريخ' },
            { field: 'time', header: 'التوقيت' },
            { field: 'service_id', header: 'الدكتور' },
            { field: 'service_id2', header: 'العيادة' },
            { field: 'description', header: 'ملاحظات' },
            { field: 'payed', header: 'مؤكد' },
        ];
        /*
        this.appointments.forEach(element => {
                console.log('myarray='+element);
        });
         */
    };
    BooksComponent.prototype.onFilterChange = function (event) {
        this.filter = !this.filter;
        //  alert(this.filter);
        if (this.filter == true) {
            // console.log(this.appointments);
        }
    };
    BooksComponent.prototype.okapp = function (val) {
        var _this = this;
        this.confirmationService2.confirm({
            message: 'هل تود تأكيد الحجز رقم: « ' + val + "  » حقا ?  ",
            header: 'تأكيد الحجز رقم ' + val,
            acceptLabel: 'نعم',
            rejectLabel: 'لا',
            accept: function () {
                _this.myurl = _this.sanitizer.bypassSecurityTrustResourceUrl("http://wordpress-107138-442964.cloudwaysapps.com/booking/update.php?id=" +
                    val);
                _this.msgs.push({ severity: 'success', detail: 'تم تأكيد الحجز بنجاح' });
                setTimeout(function () {
                    _this.msgs = [];
                    _this.loadData();
                }, 700);
            },
        });
    };
    BooksComponent.prototype.confirm = function (val) {
        var _this = this;
        //  alert(val);
        this.confirmationService2.confirm({
            message: 'هل تود إلغاء الحجز رقم: « ' + val + "  » حقا ?  ",
            header: 'حذف الحجز رقم ' + val,
            acceptLabel: 'نعم',
            rejectLabel: 'لا',
            accept: function () {
                _this.myurl = _this.sanitizer.bypassSecurityTrustResourceUrl("http://wordpress-107138-442964.cloudwaysapps.com/booking/del_reserve.php?id=" +
                    val);
                _this.msgs.push({ severity: 'error', detail: 'تم الحذف بنجاح' });
                setTimeout(function () {
                    _this.msgs = [];
                    _this.loadData();
                }, 700);
            },
        });
    };
    BooksComponent.prototype.loadData = function () {
        var _this = this;
        this.myserv.getAppointments().subscribe(function (data) {
            _this.appointments = data['appointments'];
            console.log(data['appointments']);
        });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./books.html */ "./src/app/mycomponents/books/books.html"),
            styles: [__webpack_require__(/*! ./books.scss */ "./src/app/mycomponents/books/books.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [_demo_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"],
            _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_5__["NodeService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _demo_service_myservices__WEBPACK_IMPORTED_MODULE_8__["myservicesService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/mycomponents/home/home.html":
/*!*********************************************!*\
  !*** ./src/app/mycomponents/home/home.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "home"

/***/ }),

/***/ "./src/app/mycomponents/home/home.scss":
/*!*********************************************!*\
  !*** ./src/app/mycomponents/home/home.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mycomponents/home/home.ts":
/*!*******************************************!*\
  !*** ./src/app/mycomponents/home/home.ts ***!
  \*******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["SLIM"] = 2] = "SLIM";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 3] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
var HomeComponent = /** @class */ (function () {
    function HomeComponent(renderer2, zone) {
        this.renderer2 = renderer2;
        this.zone = zone;
        this.layoutCompact = true;
        this.layoutMode = MenuOrientation.STATIC;
        this.darkMenu = false;
        this.profileMode = 'inline';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { _this.bindRipple(); });
    };
    HomeComponent.prototype.bindRipple = function () {
        this.rippleInitListener = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.rippleInitListener);
    };
    HomeComponent.prototype.init = function () {
        this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
        document.addEventListener('mousedown', this.rippleMouseDownListener, false);
    };
    HomeComponent.prototype.rippleMouseDown = function (e) {
        for (var target = e.target; target && target !== this; target = target['parentNode']) {
            if (!this.isVisible(target)) {
                continue;
            }
            // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
            if (this.selectorMatches(target, '.ripplelink, .ui-button')) {
                var element = target;
                this.rippleEffect(element, e);
                break;
            }
        }
    };
    HomeComponent.prototype.selectorMatches = function (el, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p['webkitMatchesSelector'] || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
    };
    HomeComponent.prototype.isVisible = function (el) {
        return !!(el.offsetWidth || el.offsetHeight);
    };
    HomeComponent.prototype.rippleEffect = function (element, e) {
        if (element.querySelector('.ink') === null) {
            var inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');
            if (this.hasClass(element, 'ripplelink') && element.querySelector('span')) {
                element.querySelector('span').insertAdjacentHTML('afterend', '<span class=\'ink\'></span>');
            }
            else {
                element.appendChild(inkEl);
            }
        }
        var ink = element.querySelector('.ink');
        this.removeClass(ink, 'ripple-animate');
        if (!ink.offsetHeight && !ink.offsetWidth) {
            var d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        var x = e.pageX - this.getOffset(element).left - (ink.offsetWidth / 2);
        var y = e.pageY - this.getOffset(element).top - (ink.offsetHeight / 2);
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none';
        this.addClass(ink, 'ripple-animate');
    };
    HomeComponent.prototype.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    };
    HomeComponent.prototype.addClass = function (element, className) {
        if (element.classList) {
            element.classList.add(className);
        }
        else {
            element.className += ' ' + className;
        }
    };
    HomeComponent.prototype.removeClass = function (element, className) {
        if (element.classList) {
            element.classList.remove(className);
        }
        else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    HomeComponent.prototype.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    };
    HomeComponent.prototype.unbindRipple = function () {
        if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
        }
        if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = this.layourContainerViewChild.nativeElement;
        setTimeout(function () { _this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    };
    HomeComponent.prototype.onLayoutClick = function () {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.resetMenu = true;
            }
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }
            this.menuHoverActive = false;
        }
        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
    };
    HomeComponent.prototype.onMenuButtonClick = function (event) {
        this.menuClick = true;
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }
        }
        event.preventDefault();
    };
    HomeComponent.prototype.onMenuClick = function ($event) {
        this.menuClick = true;
        this.resetMenu = false;
    };
    HomeComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        this.hideOverlayMenu();
        event.preventDefault();
    };
    HomeComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    HomeComponent.prototype.onTopbarSubItemClick = function (event) {
        event.preventDefault();
    };
    HomeComponent.prototype.onRightPanelButtonClick = function (event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    };
    HomeComponent.prototype.onRightPanelClick = function () {
        this.rightPanelClick = true;
    };
    HomeComponent.prototype.hideOverlayMenu = function () {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    };
    HomeComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    HomeComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    HomeComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    HomeComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    HomeComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    HomeComponent.prototype.isSlim = function () {
        return this.layoutMode === MenuOrientation.SLIM;
    };
    HomeComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    HomeComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    HomeComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    HomeComponent.prototype.changeToSlimMenu = function () {
        this.layoutMode = MenuOrientation.SLIM;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.unbindRipple();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layoutContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "layourContainerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ScrollPanel"])
    ], HomeComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./home.html */ "./src/app/mycomponents/home/home.html"),
            styles: [__webpack_require__(/*! ./home.scss */ "./src/app/mycomponents/home/home.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mycomponents/news/news.html":
/*!*********************************************!*\
  !*** ./src/app/mycomponents/news/news.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\">\r\n<h3 style=\"float: right;color: blue;\">الأخبار والعروض</h3>\r\n\r\n\r\n<br><br><br>\r\n\r\n\r\n<button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-plus\" label=\"إضافة خبر جديد\"></button>\r\n\r\n\r\n<br>\r\n\r\n<br>\r\n\r\n\r\n<p-messages [value]=\"msgs\"></p-messages>\r\n\r\n<!--\r\n<div style=\"margin-right: 70px;\" class=\"container\">\r\n        <div class=\"row\">\r\n          <div *ngFor=\"let item of news | slice:fval:endval\" class=\"col-sm\">\r\n    -->     \r\n      <!--                          \r\n<p-card id=\"mycard\"  title=\"{{item.id}}\" subtitle=\"{{item.title}}\" [style]=\"{width: '360px'}\" styleClass=\"ui-card-shadow\">\r\n        <p-header>\r\n        -->\r\n         <!--   <img src=\"Card\" src=\"assets/showcase/images/usercard.png\"> -->\r\n      <!--  </p-header>\r\n      -->\r\n         \r\n      <div *ngFor=\"let item of news | slice:fval:endval\" >\r\n      <div class=\"content\" \r\n      [innerHTML]=\"item.datails | safeHtml\">\r\n    \r\n     \r\n      \r\n    </div>\r\n    <div>\r\n        <button (click)=\"showDialog2(item.id,item.title,item.datails)\" pButton type=\"button\" label=\"تعديل\" icon=\"pi pi-pencil\" class=\"ui-button-success\" style=\"margin-right: .25em\"></button>\r\n        <button (click)=\"confirm(item.id,item.title)\" pButton type=\"button\" label=\"حذف\" icon=\"pi pi-times\" class=\"ui-button-danger\" style=\"margin-right: .25em\"></button>\r\n  \r\n    </div>\r\n    </div>\r\n\r\n      <!--\r\n        <p-footer>\r\n            \r\n          <button (click)=\"showDialog2(item.id,item.title,item.datails)\" pButton type=\"button\" label=\"تعديل\" icon=\"pi pi-pencil\" class=\"ui-button-success\" style=\"margin-right: .25em\"></button>\r\n            <button (click)=\"confirm(item.id,item.title)\" pButton type=\"button\" label=\"حذف\" icon=\"pi pi-times\" class=\"ui-button-danger\" style=\"margin-right: .25em\"></button>\r\n        </p-footer>\r\n    </p-card>\r\n   \r\n          </div>\r\n       \r\n        </div>\r\n      </div>\r\n\r\n -->\r\n\r\n     \r\n\r\n\r\n<p-confirmDialog></p-confirmDialog>\r\n\r\n<br>\r\n\r\n<span \r\nstyle=\"font-size: 22px;color: blue;\r\nposition: relative; top: -32px;\r\nleft: 140px;;font-weight: bold;\">\r\n  {{pagenum}}</span>\r\n<button id=\"first\" (click)=\"first()\" style=\"float: right;margin-left: 10px;margin-right: 400px;\" class=\"btn btn-primary\">1</button>\r\n<button id=\"next\" (click)=\"next()\" style=\"float: right;margin-left: 10px;\" class=\"btn btn-success\">التالي</button>\r\n<button id=\"prev\" (click)=\"prev()\" style=\"float: right;margin-left: 10px;\" class=\"btn btn-danger\">السابق</button>\r\n<button id=\"last\" (click)=\"last()\" style=\"float: right;\" class=\"btn btn-secondary\">الأخير</button>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n\r\n</div>\r\n\r\n\r\n<p-dialog header=\"إضافة خبر جديد\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\" [minY]=\"70\" \r\n     >\r\n   \r\n     <input name=\"title\" id=\"title\" [(ngModel)]=\"title\" style=\"float:right;width:320px;\" type=\"text\" placeholder=\"عنوان الخبر\" />\r\n\r\n     <br><br>\r\n\r\n     <textarea name=\"det\" id=\"det\" [(ngModel)]=\"det\"  style=\"float:right;width:320px;\" [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"تفاصيل الخبر\" autoResize=\"autoResize\"></textarea>\r\n\r\n\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"addnew()\" label=\"إضافة\"></button>\r\n            <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display=false\" label=\"إلغاء\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n<p-dialog header=\"تعديل خبر\" [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\" [minY]=\"70\" \r\n     >\r\n   \r\n     <input name=\"title2\" id=\"title2\" [(ngModel)]=\"title2\" style=\"float:right;width:320px;\" type=\"text\" placeholder=\"عنوان الخبر\" />\r\n\r\n     <br><br>\r\n\r\n     <textarea name=\"det2\" id=\"det2\" [(ngModel)]=\"det2\"  style=\"float:right;width:320px;\" [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"تفاصيل الخبر\" autoResize=\"autoResize\"></textarea>\r\n\r\n\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"update()\" label=\"تعديل\"></button>\r\n            <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display2=false\" label=\"إلغاء\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n<iframe class=\"hidden\" id=\"iframe1\" width=\"100%\" height=\"100%\" [src]=\"myurl\" frameborder=\"5\" allowfullscreen></iframe>\r\n\r\n\r\n\r\n\r\n<div name=\"myedit\" id=\"myedit\" [(ngModel)]=\"myedit\" style=\"direction: rtl;text-align: right;\" [froalaEditor]=\"options\">\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<button (click)=\"savenews()\" class=\"btn btn-primary\"> حفظ الخبر </button>\r\n\r\n"

/***/ }),

/***/ "./src/app/mycomponents/news/news.scss":
/*!*********************************************!*\
  !*** ./src/app/mycomponents/news/news.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mycard {\n  width: 20%;\n  display: block;\n  float: right;\n  margin-top: 20px; }\n\n.hidden {\n  visibility: hidden; }\n"

/***/ }),

/***/ "./src/app/mycomponents/news/news.ts":
/*!*******************************************!*\
  !*** ./src/app/mycomponents/news/news.ts ***!
  \*******************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _demo_service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../demo/service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../demo/service/eventservice */ "./src/app/demo/service/eventservice.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
/* harmony import */ var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../demo/service/nodeservice */ "./src/app/demo/service/nodeservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _demo_service_myservices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../demo/service/myservices */ "./src/app/demo/service/myservices.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NewsComponent = /** @class */ (function () {
    function NewsComponent(carService, eventService, nodeService, breadcrumbService, db, router, myserv, confirmationService, sanitizer) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.db = db;
        this.router = router;
        this.myserv = myserv;
        this.confirmationService = confirmationService;
        this.sanitizer = sanitizer;
        this.myurl = "";
        this.msgs = [];
        this.title = '';
        this.det = '';
        this.fval = 0;
        this.endval = 1;
        this.pagenum = 1;
        this.countnum = 0;
        this.lastPage = 0;
        this.title2 = '';
        this.det2 = '';
        this.display = false;
        this.display2 = false;
        this.id2 = 0;
        this.myurl = this.sanitizer.bypassSecurityTrustResourceUrl('http://wordpress-107138-442964.cloudwaysapps.com/fcm/');
        this.breadcrumbService.setItems([
            { label: 'الأخبار والعروض' },
        ]);
    }
    NewsComponent.prototype.clear = function () {
        this.fval = 0;
        this.endval = 4;
        this.pagenum = 1;
    };
    NewsComponent.prototype.first = function () {
        if (this.pagenum != 1) {
            this.fval = 0;
            this.endval = 4;
            this.pagenum = 1;
        }
    };
    NewsComponent.prototype.next = function () {
        if (this.pagenum < this.lastPage) {
            this.fval += 1;
            this.endval += 1;
            this.pagenum += 1;
        }
    };
    NewsComponent.prototype.prev = function () {
        if (this.pagenum != 1) {
            this.fval -= 1;
            this.endval -= 1;
            this.pagenum -= 1;
        }
    };
    NewsComponent.prototype.last = function () {
        if (this.pagenum < this.lastPage) {
            this.fval = this.pagenum * 4;
            this.endval = (this.pagenum * 4) + 4;
            this.pagenum = this.lastPage;
        }
    };
    NewsComponent.prototype.confirm = function (val, name) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'هل تود حذف الخبر: « ' + name + "  » حقا ?  ",
            header: 'حذف الخبر رقم ' + val,
            acceptLabel: 'نعم',
            rejectLabel: 'لا',
            accept: function () {
                _this.myurl = _this.sanitizer.bypassSecurityTrustResourceUrl("http://wordpress-107138-442964.cloudwaysapps.com/news/del.php?id=" +
                    val);
                _this.msgs.push({ severity: 'error', detail: 'تم الحذف بنجاح' });
                setTimeout(function () {
                    _this.msgs = [];
                    _this.loadData();
                }, 700);
            },
        });
    };
    NewsComponent.prototype.addnew = function () {
        var _this = this;
        if (this.title == '') {
            this.msgs.push({ severity: 'error', detail: 'أدخل عنوان الخبر' });
            setTimeout(function () {
                _this.msgs = [];
            }, 700);
            return;
        }
        if (this.det == '') {
            this.msgs.push({ severity: 'error', detail: 'أدخل تفاصيل الخبر' });
            setTimeout(function () {
                _this.msgs = [];
            }, 700);
            return;
        }
        this.myurl = this.sanitizer.bypassSecurityTrustResourceUrl("http://wordpress-107138-442964.cloudwaysapps.com/news/news-add.php?title=" +
            this.title + " &&des=" + this.det);
        this.display = false;
        this.msgs.push({ severity: 'success', detail: 'تم إضافة الخبر بنجاح' });
        setTimeout(function () {
            _this.msgs = [];
            _this.loadData();
        }, 1000);
    };
    NewsComponent.prototype.showDialog = function () {
        this.display = true;
    };
    NewsComponent.prototype.showDialog2 = function (id, title, des) {
        this.title2 = title;
        this.det2 = des;
        this.id2 = id;
        this.display2 = true;
    };
    NewsComponent.prototype.update = function () {
        var _this = this;
        this.myurl = this.sanitizer.bypassSecurityTrustResourceUrl("http://wordpress-107138-442964.cloudwaysapps.com/news/update.php?id=" + this.id2 +
            " &&title=" +
            this.title2 + " &&des=" + this.det2);
        this.msgs.push({ severity: 'success', detail: 'تم تعديل الخبر بنجاح' });
        setTimeout(function () {
            _this.msgs = [];
            _this.loadData();
        }, 1000);
        this.display2 = false;
    };
    NewsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    NewsComponent.prototype.loadData = function () {
        var _this = this;
        this.title = '';
        this.det = '';
        this.myserv.getNews().subscribe(function (data) {
            _this.news = data['news'];
            console.log(data['news']);
            _this.countnum = data['news'].length;
            _this.lastPage = parseInt((_this.countnum / 1).toString()) + 1;
        });
        this.cols = [
            { field: 'id', header: 'الكود' },
            { field: 'name', header: 'الاسم' },
            { field: 'email', header: 'الإيميل' },
            { field: 'service_id', header: 'الحجز' },
            { field: 'payed', header: 'مؤكد' },
        ];
    };
    NewsComponent.prototype.deldata = function (id) {
        // alert(id);
    };
    NewsComponent.prototype.savenews = function () {
        alert(this.myedit);
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./news.html */ "./src/app/mycomponents/news/news.html"),
            styles: [__webpack_require__(/*! ./news.scss */ "./src/app/mycomponents/news/news.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_demo_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"],
            _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_4__["NodeService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _demo_service_myservices__WEBPACK_IMPORTED_MODULE_7__["myservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/mycomponents/notes/notes.html":
/*!***********************************************!*\
  !*** ./src/app/mycomponents/notes/notes.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\">\r\n    <h3 style=\"float: right;color: blue;\">التنبيهات</h3>\r\n    \r\n    \r\n    <br><br><br>\r\n    \r\n    \r\n    <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-plus\" label=\"إضافة تنبيه جديد\"></button>\r\n    \r\n    \r\n    <p-messages [value]=\"msgs\"></p-messages>\r\n    \r\n    <div style=\"margin-right: 70px;\" class=\"container\">\r\n            <div class=\"row\">\r\n              <div *ngFor=\"let item of notes | slice:fval:endval\" class=\"col-sm\">\r\n             \r\n                                    \r\n    <p-card id=\"mycard\"  title=\"{{item.id}}\" subtitle=\"{{item.title}}\" [style]=\"{width: '360px'}\" styleClass=\"ui-card-shadow\">\r\n            <p-header>\r\n\r\n               \r\n             <!--   <img src=\"Card\" src=\"assets/showcase/images/usercard.png\"> -->\r\n            </p-header>\r\n            <div>\r\n                <p> {{item.email}}</p>\r\n             <p>{{item.datails}}</p> \r\n            </div>\r\n            <p-footer>\r\n                \r\n                 <button (click)=\"confirm(item.id,item.title)\" pButton type=\"button\" label=\"حذف\" icon=\"pi pi-times\" class=\"ui-button-danger\" style=\"margin-right: .25em\"></button>\r\n            </p-footer>\r\n        </p-card>\r\n        \r\n              </div>\r\n           \r\n            </div>\r\n          </div>\r\n    \r\n    \r\n    \r\n         \r\n    \r\n    \r\n    <p-confirmDialog></p-confirmDialog>\r\n    \r\n    <br>\r\n    \r\n    <span \r\n    style=\"font-size: 22px;color: blue;\r\n    position: relative; top: -32px;\r\n    left: 140px;;font-weight: bold;\">\r\n      {{pagenum}}</span>\r\n    <button id=\"first\" (click)=\"first()\" style=\"float: right;margin-left: 10px;margin-right: 400px;\" class=\"btn btn-primary\">1</button>\r\n    <button id=\"next\" (click)=\"next()\" style=\"float: right;margin-left: 10px;\" class=\"btn btn-success\">التالي</button>\r\n    <button id=\"prev\" (click)=\"prev()\" style=\"float: right;margin-left: 10px;\" class=\"btn btn-danger\">السابق</button>\r\n    <button id=\"last\" (click)=\"last()\" style=\"float: right;\" class=\"btn btn-secondary\">الأخير</button>\r\n    \r\n    <br>\r\n    <br>\r\n    <br>\r\n    \r\n    </div>\r\n    \r\n    \r\n    <p-dialog header=\"إضافة تنبيه جديد\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\" [minY]=\"70\" \r\n         >\r\n       \r\n         <input name=\"title\" id=\"title\" [(ngModel)]=\"title\" style=\"float:right;width:320px;\" type=\"text\" placeholder=\"عنوان التنبيه\" />\r\n    \r\n         <br><br>\r\n    \r\n         <textarea name=\"det\" id=\"det\" [(ngModel)]=\"det\"  style=\"float:right;width:320px;\" [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"تفاصيل التنبيه\" autoResize=\"autoResize\"></textarea>\r\n    \r\n    \r\n            <p-footer>\r\n                <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"addnew()\" label=\"إضافة\"></button>\r\n                <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display=false\" label=\"إلغاء\" class=\"ui-button-secondary\"></button>\r\n            </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n    \r\n    <p-dialog header=\"تعديل تنبيه\" [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\" [minY]=\"70\" \r\n         >\r\n       \r\n         <input name=\"title2\" id=\"title2\" [(ngModel)]=\"title2\" style=\"float:right;width:320px;\" type=\"text\" placeholder=\"عنوان التنبيه\" />\r\n    \r\n         <br><br>\r\n    \r\n         <textarea name=\"det2\" id=\"det2\" [(ngModel)]=\"det2\"  style=\"float:right;width:320px;\" [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"تفاصيل التنبيه\" autoResize=\"autoResize\"></textarea>\r\n    \r\n    \r\n            <p-footer>\r\n                <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"update()\" label=\"تعديل\"></button>\r\n                <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display2=false\" label=\"إلغاء\" class=\"ui-button-secondary\"></button>\r\n            </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n    \r\n    <iframe class=\"hidden\" id=\"iframe1\" width=\"100%\" height=\"100%\" [src]=\"myurl\" frameborder=\"5\" allowfullscreen></iframe>\r\n    "

/***/ }),

/***/ "./src/app/mycomponents/notes/notes.scss":
/*!***********************************************!*\
  !*** ./src/app/mycomponents/notes/notes.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mycard {\n  width: 20%;\n  display: block;\n  float: right;\n  margin-top: 20px; }\n\n.hidden {\n  visibility: hidden; }\n"

/***/ }),

/***/ "./src/app/mycomponents/notes/notes.ts":
/*!*********************************************!*\
  !*** ./src/app/mycomponents/notes/notes.ts ***!
  \*********************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _demo_service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../demo/service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../demo/service/eventservice */ "./src/app/demo/service/eventservice.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
/* harmony import */ var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../demo/service/nodeservice */ "./src/app/demo/service/nodeservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _demo_service_myservices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../demo/service/myservices */ "./src/app/demo/service/myservices.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NotesComponent = /** @class */ (function () {
    function NotesComponent(carService, eventService, nodeService, breadcrumbService, db, router, myserv, confirmationService, sanitizer, route) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.db = db;
        this.router = router;
        this.myserv = myserv;
        this.confirmationService = confirmationService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.myurl = "";
        this.msgs = [];
        this.title = '';
        this.det = '';
        this.fval = 0;
        this.endval = 4;
        this.pagenum = 1;
        this.countnum = 0;
        this.lastPage = 0;
        this.title2 = '';
        this.det2 = '';
        this.display = false;
        this.display2 = false;
        this.id2 = 0;
        this.myurl = this.sanitizer.bypassSecurityTrustResourceUrl('http://dhsahospital.com/fcm/');
        this.breadcrumbService.setItems([
            { label: ' التنبيهات ' },
        ]);
    }
    NotesComponent.prototype.clear = function () {
        this.fval = 0;
        this.endval = 4;
        this.pagenum = 1;
    };
    NotesComponent.prototype.first = function () {
        if (this.pagenum != 1) {
            this.fval = 0;
            this.endval = 4;
            this.pagenum = 1;
        }
    };
    NotesComponent.prototype.next = function () {
        if (this.pagenum < this.lastPage) {
            this.fval += 4;
            this.endval += 4;
            this.pagenum += 1;
        }
    };
    NotesComponent.prototype.prev = function () {
        if (this.pagenum != 1) {
            this.fval -= 4;
            this.endval -= 4;
            this.pagenum -= 1;
        }
    };
    NotesComponent.prototype.last = function () {
        if (this.pagenum < this.lastPage) {
            this.fval = this.pagenum * 4;
            this.endval = (this.pagenum * 4) + 4;
            this.pagenum = this.lastPage;
        }
    };
    NotesComponent.prototype.confirm = function (val, name) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'هل تود حذف التنبيه: « ' + name + "  » حقا ?  ",
            header: 'حذف التنبيه رقم ' + val,
            acceptLabel: 'نعم',
            rejectLabel: 'لا',
            accept: function () {
                _this.myurl = _this.sanitizer.bypassSecurityTrustResourceUrl("http://dhsahospital.com/fcm/del.php?id=" +
                    val);
                _this.msgs.push({ severity: 'error', detail: 'تم الحذف بنجاح' });
                setTimeout(function () {
                    _this.msgs = [];
                    _this.loadData();
                }, 700);
            },
        });
    };
    NotesComponent.prototype.addnew = function () {
        var _this = this;
        if (this.title == '') {
            this.msgs.push({ severity: 'error', detail: 'أدخل عنوان التنبيه' });
            setTimeout(function () {
                _this.msgs = [];
            }, 700);
            return;
        }
        if (this.det == '') {
            this.msgs.push({ severity: 'error', detail: 'أدخل تفاصيل التنبيه' });
            setTimeout(function () {
                _this.msgs = [];
            }, 700);
            return;
        }
        this.myurl = this.sanitizer.bypassSecurityTrustResourceUrl("http://dhsahospital.com/fcm/test.php?id=" + this.idemail
            + "&&title=" +
            this.title + " &&msg=" + this.det + "&&email=" + this.idemail);
        this.display = false;
        this.msgs.push({ severity: 'success', detail: 'تم إرسال التنبيه بنجاح' });
        setTimeout(function () {
            _this.msgs = [];
            _this.loadData();
        }, 3000);
        this.loadData;
    };
    NotesComponent.prototype.showDialog = function () {
        var _this = this;
        if (this.idemail != "0") {
            this.display = true;
        }
        else {
            this.display = false;
            this.msgs.push({ severity: 'error', detail: 'اختر مستخدم أولا قبل إرسال تنبيه' });
            setTimeout(function () {
                _this.msgs = [];
                _this.router.navigate(['/users']);
            }, 1500);
        }
    };
    NotesComponent.prototype.showDialog2 = function (id, title, des) {
        this.title2 = title;
        this.det2 = des;
        this.id2 = id;
        this.display2 = true;
    };
    NotesComponent.prototype.update = function () {
        var _this = this;
        this.myurl = this.sanitizer.bypassSecurityTrustResourceUrl("http://dhsahospital.com/notes/update.php?id=" + this.id2 +
            " &&title=" +
            this.title2 + " &&des=" + this.det2);
        this.msgs.push({ severity: 'success', detail: 'تم تعديل التنبيه بنجاح' });
        setTimeout(function () {
            _this.msgs = [];
            _this.loadData();
        }, 1000);
        this.display2 = false;
    };
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            //  alert(params['id']);
            _this.idemail = params['id'];
        });
        this.loadData();
    };
    NotesComponent.prototype.loadData = function () {
        var _this = this;
        this.title = '';
        this.det = '';
        this.myserv.getNotify().subscribe(function (data) {
            _this.notes = data['notes'];
            console.log(data['notes']);
            _this.countnum = data['notes'].length;
            _this.lastPage = parseInt((_this.countnum / 4).toString()) + 1;
        });
        this.cols = [
            { field: 'id', header: 'الكود' },
            { field: 'name', header: 'الاسم' },
            { field: 'email', header: 'الإيميل' },
            { field: 'service_id', header: 'الحجز' },
            { field: 'payed', header: 'مؤكد' },
        ];
    };
    NotesComponent.prototype.deldata = function (id) {
        // alert(id);
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./notes.html */ "./src/app/mycomponents/notes/notes.html"),
            styles: [__webpack_require__(/*! ./notes.scss */ "./src/app/mycomponents/notes/notes.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_demo_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"],
            _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_4__["NodeService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _demo_service_myservices__WEBPACK_IMPORTED_MODULE_7__["myservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/mycomponents/users/users.html":
/*!***********************************************!*\
  !*** ./src/app/mycomponents/users/users.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table dir=\"rtl\" class=\"ui-rtl\" #dt [columns]=\"cols\" [value]=\"itemArray\" [paginator]=\"true\" [rows]=\"7\">\r\n\r\n    <ng-template pTemplate=\"caption\">\r\n        قائمة المستخدمين\r\n        <div style=\"text-align: right\">\r\n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"ابحث هنا...\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\r\n                style=\"width:auto\">\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n\r\n               \r\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                {{col.header}}\r\n                <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n\r\n            </th>\r\n\r\n         <th>إرسال إشعار</th>\r\n\r\n        </tr>\r\n\r\n        \r\n        <tr>\r\n            <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n                    <input *ngSwitchCase=\"'userName'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                <input *ngSwitchCase=\"'useremail'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                <input *ngSwitchCase=\"'userphone'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n            </th>\r\n         \r\n        </tr>\r\n\r\n\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-rowData let-itemArray>\r\n        <tr>\r\n\r\n         \r\n            <td>\r\n                {{itemArray.userName}}\r\n            </td>\r\n\r\n            <td>\r\n                    {{itemArray.useremail}}\r\n                </td>\r\n                <td>\r\n                        {{itemArray.userphone}}\r\n                    </td>\r\n          \r\n\r\n            <td>\r\n                <button (click)=\"send(itemArray.useremail)\" \r\n                 class=\"btn btn-primary\">إرسال إشعار</button>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n\r\n\r\n    <ng-template pTemplate=\"summary\">\r\n        يوجد {{itemArray?.length}} مستخدم\r\n        <br>\r\n        \r\n    </ng-template>\r\n\r\n</p-table>\r\n\r\n\r\n<!--\r\n     <ng-template pTemplate=\"body\" let-itemArray>\r\n        <tr>\r\n            <td>{{itemArray.userName}}</td>\r\n            <td>{{itemArray.useremail}}</td>\r\n            <td>{{itemArray.userphone}}</td>\r\n        </tr>\r\n    </ng-template>\r\n-->"

/***/ }),

/***/ "./src/app/mycomponents/users/users.scss":
/*!***********************************************!*\
  !*** ./src/app/mycomponents/users/users.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  color: blue; }\n\n.ui-dataview-layout-options .ui-button {\n  margin-left: .5em; }\n\n.ui-dataview .filter-container {\n  text-align: center; }\n\n@media (max-width: 40em) {\n  .ui-dataview .car-details, .ui-dataview .search-icon {\n    text-align: center;\n    margin-top: 0; }\n  .ui-dataview .filter-container {\n    text-align: left; }\n  .ui-dataview-layout-options.ui-buttonset > .ui-button {\n    margin-left: 0;\n    display: inline-block; }\n  .ui-dataview-layout-options.ui-buttonset > .ui-button:first-child {\n    border-radius: 50%; }\n  .ui-dataview-layout-options.ui-buttonset > .ui-button:last-child {\n    border-radius: 50%; } }\n"

/***/ }),

/***/ "./src/app/mycomponents/users/users.ts":
/*!*********************************************!*\
  !*** ./src/app/mycomponents/users/users.ts ***!
  \*********************************************/
/*! exports provided: UsersComponent, ListUserClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserClass", function() { return ListUserClass; });
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../breadcrumb.service */ "./src/app/breadcrumb.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _demo_service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../demo/service/carservice */ "./src/app/demo/service/carservice.ts");
/* harmony import */ var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../demo/service/eventservice */ "./src/app/demo/service/eventservice.ts");
/* harmony import */ var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../demo/service/nodeservice */ "./src/app/demo/service/nodeservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersComponent = /** @class */ (function () {
    function UsersComponent(carService, eventService, nodeService, breadcrumbService, db, router) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.db = db;
        this.router = router;
        this.itemArray = [];
        this.selectedItemArray = [];
        this.userdata = {
            code: '',
            userName: '',
            useremail: '',
            userphone: '',
        };
        this.itemList = db.list('users');
        this.breadcrumbService.setItems([
            { label: 'المستخدمين' },
        ]);
    }
    UsersComponent.prototype.send = function (id) {
        //    alert(id);
        this.router.navigate(['/notes', id]);
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'userName', header: 'الاسم' },
            { field: 'useremail', header: 'الإيميل' },
            { field: 'userphone', header: 'الموبايل' },
        ];
        this.itemList.snapshotChanges().subscribe(function (actions) {
            actions.forEach(function (action) {
                var y = action.payload.toJSON();
                y['$key'] = action.key;
                _this.itemArray.push(y);
                //     this.datalen=actions.length;
                //     this.pagescount=(Math.floor(this.datalen / 5 ) + 1);
            });
        });
        console.log(this.itemArray);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./users.html */ "./src/app/mycomponents/users/users.html"),
            styles: [__webpack_require__(/*! ./users.scss */ "./src/app/mycomponents/users/users.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_demo_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"],
            _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_4__["NodeService"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());

var ListUserClass = /** @class */ (function () {
    function ListUserClass() {
    }
    return ListUserClass;
}());



/***/ }),

/***/ "./src/app/safe-html.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\trioninsight\dhsaAng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
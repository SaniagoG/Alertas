webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModal = (function () {
    function LoginModal(navParams, viewCtrl, loginService) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.loginService = loginService;
        this.rootPage = 'LoginPage';
        this.rootParams = Object.assign({}, navParams.data, { viewCtrl: viewCtrl });
        this.query = null;
        this.loginService.getLang().then(function (data_lang) {
            _this.lang = data_lang;
        });
        this.current_lang = navParams.get('current_lang');
        // This line will send the view controller into your child views, so you can dismiss the modals from there.
    }
    LoginModal.prototype.getBusquedaColegios = function (e) {
        var _this = this;
        if (this.query.length >= 3) {
            this.loginService.getSchools(this.query).subscribe(function (data) {
                _this.colegios = Object.keys(data).map(function (key) { return { key: key, value: data[key] }; });
            });
        }
        else
            this.colegios = null;
    };
    LoginModal.prototype.setColegio = function (item) {
        this.colegio = item;
        this.dismiss();
    };
    LoginModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.colegio);
    };
    LoginModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-modal',
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]],template:/*ion-inline-start:"C:\appdemo\appmarket\src\pages\login\modal.login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar no-border-bottom>\n      <ion-title text-center>{{lang? lang[current_lang].school_or_organization : \'\'}}</ion-title>\n  </ion-navbar>\n    <ion-toolbar>\n      <ion-searchbar (ionInput)="getBusquedaColegios($event)" [(ngModel)]="query" placeholder="{{lang? lang[current_lang].search : \'\'}}"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n    \n  <p text-center  *ngIf="!colegios" >{{lang? lang[current_lang].tip_login__enter_3_chars_min : \'\'}}</p>\n  <ion-list>\n    <ion-item no-border *ngFor="let item of colegios" (click)="setColegio(item.value)" >\n      <h5>{{item.value.school_id}} - {{ item.value.school_name }} </h5>\n      <p>{{item.value.city}}</p>\n    </ion-item>\n  </ion-list> \n</ion-content>\n<ion-footer no-border text-center>\n    <button class="close" ion-button round color=danger (click)="dismiss()">\n      {{lang? lang[current_lang].button_cancel : \'\'}}\n    </button>\n    \n    </ion-footer>'/*ion-inline-end:"C:\appdemo\appmarket\src\pages\login\modal.login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]])
    ], LoginModal);
    return LoginModal;
}());

//# sourceMappingURL=modal.login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, menuCtrl, mainService, loginService, navParams) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.mainService = mainService;
        this.loginService = loginService;
        this.navParams = navParams;
        this.days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        this.months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        this.colors = ["", "examen", "tarea", "trabajo-clase", "trabajo-clase", "trabajo-clase", "participacion-clase", "tarea", "tarea", "examen", "examen", "tarea", "tarea"];
        this.menuCtrl.enable(true, 'myMenu');
        this.courses = [];
        this.assignments = [];
        this.type_assignments = [];
        this.flag_end = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getLang().then(function (data) {
            _this.lang = data;
            _this.loginService.isLogin().then(function (data) {
                if (data) {
                    _this.current_period = _this.navParams.get("current_period");
                    _this.loginService.getUserData().then(function (user_data) {
                        _this.current_period = user_data.at;
                        _this.enrrollement = user_data.e;
                        _this.current_lang = user_data.lang;
                        _this.days = [_this.lang[_this.current_lang].day_02, _this.lang[_this.current_lang].day_03, _this.lang[_this.current_lang].day_04, _this.lang[_this.current_lang].day_05, _this.lang[_this.current_lang].day_06, _this.lang[_this.current_lang].day_07, _this.lang[_this.current_lang].day_01];
                        _this.months = [_this.lang[_this.current_lang].month_01.substring(0, 3), _this.lang[_this.current_lang].month_02.substring(0, 3), _this.lang[_this.current_lang].month_03.substring(0, 3), _this.lang[_this.current_lang].month_04.substring(0, 3), _this.lang[_this.current_lang].month_05.substring(0, 3), _this.lang[_this.current_lang].month_06.substring(0, 3), _this.lang[_this.current_lang].month_07.substring(0, 3), _this.lang[_this.current_lang].month_08.substring(0, 3), _this.lang[_this.current_lang].month_09.substring(0, 3), _this.lang[_this.current_lang].month_10.substring(0, 3), _this.lang[_this.current_lang].month_11.substring(0, 3), _this.lang[_this.current_lang].month_12.substring(0, 3)];
                        _this.current_date = new Date(_this.current_period.end_date);
                        _this.start_date = new Date(_this.current_period.start_date);
                        var d = new Date(_this.current_date.toDateString());
                        d.setMonth(_this.current_date.getMonth() - 1);
                        if (user_data.e.e_id) {
                            _this.mainService.get({
                                "action": "getAllStudentAssignments",
                                "e_id": user_data.e.e_id,
                                "order_by": "fecha%20desc",
                                "index": "fecha,a_id",
                                "hie_id": "2",
                                "date_max": _this.current_date.getFullYear() + "-" + (_this.current_date.getMonth() + 1) + "-" + _this.current_date.getDate(),
                                "date_min": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
                            }).then(function (data_assignments) {
                                data_assignments.subscribe(function (res_assignments) {
                                    _this.loginService.getCourses().then(function (data_courses) {
                                        _this.courses = data_courses;
                                        _this.current_date = d;
                                        if (!res_assignments.success) {
                                            _this.getMoreAssignments(null);
                                        }
                                        else {
                                            _this.flag_end = true;
                                            for (var _i = 0, _a = Object.keys(res_assignments); _i < _a.length; _i++) {
                                                var key = _a[_i];
                                                var temp = [];
                                                for (var _b = 0, _c = Object.keys(res_assignments[key]); _b < _c.length; _b++) {
                                                    var key1 = _c[_b];
                                                    var course = _this.getCourseData(res_assignments[key][key1].c_id);
                                                    temp.push({ assignment: res_assignments[key][key1], course: course });
                                                }
                                                _this.assignments.push({ key: key, value: temp });
                                            }
                                            if (_this.assignments.length < 10)
                                                _this.getMoreAssignments(null);
                                        }
                                    });
                                    _this.loginService.getAssignmentTypes().then(function (data) {
                                        _this.type_assignments = data;
                                    });
                                });
                            });
                        }
                    });
                }
                else
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            });
        });
    };
    HomePage.prototype.getCourseData = function (id) {
        return this.courses.find(function (x) { return x.c_id == id; });
    };
    HomePage.prototype.getDay = function (date) {
        var d = new Date(date);
        return this.days[d.getDay()];
    };
    HomePage.prototype.getDayNumber = function (date) {
        var d = new Date(date);
        d.setDate(d.getDate() + 1);
        return d.getDate();
    };
    HomePage.prototype.getMonth = function (date) {
        var d = new Date(date);
        d.setDate(d.getDate() + 1);
        return this.months[d.getMonth()];
    };
    HomePage.prototype.getMoreAssignments = function (infiniteScroll) {
        var _this = this;
        if (!this.enrrollement.e_id)
            return;
        var d = new Date(this.current_date.toDateString());
        if (this.start_date.getTime() > this.current_date.getTime()) {
            if (infiniteScroll)
                infiniteScroll.complete();
            this.flag_end = true;
            return;
        }
        d.setMonth(this.current_date.getMonth() - 1);
        this.mainService.get({
            "action": "getAllStudentAssignments",
            "e_id": this.enrrollement.e_id,
            "order_by": "fecha%20desc",
            "index": "fecha,a_id",
            "hie_id": "2",
            "date_max": this.current_date.getFullYear() + "-" + (this.current_date.getMonth() + 1) + "-" + this.current_date.getDate(),
            "date_min": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
        }).then(function (data_assignments) {
            data_assignments.subscribe(function (res_assignments) {
                _this.current_date = d;
                if (res_assignments.success == false) {
                    _this.getMoreAssignments(infiniteScroll);
                }
                else {
                    for (var _i = 0, _a = Object.keys(res_assignments); _i < _a.length; _i++) {
                        var key = _a[_i];
                        var temp = [];
                        for (var _b = 0, _c = Object.keys(res_assignments[key]); _b < _c.length; _b++) {
                            var key1 = _c[_b];
                            var course = _this.getCourseData(res_assignments[key][key1].c_id);
                            temp.push({ assignment: res_assignments[key][key1], course: course });
                        }
                        _this.assignments.push({ key: key, value: temp });
                    }
                    if (_this.assignments.length < 10)
                        _this.getMoreAssignments(null);
                    if (infiniteScroll)
                        infiniteScroll.complete();
                }
            });
        });
    };
    HomePage.prototype.getTypeAssignment = function (id) {
        return this.type_assignments.find(function (x) { return x.type_id == id; });
    };
    HomePage.prototype.capitalize = function (string) {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : string;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]],template:/*ion-inline-start:"C:\appdemo\appmarket\src\pages\home\home.html"*/'\n<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="menu-boton">\n        <span class="bar animated slideInLeft"></span>\n      </ion-icon>\n    </button>\n    <ion-title>{{ lang? lang[current_lang].agenda : \'\'}}</ion-title>\n    <ion-buttons end>\n      <button ion-button >\n        <ion-icon class="filtro-boton">\n          <span class="bar"></span>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-padding>\n    <ion-grid no-padding class="animated fadeInDown a1">\n      <ion-row>\n        <ion-col col-3>\n          <p text-center>{{ lang? lang[current_lang].date : \'\'}}<p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div id="loader-wrapper" *ngIf="assignments?.length == 0 && !flag_end">\n        <div id="loader"></div>\n    </div>\n    <!-- mensaje cuando no hay datos en la agenda -->\n    <h3 text-center class="animated fadeInUp a15" *ngIf="assignments?.length == 0 && flag_end">{{ lang? lang[current_lang].wa_nothing_to_show : \'\'}}</h3>\n    <!-- /mensaje cuando no hay datos en la agenda -->\n  <ion-grid no-padding *ngFor="let date of assignments" class="animated fadeInUp a15">\n\n      <ion-row>\n        <ion-col col-3 text-center class="fecha on">\n          <h2>{{getMonth(date.key)}}</h2>\n          <h1>{{getDayNumber(date.key)}}</h1>\n          <h3>{{getDay(date.key)}}</h3>\n        </ion-col>\n      <ion-col col-9 class="actividades-agenda">\n        <ion-list class="{{actividad.assignment.score==\'\' ? colors[actividad.assignment.type_id] : \'finalizada\'}}" *ngFor="let actividad of date.value">\n            <p>{{getTypeAssignment(actividad.assignment.type_id)?.name}}<span float-end>{{actividad.course?.full_name}}</span></p>\n            <div class="actividad">\n              <h2>{{actividad.assignment.title}}</h2>\n              <span>{{capitalize(actividad.assignment.description)}}</span>\n            </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll (ionInfinite)="getMoreAssignments($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\appdemo\appmarket\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainService = (function () {
    function MainService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    MainService.prototype.get = function (data) {
        var _this = this;
        var params = '?';
        for (var key in data) {
            params += String(key) + '=' + String(data[key]) + '&';
        }
        return this.loginService.getUserData().then(function (data) {
            params += 'school_api_key=' + data.school_api_key + '&';
            params += 'user_api_key=' + data.user_api_key;
            console.log(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* CiudadEducativaApp */].API_ENDPOINT + params);
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* CiudadEducativaApp */].API_ENDPOINT + params).map(function (res) { return res.json(); });
        });
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], MainService);
    return MainService;
}());

//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_modal_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* CiudadEducativaApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_modal_login__["a" /* LoginModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* CiudadEducativaApp */], {
                    platforms: {
                        ios: {
                            backButtonText: '',
                            pageTransition: 'md-transition'
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* CiudadEducativaApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_modal_login__["a" /* LoginModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    LoginService.prototype.login = function (school, user, password) {
        var _this = this;
        console.log("intento iniciar sesion");
        var params = '?action=doLogin&login_api_key=' + __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* CiudadEducativaApp */].API_LOGIN_KEY + '&school_id=' + String(school) +
            '&login=' + user + '&password=' + password;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* CiudadEducativaApp */].API_ENDPOINT + params).map(function (res) { return res.json(); })
            .map(function (res) {
            console.log("respuesta login :");
            if (!res.error) {
                console.log("inicio session");
                return _this.get({
                    'action': 'getCurrentAcademicTerms',
                    'excluded_statuses': '4,0'
                }, res.school_api_key, res.user_api_key).subscribe(function (res_current_academic_terms) {
                    var current_period = Object.keys(res_current_academic_terms).map(function (key) { return { key: key, value: res_current_academic_terms[key] }; }).values().next().value.value;
                    console.log("academic terms received");
                    return _this.get({
                        "action": "getCurrentEnrollment",
                        "u_id": res.user.u_id,
                        "at_id": current_period ? current_period.at_id : 'undefined'
                    }, res.school_api_key, res.user_api_key).subscribe(function (res_current_enrollment) {
                        console.log("enrollment received");
                        return _this.storage.setItem('user_data', {
                            'u_id': res.user.u_id,
                            'school_id': res.school.school_id,
                            'name': res.user.name,
                            'lastname': res.user.lastname,
                            'school_api_key': res.school_api_key,
                            'user_api_key': res.user_api_key,
                            'nid': res.user.nid,
                            'at': current_period,
                            'e': res_current_enrollment,
                            'lang': res.user.lang
                        }).then(function () {
                            console.log('Stored item!');
                            _this.get({ 'action': 'getAcademicTerms' }, res.school_api_key, res.user_api_key).subscribe(function (res_academic) {
                                var temp = [];
                                for (var _i = 0, _a = Object.keys(res_academic); _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    temp.push(res_academic[item]);
                                }
                                _this.storage.setItem('academicTerms', temp).then(function () {
                                    console.log('Academic Terms Stored');
                                    if (!current_period) {
                                        current_period = temp.find(function (x) { return x.at_id == res_current_enrollment.at_id; });
                                        _this.storage.setItem('user_data', {
                                            'u_id': res.user.u_id,
                                            'school_id': res.school.school_id,
                                            'name': res.user.name,
                                            'lastname': res.user.lastname,
                                            'school_api_key': res.school_api_key,
                                            'user_api_key': res.user_api_key,
                                            'nid': res.user.nid,
                                            'at': current_period,
                                            'e': res_current_enrollment,
                                            'lang': res.user.lang
                                        }).then(function () { return console.log('New Current Academic Term Stored'); }, function (err) { return console.log('Error New Current Academic Term Stored'); });
                                    }
                                }, function (error) { return console.log("Academic Terms Store Error"); });
                            });
                            if (res_current_enrollment.e_id) {
                                _this.get({
                                    "action": "getGroupsXCourseXEnrollment",
                                    "e_id": res_current_enrollment.e_id
                                }, res.school_api_key, res.user_api_key).subscribe(function (res_courses_enroll) {
                                    var temp_group = [];
                                    var temp_cursos = '';
                                    for (var _i = 0, _a = Object.keys(res_courses_enroll); _i < _a.length; _i++) {
                                        var group = _a[_i];
                                        temp_group.push(res_courses_enroll[group]);
                                        temp_cursos += res_courses_enroll[group].c_id + ',';
                                    }
                                    _this.storage.setItem('groupsXCourseXEnrollment', temp_group).then(function () { return console.log('GroupsXCourseXEnrollment Stored'); }, function (error) { return console.log("GroupsXCourseXEnrollment Store Error"); });
                                    _this.get({
                                        "action": "getCourses",
                                        "c_id": temp_cursos.substr(0, temp_cursos.length - 1)
                                    }, res.school_api_key, res.user_api_key).subscribe(function (res_course) {
                                        var temp = [];
                                        for (var _i = 0, _a = Object.keys(res_course); _i < _a.length; _i++) {
                                            var item = _a[_i];
                                            temp.push(res_course[item]);
                                        }
                                        _this.storage.setItem('courses', temp).then(function () { return console.log('Courses Stored'); }, function (error) { return console.log("Courses Store Error"); });
                                    });
                                });
                            }
                            _this.get({
                                "action": "getAssignmentTypes"
                            }, res.school_api_key, res.user_api_key).subscribe(function (res_type_assignments) {
                                var temp = [];
                                for (var _i = 0, _a = Object.keys(res_type_assignments); _i < _a.length; _i++) {
                                    var key = _a[_i];
                                    temp.push(res_type_assignments[key]);
                                }
                                _this.storage.setItem('assignmentTypes', temp).then(function () { return console.log('Assignment Types Stored'); }, function (error) { return console.log("Assignment Types Store Error"); });
                            });
                            if (res_current_enrollment.e_id) {
                                _this.get({
                                    "action": "getStudentTeachers",
                                    "e_id": res_current_enrollment.e_id,
                                    "index": "c_id"
                                }, res.school_api_key, res.user_api_key).subscribe(function (res_teacher) {
                                    var temp = [];
                                    for (var _i = 0, _a = Object.keys(res_teacher); _i < _a.length; _i++) {
                                        var item_teacher = _a[_i];
                                        temp.push(res_teacher[item_teacher]);
                                    }
                                    _this.storage.setItem('teachers', temp).then(function () { return console.log('Teachers Stored'); }, function (error) { return console.log("Teachers Store Error"); });
                                });
                            }
                            _this.get({
                                "action": "getStandardTypes"
                            }, res.school_api_key, res.user_api_key).subscribe(function (res_type_standard) {
                                var temp = [];
                                for (var _i = 0, _a = Object.keys(res_type_standard); _i < _a.length; _i++) {
                                    var key = _a[_i];
                                    temp.push(res_type_standard[key]);
                                }
                                _this.storage.setItem('standardTypes', temp).then(function () { return console.log('Standard Types Stored'); }, function (error) { return console.log("Standard Types Error"); });
                            });
                            _this.get({
                                "action": "getEvaluationTerms",
                                "at_id": current_period.at_id
                            }, res.school_api_key, res.user_api_key).subscribe(function (res_evaluation_terms) {
                                var temp = [];
                                for (var _i = 0, _a = Object.keys(res_evaluation_terms); _i < _a.length; _i++) {
                                    var evaluation_term = _a[_i];
                                    temp.push(res_evaluation_terms[evaluation_term]);
                                }
                                _this.storage.setItem('evaluationTerms', temp).then(function () { return console.log('Evaluation Terms Stored'); }, function (error) { return console.log("Evaluation Terms Error"); });
                            });
                            return true;
                        }, function (error) {
                            console.error('Error storing item', error);
                            return false;
                        });
                    });
                });
            }
            else
                return false;
        });
    };
    LoginService.prototype.updateData = function (current_period, periods) {
        var _this = this;
        return this.getUserData().then(function (res) {
            return _this.get({
                "action": "getCurrentEnrollment",
                "u_id": res.u_id,
                "at_id": current_period.at_id
            }, res.school_api_key, res.user_api_key).subscribe(function (res_current_enrollment) {
                console.log("enrollment received");
                if (res_current_enrollment.at_id != current_period.at_id)
                    current_period = periods.find(function (x) { return x.at_id == res_current_enrollment; });
                return _this.storage.setItem('user_data', {
                    'u_id': res.u_id,
                    'school_id': res.school_id,
                    'name': res.name,
                    'lastname': res.lastname,
                    'school_api_key': res.school_api_key,
                    'user_api_key': res.user_api_key,
                    'nid': res.nid,
                    'at': current_period,
                    'e': res_current_enrollment,
                    'lang': res.lang
                }).then(function () {
                    if (res_current_enrollment.e_id) {
                        _this.get({
                            "action": "getGroupsXCourseXEnrollment",
                            "e_id": res_current_enrollment.e_id
                        }, res.school_api_key, res.user_api_key).subscribe(function (res_courses_enroll) {
                            var temp_group = [];
                            var temp_cursos = '';
                            for (var _i = 0, _a = Object.keys(res_courses_enroll); _i < _a.length; _i++) {
                                var group = _a[_i];
                                temp_group.push(res_courses_enroll[group]);
                                temp_cursos += res_courses_enroll[group].c_id + ',';
                            }
                            _this.storage.setItem('groupsXCourseXEnrollment', temp_group).then(function () { return console.log('GroupsXCourseXEnrollment Stored'); }, function (error) { return console.log("GroupsXCourseXEnrollment Store Error"); });
                            _this.get({
                                "action": "getCourses",
                                "c_id": temp_cursos.substr(0, temp_cursos.length - 1)
                            }, res.school_api_key, res.user_api_key).subscribe(function (res_course) {
                                var temp = [];
                                for (var _i = 0, _a = Object.keys(res_course); _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    temp.push(res_course[item]);
                                }
                                _this.storage.setItem('courses', temp).then(function () { return console.log('Courses Stored'); }, function (error) { return console.log("Courses Store Error"); });
                            });
                        });
                    }
                    if (res_current_enrollment.e_id) {
                        _this.get({
                            "action": "getStudentTeachers",
                            "e_id": res_current_enrollment.e_id,
                            "index": "c_id"
                        }, res.school_api_key, res.user_api_key).subscribe(function (res_teacher) {
                            var temp = [];
                            for (var _i = 0, _a = Object.keys(res_teacher); _i < _a.length; _i++) {
                                var item_teacher = _a[_i];
                                temp.push(res_teacher[item_teacher]);
                            }
                            _this.storage.setItem('teachers', temp).then(function () { return console.log('Teachers Stored'); }, function (error) { return console.log("Teachers Store Error"); });
                        });
                    }
                    _this.get({
                        "action": "getEvaluationTerms",
                        "at_id": current_period.at_id
                    }, res.school_api_key, res.user_api_key).subscribe(function (res_evaluation_terms) {
                        var temp = [];
                        for (var _i = 0, _a = Object.keys(res_evaluation_terms); _i < _a.length; _i++) {
                            var evaluation_term = _a[_i];
                            temp.push(res_evaluation_terms[evaluation_term]);
                        }
                        _this.storage.setItem('evaluationTerms', temp).then(function () { return console.log('Evaluation Terms Stored'); }, function (error) { return console.log("Evaluation Terms Error"); });
                    });
                    return true;
                }, function (error) {
                    console.error('Error storing item', error);
                    return false;
                });
            });
        });
    };
    LoginService.prototype.getLang = function () {
        var _this = this;
        return this.storage.getItem('lang').then(function (data) {
            return data;
        }, function (err) {
            var request = _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* CiudadEducativaApp */].API_ENDPOINT + '?action=get_all_language_files_for_this_section&section=mobile_app_students').map(function (res) { return res.json(); });
            request.subscribe(function (res_lang) {
                _this.storage.setItem('lang', res_lang).then(function () { return console.log('Lang Stored'); }, function (error) { return console.log("Lang Store Error"); });
            });
            return request.toPromise();
        });
    };
    LoginService.prototype.getSchools = function (query) {
        var params = '?action=searchSchool&active=1&query=' + query.toLowerCase();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* CiudadEducativaApp */].API_ENDPOINT + params).map(function (res) { return res.json(); });
    };
    LoginService.prototype.isLogin = function () {
        return this.storage.getItem('user_data').then(function (data) { return true; }, function (error) { return false; });
    };
    LoginService.prototype.logout = function () {
        this.storage.setItem('user_data', null);
        this.storage.setItem('academicTerms', null);
        this.storage.setItem('courses', null);
        this.storage.setItem('assignmentTypes', null);
        this.storage.setItem('teachers', null);
        this.storage.setItem('standardTypes', null);
        this.storage.setItem('evaluationTerms', null);
        this.storage.setItem('groupsXCourseXEnrollment', null);
        this.storage.clear();
        this.getLang();
    };
    LoginService.prototype.getUserData = function () {
        return this.storage.getItem('user_data');
    };
    LoginService.prototype.getAcademicTerms = function () {
        return this.storage.getItem('academicTerms');
    };
    LoginService.prototype.getCourses = function () {
        return this.storage.getItem('courses');
    };
    LoginService.prototype.getAssignmentTypes = function () {
        return this.storage.getItem('assignmentTypes');
    };
    LoginService.prototype.getTeachers = function () {
        return this.storage.getItem('teachers');
    };
    LoginService.prototype.getStandardTypes = function () {
        return this.storage.getItem('standardTypes');
    };
    LoginService.prototype.getEvaluationTerms = function () {
        return this.storage.getItem('evaluationTerms');
    };
    LoginService.prototype.getGroupsXCourseXEnrollment = function () {
        return this.storage.getItem('groupsXCourseXEnrollment');
    };
    LoginService.prototype.get = function (data, school_api_key, user_api_key) {
        var params = '?';
        for (var key in data) {
            params += String(key) + '=' + String(data[key]) + '&';
        }
        params += 'school_api_key=' + school_api_key + '&';
        params += 'user_api_key=' + user_api_key;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* CiudadEducativaApp */].API_ENDPOINT + params).map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_login__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loginService, modalCtrl, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.msg = false;
        this.loginService.isLogin().then(function (data) {
            if (data)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        });
        this.modal_show = false;
        this.menuCtrl.enable(false, 'myMenu');
        this.process = false;
        this.current_lang = 'es_co';
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.process)
            return;
        this.process = true;
        console.log("boton de inicio de sesion invocado");
        this.loginService.login(this.school.school_id, this.user, this.password).subscribe(function (data) {
            if (data)
                setTimeout(function () {
                    _this.process = false;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }, 4000);
            else {
                _this.process = false;
                _this.msg = true;
            }
        });
    };
    LoginPage.prototype.changeLang = function (lang) {
        this.current_lang = lang;
    };
    LoginPage.prototype.showLoginModal = function () {
        var _this = this;
        if (!this.modal_show) {
            var loginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_login__["a" /* LoginModal */], {
                "current_lang": this.current_lang
            });
            loginModal.onDidDismiss(function (data) {
                _this.school = data;
                if (data)
                    _this.school_name = data.school_name;
                _this.modal_show = false;
            });
            loginModal.present();
        }
        this.modal_show = true;
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.loginService.getLang().then(function (data) {
            _this.lang = data;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]],template:/*ion-inline-start:"C:\appdemo\appmarket\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n    <ion-grid>\n        <ion-row justify-content-center align-items-center>\n          <ion-col text-center col-10 col-sm-7 col-md-5 col-lg-3>\n            <img class="animated fadeInDown a1" src="assets/img/logo.png" alt="">\n            <form class="animated fadeInUp a15" (submit)="login()">\n              <p class="error" text-center *ngIf="msg">{{lang? lang[current_lang]?.tip_login__invalid_school_user_or_password : \'\'}}</p>\n              <ion-item class="colegio">\n                <ion-input type="text" readlony="true" (ionFocus)="showLoginModal()" [placeholder]="lang ? lang[current_lang]?.school_or_organization : \'\'" [(ngModel)]="school_name" name="school_name"></ion-input>\n              </ion-item>\n              <ion-item class="nombre">\n                <ion-input type="text" [placeholder]="lang? lang[current_lang]?.user_login : \'\'" [(ngModel)]="user" name="usuario"></ion-input>\n              </ion-item>\n              <ion-item class="pass">\n                <ion-input type="password" [placeholder]="lang? lang[current_lang]?.password : \'\'" [(ngModel)]="password" name="password"></ion-input>\n              </ion-item>\n              <p text-center>{{ lang ? lang[current_lang]?.tip_login__did_you_forget_password : \'\'}} <br><a href="#" onclick="window.open(\'https://plataforma.ciudadeducativa.com/actions.php?action=see_recover_password\', \'_system\', \'location=yes\'); return false;" >{{lang? lang[current_lang]?.tip_login__click_here : \'\'}}</a></p>\n              <button ion-button round block type="submit">\n                {{lang ? lang[current_lang]?.enter : \'\'}}\n              </button>\n            </form>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid no-padding class="animated fadeInUp a2">\n      <ion-row justify-content-center>\n        <ion-col col-12>\n          <p text-center>{{lang? lang[current_lang]?.tip_login__what_is_your_language : \'\'}}</p>\n        </ion-col>\n        <ion-col col-3>\n          <input type="radio" id="spanish" class="input-hidden" (click)="changeLang(\'es_co\')" [checked]="current_lang==\'es_co\'">\n          <label for="spanish">\n            <img src="assets/img/spanish.png" alt="spanish" />\n          </label>\n        </ion-col>\n        <ion-col col-3>\n          <input type="radio" id="english" class="input-hidden" (click)="changeLang(\'en_us\')" [checked]="current_lang==\'en_us\'">\n          <label for="english">\n            <img src="assets/img/english.png" alt="english" />\n          </label>\n        </ion-col>\n        <ion-col col-3>\n          <input type="radio" id="portugues" class="input-hidden" (click)="changeLang(\'pt_br\')" [checked]="current_lang==\'pt_br\'">\n          <label for="portugues">\n            <img src="assets/img/portugues.png" alt="portugues" />\n          </label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content> \n'/*ion-inline-end:"C:\appdemo\appmarket\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiudadEducativaApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_main_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CiudadEducativaApp = (function () {
    function CiudadEducativaApp(platform, statusBar, splashScreen, loginService, menuCtrl, mainService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.mainService = mainService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.current_lang = 'es_co';
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'agenda', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
        ];
        this.activePage = this.pages[0];
        this.ready = false;
    }
    CiudadEducativaApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loginService.isLogin().then(function (val) {
                if (!val)
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                else
                    _this.updateData();
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    CiudadEducativaApp.prototype.openPage = function (page) {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.loginService.isLogin().then(function (val) {
            if (val) {
                _this.updateData();
                _this.nav.setRoot(page.component, {
                    current_period: _this.current_period
                });
            }
        });
        this.activePage = page;
    };
    CiudadEducativaApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    CiudadEducativaApp.prototype.logout = function () {
        var _this = this;
        this.mainService.get({
            "action": "doLogout"
        }).then(function (data_res) {
            data_res.subscribe(function (res) {
                _this.url_profile_img = null;
                _this.name = null;
                _this.lastname = null;
                _this.current_lang = null;
                _this.current_period_id = null;
                _this.current_period = null;
                _this.loginService.logout();
                _this.menuCtrl.close();
                _this.menuCtrl.enable(false, 'myMenu');
                _this.activePage = _this.pages[0];
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                _this.ready = false;
                _this.current_period = null;
                _this.current_period_id = -1;
            });
        });
    };
    CiudadEducativaApp.prototype.updateMenu = function () {
        if (this.loginService.isLogin())
            this.updateData();
    };
    CiudadEducativaApp.prototype.updateData = function () {
        var _this = this;
        if (this.ready)
            return;
        this.ready = true;
        this.loginService.getUserData().then(function (data) {
            _this.url_profile_img = "https://cied-discoduro-akiai7lejddstdf23hhq-1344523962.s3.amazonaws.com/" + data.school_id + "/img_usuarios/" + data.nid + ".jpg";
            _this.name = data.name;
            _this.lastname = data.lastname;
            _this.current_lang = data.lang;
            _this.current_period_id = data.at.at_id;
            _this.current_period = data.at;
        });
        this.loginService.getAcademicTerms().then(function (data) {
            _this.periods = data;
        });
        this.loginService.getLang().then(function (data) {
            console.log("lang: ", data);
            _this.lang = data;
        }).catch(function (error) {
            console.log("get lang error: ", error);
        });
    };
    CiudadEducativaApp.prototype.updateCurrentPeriod = function () {
        var _this = this;
        if (this.current_period.at_id == this.current_period_id)
            return;
        this.current_period = this.periods.find(function (x) { return x.at_id == _this.current_period_id; });
        this.mainService.get({
            "action": "setAcademicTermInSession",
            "at_id": this.current_period.at_id
        }).then(function (data_res) {
            data_res.subscribe(function (res) {
                _this.loginService.updateData(_this.current_period, _this.periods).then(function (result) {
                    setTimeout(function () {
                        _this.openPage(_this.activePage);
                        _this.menuCtrl.close();
                    }, 3000);
                });
            });
        });
    };
    Object.defineProperty(CiudadEducativaApp, "API_ENDPOINT", {
        get: function () { return 'https://plataforma.ciudadeducativa.com/app/web/api/index.php'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CiudadEducativaApp, "API_LOGIN_KEY", {
        get: function () { return 'w1e2r3W4R6E7g5T8Y7J9U3Y4E5r7t6h0r1t2E3R4t7J8u5f6g8Q9w0A0S9x1c2S1D1F1g1m1n458bPo'; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], CiudadEducativaApp.prototype, "nav", void 0);
    CiudadEducativaApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\appdemo\appmarket\src\app\app.html"*/'<ion-menu class="side-menu" (ionOpen)="updateMenu()" id="myMenu" [content]="content">\n  <!--<ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content >\n    <ion-grid>\n      <ion-row justify-content-center align-items-center>\n        <ion-col col-4>\n         <img class="img-fluid img-circle avatar" src="{{url_profile_img}}" onError="this.src=\'assets/img/avatar.png\'" >\n         \n        </ion-col> \n        <ion-col col-12>\n          <p text-center no-padding no-margin>{{name}}</p>\n          <p text-center no-padding no-margin>{{lastname}}</p>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>{{ lang ? lang[current_lang]?.academic_term : \'\'}}</ion-label>\n              <ion-select [(ngModel)]="current_period_id" (ionChange)="updateCurrentPeriod()" name="current_period_id">\n                <ion-option *ngFor="let item of periods" value="{{item?.at_id}}" [selected]="item?.at_id == current_period_id">{{item?.name}}</ion-option>\n              </ion-select>\n            </ion-item>\n           </ion-col> \n      </ion-row>\n      <ion-row justify-content-center align-items-center>\n          \n        </ion-row>\n      \n    </ion-grid>\n    <ion-list>\n      <button ion-button menuClose full text-uppercase color="light" *ngFor="let p of pages" [class.activeHightLight]="checkActive(p)" (click)="openPage(p)">\n        {{ lang? lang[current_lang][p.title] : p.title}}\n      </button> \n    </ion-list>\n  </ion-content>\n  <ion-footer no-border text-center>\n    <button class="close" ion-button icon-only round color=danger (click)="logout()">\n      <ion-icon name="md-exit"></ion-icon>\n    </button>\n    <h6 text-uppercase no-margin padding-bottom>{{lang? lang[current_lang]?.logout : \'\'}}</h6>\n    </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\appdemo\appmarket\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */]) === "function" && _g || Object])
    ], CiudadEducativaApp);
    return CiudadEducativaApp;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map
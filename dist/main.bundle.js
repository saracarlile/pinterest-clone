webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/all-pins/all-pins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  /* 2ae4e3 html color code blue text*/\r\n\r\n  .delete-btn {\r\n    border: none;\r\n    font-weight: bold;\r\n    color: #e60000;\r\n    background-color: transparent;\r\n    padding: none;\r\n    padding: 0px;\r\n}\r\n\r\n.card-text-hover:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n  .card-columns {\r\n        -webkit-column-gap: 10px!important;\r\n                column-gap: 10px!important;\r\n    }\r\n  \r\n  \r\n  @media (min-width: 34em) {\r\n      .card-columns {\r\n          -webkit-column-count: 2;\r\n          column-count: 2;\r\n      }\r\n  }\r\n  \r\n  @media (min-width: 48em) {\r\n      .card-columns {\r\n          -webkit-column-count: 3;\r\n          column-count: 3;\r\n      }\r\n  }\r\n  \r\n  @media (min-width: 62em) {\r\n      .card-columns {\r\n          -webkit-column-count: 4;\r\n          column-count: 4;\r\n      }\r\n  }\r\n  \r\n  @media (min-width: 75em) {\r\n      .card-columns {\r\n          -webkit-column-count: 5;\r\n          column-count: 5;\r\n      }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-pins/all-pins.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\" style=\"background-color: #2ae4e3; padding: 10px;\">\n      <h1 class=\"bd-title\">All Pins</h1>\n      <p class=\"bd-lead\">\n        View pins from all users. Click on a user's name to filter wall to only their pins.\n      </p>\n      <p *ngIf=\"filteredPins.length > 0 && filtered == true\">\n        <button class=\"btn btn-primary\" (click)=\"clearFilter()\">See All Pins</button>\n      </p>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" style=\"margin-top: 30px\">\n  <div class=\"col-sm-12\">\n    <div *ngIf=\"allPins.length > 0 && filtered == false\">\n      <div class=\"card-columns\">\n        <div *ngFor=\"let pin of allPins; let i = index\" style=\"border-radius: 0px; padding: 10px;\" class=\"card\">\n          <img class=\"card-img-top img-fluid\" src=\"{{pin.pinUrl}}\" alt=\"my pin\" class=\"img-fluid\" onerror='this.src=\"https://www.mylessonplanner.com/images/icons/DefaultIcon/png/256x256/MD-picture-broken-link.png\"'>\n          <!--You need to define onerror attribute in the image elements and perform image replace operation.  http://makitweb.com/check-broken-image-jquery-ajax/ -->\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">{{pin.pinName}}</h4>\n            <p class=\"card-text\"><small class=\"text-muted\">Pinned by:</small></p>\n           <p class=\"card-text card-text-hover\" style=\"color: #2ae4e3; font-weight: bold; margin-top:-15px;\" (click)='filterPins(i)'>{{pin.pinUserName}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"filteredPins.length > 0 && filtered == true\">\n      <div class=\"card-columns\">\n        <div *ngFor=\"let pin of filteredPins; let i = index\" style=\"border-radius: 0px; padding: 10px;\" class=\"card\">\n          <img class=\"card-img-top img-fluid\" src=\"{{pin.pinUrl}}\" alt=\"my pin\" class=\"img-fluid\" onerror='this.src=\"https://www.mylessonplanner.com/images/icons/DefaultIcon/png/256x256/MD-picture-broken-link.png\"'>\n          <!--You need to define onerror attribute in the image elements and perform image replace operation.  http://makitweb.com/check-broken-image-jquery-ajax/ -->\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">{{pin.pinName}}</h4>\n            <p class=\"card-text\"><small class=\"text-muted\">Pinned by:</small></p>\n           <p class=\"card-text\" style=\"color: #2ae4e3; font-weight: bold; margin-top:-15px;\">{{pin.pinUserName}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/all-pins/all-pins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pins_service__ = __webpack_require__("../../../../../src/app/pins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllPinsComponent = (function () {
    function AllPinsComponent(pins) {
        this.pins = pins;
        this.allPins = [];
        this.filtered = false;
        this.filteredPins = [];
    }
    AllPinsComponent.prototype.filterPins = function (index) {
        console.log('filtered!');
        var userId = this.allPins[index]["userId"];
        this.filteredPins = this.allPins.filter(function (pin) { return pin["userId"] == userId; });
        this.filtered = true;
        console.log(this.filteredPins);
        console.log(this.filtered);
    };
    AllPinsComponent.prototype.clearFilter = function () {
        this.filtered = false;
        this.filteredPins = [];
    };
    AllPinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pins.getAllPins().subscribe(function (data) {
            console.log("Get all pins is successful ", data);
            console.log(data.length);
            for (var j = 0; j < data.length; j++) {
                var userName = data[j].name;
                var picture = data[j].picture;
                var id = data[j].id;
                for (var i = 0; i < data[j]["pins"].length; i++) {
                    var custPinObject = {
                        pinName: data[j]["pins"][i]["pinName"],
                        pinUrl: data[j]["pins"][i]["pinUrl"],
                        pinUser: data[j]["pins"][i]["pinUser"],
                        pinUserName: userName,
                        userId: id,
                        userPicture: picture
                    };
                    _this.allPins.push(custPinObject);
                }
            }
            console.log(_this.allPins);
        }, function (error) {
            console.log("Error", error);
        });
    };
    AllPinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all-pins',
            template: __webpack_require__("../../../../../src/app/all-pins/all-pins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-pins/all-pins.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pins_service__["a" /* PinsService */]])
    ], AllPinsComponent);
    return AllPinsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link:hover {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light container\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">Pinterest Interest</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav  mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/all-pins\" routerLinkActive=\"active\">All Pins</a>\n            </li>\n            <li *ngIf=\"auth.isAuthenticated()\" class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/my-pins\" routerLinkActive=\"active\">My Pins</a>\n            </li>\n            <li *ngIf=\"!auth.isAuthenticated()\" class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"auth.login()\">Login</a>\n            </li>\n            <li *ngIf=\"auth.isAuthenticated()\" class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"auth.logout()\">Log Out</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_pins_all_pins_component__ = __webpack_require__("../../../../../src/app/all-pins/all-pins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_pins_my_pins_component__ = __webpack_require__("../../../../../src/app/my-pins/my-pins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pins_service__ = __webpack_require__("../../../../../src/app/pins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import HttpClientModule from @angular/common/http









var appRoutes = [
    { path: 'all-pins', component: __WEBPACK_IMPORTED_MODULE_7__all_pins_all_pins_component__["a" /* AllPinsComponent */] },
    { path: 'my-pins', component: __WEBPACK_IMPORTED_MODULE_8__my_pins_my_pins_component__["a" /* MyPinsComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__all_pins_all_pins_component__["a" /* AllPinsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__my_pins_my_pins_component__["a" /* MyPinsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes
                //   { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__pins_service__["a" /* PinsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: '2ckS5lR3W2a2yuJs5Fti5cbrKttmHiGf',
            domain: 'pinterest-clone.auth0.com',
            responseType: 'token id_token',
            audience: 'https://pinterest-clone.auth0.com/userinfo',
            redirectUri: 'https://shielded-crag-80225.herokuapp.com/all-pins',
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log(authResult);
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
                _this.auth0.client.userInfo(authResult.accessToken, function (err, user) {
                    // Now you have the user's information
                    //https://pinterest-clone.auth0.com/api/v2/users/twitter%7C17258519
                    //https://auth0.com/docs/api/management/v2/tokens
                    console.log(user);
                    console.log(encodeURIComponent(user["sub"]));
                    _this.userid = encodeURIComponent(user["sub"]);
                    _this.http.post("/auth/user-info/", {
                        "id": _this.userid
                    })
                        .subscribe(function (data) {
                        console.log("POST Request is successful ", data);
                        console.log(data["access_token"]);
                        _this.useToken(data["access_token"]);
                    }, function (error) {
                        console.log("Error", error);
                    });
                });
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.useToken = function (token) {
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]();
        params = params.append('token', token);
        params = params.append('id', this.userid);
        this.http.get("/auth/use-token/", {
            params: params
        })
            .subscribe(function (data) {
            console.log("GET Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.http.post('/auth/logout', {}).subscribe(); //clear authenticated cookie server side
        document.cookie = "authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; //delete authenticated cookie client side
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  /* 2ae4e3 html color code blue text*/\r\n\r\n  .delete-btn {\r\n    border: none;\r\n    font-weight: bold;\r\n    color: #e60000;\r\n    background-color: transparent;\r\n    padding: none;\r\n    padding: 0px;\r\n}\r\n\r\n.card-text-hover:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n  .card-columns {\r\n        -webkit-column-gap: 10px!important;\r\n                column-gap: 10px!important;\r\n    }\r\n  \r\n  \r\n  @media (min-width: 34em) {\r\n      .card-columns {\r\n          -webkit-column-count: 2;\r\n          column-count: 2;\r\n      }\r\n  }\r\n  \r\n  @media (min-width: 48em) {\r\n      .card-columns {\r\n          -webkit-column-count: 3;\r\n          column-count: 3;\r\n      }\r\n  }\r\n  \r\n  @media (min-width: 62em) {\r\n      .card-columns {\r\n          -webkit-column-count: 4;\r\n          column-count: 4;\r\n      }\r\n  }\r\n  \r\n  @media (min-width: 75em) {\r\n      .card-columns {\r\n          -webkit-column-count: 5;\r\n          column-count: 5;\r\n      }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"jumbotron\" style=\"background-color: #2ae4e3\">\n      <h1 class=\"display-3\">Pinterest Interest</h1>\n      <p class=\"lead\">\n        Check out this Pinterest-like website.  View pins from all users.<br>\n        Login using your Twitter account to add your own pins.\n      </p>\n    </div>\n  </div>\n  \n\n  <div class=\"row\" style=\"margin-top: 30px\">\n      <div class=\"card-columns\">\n          <div class=\"card\" style=\"border-radius: 0px; padding: 10px;\">\n            <img class=\"card-img-top img-fluid\" src=\"https://i.pinimg.com/236x/13/58/cb/1358cb024acd2721ccd6282cecbf5ed0--lake-toys-boats.jpg\" alt=\"boat on lake\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Boat on a Lake</h4>\n              <p class=\"card-text\"><small class=\"text-muted\">Pinned by:</small></p>\n              <p class=\"card-text card-text-hover\" style=\"color: #2ae4e3; font-weight: bold; margin-top:-15px;\">Harmony</p>\n            </div>\n          </div>\n          <div class=\"card\" style=\"border-radius: 0px; padding: 10px;\">\n              <img class=\"card-img-top img-fluid\" src=\"https://i.pinimg.com/736x/58/e0/13/58e013492e3d1affbedfc72ddae969d7--lake-boats-abandoned-ships.jpg\" alt=\"user pin\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">1000 Foot Ship Columbia Star</h4>\n                <p class=\"card-text\"><small class=\"text-muted\">Pinned by:</small></p>\n                <p class=\"card-text card-text-hover\" style=\"color: #2ae4e3; font-weight: bold; margin-top:-15px;\">Harmony</p>\n              </div>\n            </div>\n            <div class=\"card\" style=\"border-radius: 0px; padding: 10px;\">\n                <img class=\"card-img-top img-fluid\" src=\"http://twinlakesresort.net/images/twin-lakes-boats.jpg\" alt=\"user pin\">\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\">Rental Boat</h4>\n                  <p class=\"card-text\"><small class=\"text-muted\">Pinned by:</small></p>\n                  <p class=\"card-text card-text-hover\" style=\"color: #2ae4e3; font-weight: bold; margin-top:-15px;\">Harmony</p>\n                </div>\n              </div>\n              <div class=\"card\" style=\"border-radius: 0px; padding: 10px;\">\n                  <img class=\"card-img-top img-fluid\" src=\"https://media2.s-nbcnews.com/j/newscms/2017_52/2272966/171225-chicago-snow-storm-njs-911a_6f02a5743d884eba73b07458da64629d.nbcnews-ux-2880-1000.jpg\" alt=\"user pin\">\n                  <div class=\"card-block\">\n                    <h4 class=\"card-title\">Snow covered streets near Chicago</h4>\n                    <p class=\"card-text\"><small class=\"text-muted\">Pinned by:</small></p>\n                    <p class=\"card-text card-text-hover\" style=\"color: #2ae4e3; font-weight: bold; margin-top:-15px;\">Erlich</p>\n                  </div>\n                </div>\n                <div class=\"card\" style=\"border-radius: 0px; padding: 10px;\">\n                    <img class=\"card-img-top img-fluid\" src=\"https://img1.onthesnow.com/image/la/94/hitting_mark_perfectly_amie_catches_early_94554.jpg\" alt=\"user pin\">\n                    <div class=\"card-block\">\n                      <h4 class=\"card-title\">Skiing</h4>\n                      <p class=\"card-text\"><small class=\"text-muted\">Pinned by:</small></p>\n                      <p class=\"card-text card-text-hover\" style=\"color: #2ae4e3; font-weight: bold; margin-top:-15px;\">Erlich</p>\n                    </div>\n                  </div>\n    \n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/my-pins/my-pins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delete-btn {\r\n    border: none;\r\n    color: #e60000;\r\n    background-color: transparent;\r\n    padding: none;\r\n    padding: 0px;\r\n}\r\n\r\n.delete-btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.card-columns {\r\n    -webkit-column-gap: 10px!important;\r\n            column-gap: 10px!important;\r\n}\r\n\r\n@media (min-width: 34em) {\r\n    .card-columns {\r\n        -webkit-column-count: 2;\r\n        column-count: 2;\r\n    }\r\n}\r\n\r\n@media (min-width: 48em) {\r\n    .card-columns {\r\n        -webkit-column-count: 3;\r\n        column-count: 3;\r\n    }\r\n}\r\n\r\n@media (min-width: 62em) {\r\n    .card-columns {\r\n        -webkit-column-count: 4;\r\n        column-count: 4;\r\n    }\r\n}\r\n\r\n@media (min-width: 75em) {\r\n    .card-columns {\r\n        -webkit-column-count: 5;\r\n        column-count: 5;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-pins/my-pins.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n\r\n    <h1 class=\"bd-title\">Manage Your Pins</h1>\r\n\r\n    <p class=\"bd-lead\">\r\n      Add pins of images or deleting existing pins.\r\n    </p>\r\n    <p>\r\n    <button class=\"btn btn-primary\" (click)=\"showAddPin()\" *ngIf=\"hideAdd == false\">Add New Pin</button>\r\n    </p>\r\n    <form *ngIf=\"hideAdd == true\" style=\"margin-top: 20px\">\r\n      <div class=\"form-group\">\r\n        <label for=\"url\">Url</label>\r\n        <input class=\"form-control\" [(ngModel)]=\"newPinUrl\" name=\"pinUrl\"  placeholder=\"Enter url to image you would like to pin\" />\r\n        <small class=\"form-text text-muted\">Example url format: https://www.website.com/image.jpg</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Pin Name</label>\r\n        <input class=\"form-control\" placeholder=\"Name/Description\" maxlength=\"65\" name=\"pinName\" [(ngModel)]=\"newPinName\" />\r\n        <small class=\"form-text text-muted\">Name your pin or provide a short description of pin image.</small>\r\n      </div>\r\n      <button type=\"button\" (click)=\"addPin()\" class=\"btn btn-primary\">Add Pin</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"margin-top: 30px;\">\r\n  <div class=\"col-sm-12\">\r\n    <div *ngIf=\"myPins.length > 0\">\r\n      <div class=\"card-columns\">\r\n        <div *ngFor=\"let pin of myPins; let i = index\" style=\"border-radius: 0px; padding: 10px;\" class=\"card\">\r\n          <img class=\"card-img-top img-fluid\" src=\"{{pin.pinUrl}}\" alt=\"my-pin\" class=\"img-fluid\" onerror='this.src=\"https://www.mylessonplanner.com/images/icons/DefaultIcon/png/256x256/MD-picture-broken-link.png\"'>\r\n          <!--You need to define onerror attribute in the image elements and perform image replace operation.  http://makitweb.com/check-broken-image-jquery-ajax/ -->\r\n          <div class=\"card-block\">\r\n            <h4 class=\"card-title\">{{pin.pinName}}</h4>\r\n            <p class=\"card-text\"><button (click)=\"deletePin(i)\" class=\"delete-btn\">Delete Pin</button></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/my-pins/my-pins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pins_service__ = __webpack_require__("../../../../../src/app/pins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPinsComponent = (function () {
    function MyPinsComponent(pins) {
        this.pins = pins;
        this.hideAdd = false;
        this.newPinUrl = ''; // pin url from input box
        this.newPinName = ''; //pin url from input box
        this.myPins = [];
    }
    MyPinsComponent.prototype.showAddPin = function () {
        this.hideAdd = true;
        console.log('Add Pin');
    };
    MyPinsComponent.prototype.addPin = function () {
        var name = this.newPinName;
        var url = this.newPinUrl;
        console.log(name);
        console.log(url);
        this.myPins.push({ "pinName": name, "pinUrl": url });
        this.pins.addPin({ "name": name, "url": url });
        this.newPinUrl = '';
        this.newPinName = '';
        this.hideAdd = false;
        console.log(this.myPins);
    };
    MyPinsComponent.prototype.deletePin = function (i) {
        var name = this.myPins[i]["pinName"];
        var url = this.myPins[i]["pinUrl"];
        console.log(name);
        console.log(url);
        this.myPins.splice(i, 1);
        this.pins.deletePin({ "name": name, "url": url });
        console.log(this.myPins);
    };
    MyPinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pins.getMyPins().subscribe(function (data) {
            console.log("Get my pins is successful ", data);
            console.log(data[0]["pins"].length);
            for (var i = 0; i < data[0]["pins"].length; i++) {
                _this.myPins.push(data[0]["pins"][i]);
            }
            console.log(_this.myPins);
        }, function (error) {
            console.log("Error", error);
        });
    };
    MyPinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-pins',
            template: __webpack_require__("../../../../../src/app/my-pins/my-pins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-pins/my-pins.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pins_service__["a" /* PinsService */]])
    ], MyPinsComponent);
    return MyPinsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pins.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PinsService = (function () {
    function PinsService(router, http) {
        this.router = router;
        this.http = http;
    }
    PinsService.prototype.addPin = function (pinInfo) {
        var body = pinInfo;
        this.http.post("/pin/add-pin", body)
            .subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    PinsService.prototype.deletePin = function (pinInfo) {
        var body = pinInfo;
        this.http.post("/pin/delete-pin", body)
            .subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    PinsService.prototype.getMyPins = function () {
        return this.http.get('/pin/my-pins');
    };
    PinsService.prototype.getAllPins = function () {
        return this.http.get('/pin/all-pins');
    };
    PinsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PinsService);
    return PinsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
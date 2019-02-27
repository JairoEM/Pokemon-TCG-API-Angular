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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-load.service.ts":
/*!*************************************!*\
  !*** ./src/app/api-load.service.ts ***!
  \*************************************/
/*! exports provided: ApiLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiLoadService", function() { return ApiLoadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiLoadService = /** @class */ (function () {
    function ApiLoadService(url) {
        this.url = url;
        this.cartas = [];
        this.seleccion = [];
        this.page = 1;
    }
    ApiLoadService.prototype.getPokemons = function () {
        var _this = this;
        this.url.get('https://api.pokemontcg.io/v1/cards?supertype=pokemon')
            .subscribe(function (data) {
            _this.cartas = (data['cards']);
        });
    };
    ApiLoadService.prototype.getTrainers = function () {
        var _this = this;
        this.url.get('https://api.pokemontcg.io/v1/cards?supertype=trainer')
            .subscribe(function (data) {
            _this.cartas = (data['cards']);
        });
    };
    ApiLoadService.prototype.getEnergies = function () {
        var _this = this;
        this.url.get('https://api.pokemontcg.io/v1/cards?supertype=energy')
            .subscribe(function (data) {
            _this.cartas = (data['cards']);
        });
    };
    // VARIABLE PARA SCROLL INFINITO --> page='+ this.page +'&this.Size=12
    ApiLoadService.prototype.getCarta = function (id) {
        for (var i = 0; i < this.cartas.length; i++) {
            if (this.cartas[i].id == id) {
                this.seleccion = this.cartas[i];
            }
        }
    };
    ApiLoadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiLoadService);
    return ApiLoadService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");





var routes = [
    { path: 'pokemons', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'trainers', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'energies', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    { path: '**', redirectTo: '/pokemons' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ANGULAR-PROJECT';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"jumbotron\" style=\"margin-top:30px;\">\n    <h1 class=\"display-3\">{{ apiLink.seleccion.name }}</h1>\n    <hr class=\"my-4\">\n    <p class=\"lead\">Subtype: {{ apiLink.seleccion.subtype }}</p>\n    <p class=\"lead\">Series: {{ apiLink.seleccion.series }}</p>\n    <p class=\"lead\">Set: {{ apiLink.seleccion.set }}</p>\n    <p class=\"lead\">Rarity: {{ apiLink.seleccion.rarity }}</p>\n    <p class=\"lead\">Number: {{ apiLink.seleccion.number }}</p>\n    <img src=\"{{ apiLink.seleccion.imageUrlHiRes }}\" alt=\"\" id=\"image\">\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-load.service */ "./src/app/api-load.service.ts");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(apiLink, rutaId) {
        this.apiLink = apiLink;
        this.rutaId = rutaId;
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_load_service__WEBPACK_IMPORTED_MODULE_3__["ApiLoadService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value) {
        var newStr = "";
        for (var i = value.length - 1; i >= 0; i--) {
            newStr += value.charAt(i);
        }
        return newStr;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    height: 80px;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n#footerContent {\r\n    padding: 35px 0;\r\n    font-size: 0.8em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNmb290ZXJDb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"bg-primary\" id=\"footerContent\">\n    <p>Project made by Jairo Eduardo Machado</p>\n    <p style=\"margin:-0.5% 0;\">You can see that project and many others on my \n      <a target=”_blank” href=\"https://github.com/JairoEM/ANGULAR-Project\">\n        <img src=\"../../assets/logoGithub.svg\" height=\"20px\" width=\"auto\" alt=\"\">GitHub\n      </a>\n    </p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li a {\r\n    margin: auto 10px;\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n/* The slider */\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSwrQkFBK0I7O0FBQy9CO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUV0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBRXZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFFbkMsMkJBQTJCO0FBQy9COztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSBhIHtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4uc3dpdGNoIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLyogVGhlIHNsaWRlciAqL1xyXG4uc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\">Pokemon TCG API</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/pokemons\">Pokemons</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/trainers\">Trainers</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/energies\">Energies</a>\n        </li>\n      </ul>\n\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/main.component */ "./src/app/main/main.component.ts");



var HeaderComponent = /** @class */ (function () {
    // public isActive = true;
    // public box;
    function HeaderComponent(main) {
        this.main = main;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\r\n    text-align: center;\r\n}\r\n\r\n#image {\r\n    height: 342px;\r\n    width: 245px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#carta {\r\n    max-width: 20rem;\r\n    margin-top: 10px;\r\n}\r\n\r\n.switch {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBRXRCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUVuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2ltYWdlIHtcclxuICAgIGhlaWdodDogMzQycHg7XHJcbiAgICB3aWR0aDogMjQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jY2FydGEge1xyXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"switch\">\n  <input type=\"checkbox\" (click)=\"cambiarColor()\">\n  <span class=\"slider round\"></span>\n</label> \n\n<div id=\"main\" [ngStyle]=\"box\">\n  <div class=\"container\">\n    <div class=\"row justify-content-between\">\n      <div *ngFor=\"let card of apiLink.cartas\" class=\"card border-primary mb-3 col-12 col-md-6 col-lg-4\" id=\"carta\">\n        <div class=\"card-header\">ID: {{ card.id | filter }}</div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{ card.name }}</h4>\n          <img src=\"{{ card.imageUrl }}\" alt=\"\" id=\"image\">\n          <input type=\"button\" class=\"btn btn-primary btn-lg\" value=\"More Info\" (click)=\"apiLink.getCarta(card.id)\" routerLink=\"/details\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-load.service */ "./src/app/api-load.service.ts");




var MainComponent = /** @class */ (function () {
    function MainComponent(apiLink, rutaId) {
        this.apiLink = apiLink;
        this.rutaId = rutaId;
        this.estadoButton = true;
    }
    MainComponent.prototype.ngOnInit = function () {
        var link = this.rutaId.snapshot['_routerState'].url;
        switch (link) {
            default:
                this.apiLink.getPokemons();
                break;
            case '/pokemons':
                this.apiLink.getPokemons();
                break;
            case '/trainers':
                this.apiLink.getTrainers();
                break;
            case '/energies':
                this.apiLink.getEnergies();
                break;
        }
    };
    MainComponent.prototype.cambiarColor = function () {
        if (this.estadoButton == false) {
            this.estadoButton = true;
            this.box = {
                backgroundColor: '#222222'
            };
        }
        else {
            this.estadoButton = false;
            this.box = {
                backgroundColor: 'white'
            };
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_load_service__WEBPACK_IMPORTED_MODULE_3__["ApiLoadService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MainComponent);
    return MainComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\losel\Desktop\XAMPP\Proyecto Final\ANGULAR-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
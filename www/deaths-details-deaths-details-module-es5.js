function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-details-deaths-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths-details/deaths-details.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths-details/deaths-details.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathsDetailsDeathsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"medium\">\n\t\t<ion-buttons slot=\"start\">\n        <ion-back-button defaulthref=\"/tabs/deaths\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Deaths Details</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content pading class=\"background\">\n\n\t<ion-card color=\"#ffd534\" *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h4>Cause of death: {{ death.cause}}</h4>\n\t\t</ion-card-content> \n\t</ion-card>\n\n    <ion-card color=\"#ffd534\" *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h4>Responsible: {{ death.responsible}}</h4>\n\t\t</ion-card-content> \n\t</ion-card>\n\n    <ion-card color=\"#ffd534\" *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h4>Season: {{ death.season}}</h4>\n\t\t</ion-card-content> \n\t</ion-card>\n\n    <ion-card color=\"#ffd534\" *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h4>Episode: {{ death.episode}}</h4>\n\t\t</ion-card-content> \n\t</ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/deaths-details/deaths-details-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/deaths-details/deaths-details-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DeathsDetailsPageRoutingModule */

  /***/
  function srcAppPagesDeathsDetailsDeathsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsDetailsPageRoutingModule", function () {
      return DeathsDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _deaths_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deaths-details.page */
    "./src/app/pages/deaths-details/deaths-details.page.ts");

    var routes = [{
      path: '',
      component: _deaths_details_page__WEBPACK_IMPORTED_MODULE_3__["DeathsDetailsPage"]
    }];

    var DeathsDetailsPageRoutingModule = function DeathsDetailsPageRoutingModule() {
      _classCallCheck(this, DeathsDetailsPageRoutingModule);
    };

    DeathsDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathsDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths-details/deaths-details.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/deaths-details/deaths-details.module.ts ***!
    \***************************************************************/

  /*! exports provided: DeathsDetailsPageModule */

  /***/
  function srcAppPagesDeathsDetailsDeathsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsDetailsPageModule", function () {
      return DeathsDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _deaths_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deaths-details-routing.module */
    "./src/app/pages/deaths-details/deaths-details-routing.module.ts");
    /* harmony import */


    var _deaths_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deaths-details.page */
    "./src/app/pages/deaths-details/deaths-details.page.ts");

    var DeathsDetailsPageModule = function DeathsDetailsPageModule() {
      _classCallCheck(this, DeathsDetailsPageModule);
    };

    DeathsDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deaths_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsDetailsPageRoutingModule"]],
      declarations: [_deaths_details_page__WEBPACK_IMPORTED_MODULE_6__["DeathsDetailsPage"]]
    })], DeathsDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths-details/deaths-details.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/deaths-details/deaths-details.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathsDetailsDeathsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --ion-background-color: #62ceff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWlvbmljLWNhMi9zcmMvYXBwL3BhZ2VzL2RlYXRocy1kZXRhaWxzL2RlYXRocy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhdGhzLWRldGFpbHMvZGVhdGhzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsK0JBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRocy1kZXRhaWxzL2RlYXRocy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjJjZWZmO1xuXG59IiwiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM2MmNlZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/deaths-details/deaths-details.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/deaths-details/deaths-details.page.ts ***!
    \*************************************************************/

  /*! exports provided: DeathsDetailsPage */

  /***/
  function srcAppPagesDeathsDetailsDeathsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsDetailsPage", function () {
      return DeathsDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var DeathsDetailsPage = /*#__PURE__*/function () {
      function DeathsDetailsPage(activatedRoute, api) {
        _classCallCheck(this, DeathsDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.deathId = null;
      }

      _createClass(DeathsDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.deathId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getDeath(this.deathId).subscribe(function (res) {
            _this.death = res[0];
          });
        }
      }]);

      return DeathsDetailsPage;
    }();

    DeathsDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    DeathsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deaths-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deaths-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths-details/deaths-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deaths-details.page.scss */
      "./src/app/pages/deaths-details/deaths-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], DeathsDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=deaths-details-deaths-details-module-es5.js.map
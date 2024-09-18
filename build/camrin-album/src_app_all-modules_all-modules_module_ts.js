"use strict";
(self["webpackChunkcollege"] = self["webpackChunkcollege"] || []).push([["src_app_all-modules_all-modules_module_ts"],{

/***/ 5372:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/all-modules-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesRoutingModule": () => (/* binding */ AllModulesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _all_modules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-modules.component */ 5164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', component: _all_modules_component__WEBPACK_IMPORTED_MODULE_0__.AllModulesComponent,
        children: [
            { path: 'blog', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_blog_blog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blog/blog.module */ 5429)).then(m => m.BlogModule) },
            { path: 'clients', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_all-modules_pages_package-view_package-view_component_ts-src_app_all-modules_-9e1e86"), __webpack_require__.e("src_app_all-modules_students_students_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./students/students.module */ 7241)).then(m => m.StudentsModule) },
            { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_all-modules_instructors_instructors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./instructors/instructors.module */ 4753)).then(m => m.InstructorsModule) },
            { path: 'pages', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_all-modules_pages_package-view_package-view_component_ts-src_app_all-modules_-9e1e86"), __webpack_require__.e("src_app_all-modules_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 4930)).then(m => m.PagesModule) }
        ]
    },
];
class AllModulesRoutingModule {
}
AllModulesRoutingModule.ɵfac = function AllModulesRoutingModule_Factory(t) { return new (t || AllModulesRoutingModule)(); };
AllModulesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AllModulesRoutingModule });
AllModulesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AllModulesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5164:
/*!******************************************************!*\
  !*** ./src/app/all-modules/all-modules.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesComponent": () => (/* binding */ AllModulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AllModulesComponent {
    constructor() { }
    ngOnInit() {
        // Textarea Text Count
        var maxLength = 100;
        $('#review_desc').on('keyup change', function () {
            var length = $(this).val().length;
            length = maxLength - length;
            $('#chars').text(length);
        });
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
        // Tooltip
        if ($('[data-toggle="tooltip"]').length > 0) {
            $('[data-toggle="tooltip"]').tooltip();
        }
        // Add More Hours
        $(".hours-info").on('click', '.trash', function () {
            $(this).closest('.hours-cont').remove();
            return false;
        });
        $(".add-hours").on('click', function () {
            var hourscontent = '<div class="row form-row hours-cont">' +
                '<div class="col-12 col-md-10">' +
                '<div class="row form-row">' +
                '<div class="col-12 col-md-6">' +
                '<div class="form-group">' +
                '<label>Start Time</label>' +
                '<select class="form-control">' +
                '<option>-</option>' +
                '<option>12.00 am</option>' +
                '<option>12.30 am</option>' +
                '<option>1.00 am</option>' +
                '<option>1.30 am</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '<div class="col-12 col-md-6">' +
                '<div class="form-group">' +
                '<label>End Time</label>' +
                '<select class="form-control">' +
                '<option>-</option>' +
                '<option>12.00 am</option>' +
                '<option>12.30 am</option>' +
                '<option>1.00 am</option>' +
                '<option>1.30 am</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
                '</div>';
            $(".hours-info").append(hourscontent);
            return false;
        });
        // Content div min height set
        function resizeInnerDiv() {
            var height = $(window).height();
            var header_height = $(".header").height();
            var footer_height = $(".footer").height();
            var setheight = height - header_height;
            var trueheight = setheight - footer_height;
            $(".content").css("min-height", trueheight);
        }
        if ($('.content').length > 0) {
            resizeInnerDiv();
        }
        $(window).resize(function () {
            if ($('.content').length > 0) {
                resizeInnerDiv();
            }
        });
        // Chat
        var chatAppTarget = $('.chat-window');
        (function () {
            if ($(window).width() > 991)
                chatAppTarget.removeClass('chat-slide');
            $(document).on("click", ".chat-window .chat-users-list a.media", function () {
                if ($(window).width() <= 991) {
                    chatAppTarget.addClass('chat-slide');
                }
                return false;
            });
            $(document).on("click", "#back_user_list", function () {
                if ($(window).width() <= 991) {
                    chatAppTarget.removeClass('chat-slide');
                }
                return false;
            });
        })();
        // Preloader
        $(window).on('load', function () {
            if ($('#loader').length > 0) {
                $('#loader').delay(350).fadeOut('slow');
                $('body').delay(350).css({ 'overflow': 'visible' });
            }
        });
    }
}
AllModulesComponent.ɵfac = function AllModulesComponent_Factory(t) { return new (t || AllModulesComponent)(); };
AllModulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllModulesComponent, selectors: [["app-all-modules"]], decls: 1, vars: 0, template: function AllModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtbW9kdWxlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8760:
/*!***************************************************!*\
  !*** ./src/app/all-modules/all-modules.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllModulesModule": () => (/* binding */ AllModulesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _all_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-modules-routing.module */ 5372);
/* harmony import */ var _all_modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-modules.component */ 5164);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class AllModulesModule {
}
AllModulesModule.ɵfac = function AllModulesModule_Factory(t) { return new (t || AllModulesModule)(); };
AllModulesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AllModulesModule });
AllModulesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _all_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllModulesRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AllModulesModule, { declarations: [_all_modules_component__WEBPACK_IMPORTED_MODULE_1__.AllModulesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _all_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllModulesRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_all-modules_module_ts.js.map
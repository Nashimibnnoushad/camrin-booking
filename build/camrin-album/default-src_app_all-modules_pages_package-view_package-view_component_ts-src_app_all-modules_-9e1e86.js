"use strict";
(self["webpackChunkcollege"] = self["webpackChunkcollege"] || []).push([["default-src_app_all-modules_pages_package-view_package-view_component_ts-src_app_all-modules_-9e1e86"],{

/***/ 6636:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/pages/package-view/package-view.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageViewComponent": () => (/* binding */ PackageViewComponent)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ 9215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services.service */ 5601);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);






function PackageViewComponent_div_22_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", service_r4.service, " x ", service_r4.count, "");
} }
function PackageViewComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PackageViewComponent_div_22_div_4_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](event_r2.eventName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", event_r2.services);
} }
function PackageViewComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deliverable_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](deliverable_r5.deliverableName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](deliverable_r5.count);
} }
class PackageViewComponent {
    constructor(apiService, activeModal, router) {
        this.apiService = apiService;
        this.activeModal = activeModal;
        this.router = router;
        this.package = _data_json__WEBPACK_IMPORTED_MODULE_0__.selectedPackage;
    }
    close() {
        this.activeModal.close();
    }
    ngOnInit() {
    }
}
PackageViewComponent.ɵfac = function PackageViewComponent_Factory(t) { return new (t || PackageViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
PackageViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PackageViewComponent, selectors: [["app-package-view"]], inputs: { enquiryData: "enquiryData" }, decls: 28, vars: 12, consts: [[1, "container"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "price-info"], [1, "actual-price"], [1, "events"], ["class", "event", 4, "ngFor", "ngForOf"], [1, "deliverables"], [1, "deliverable-grid"], ["class", "deliverable-item", 4, "ngFor", "ngForOf"], [1, "event"], [1, "services"], ["class", "service", 4, "ngFor", "ngForOf"], [1, "service"], [1, "deliverable-item"]], template: function PackageViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Actual Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Offer Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, PackageViewComponent_div_22_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Deliverables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PackageViewComponent_div_27_Template, 7, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.package.packageName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.package.eventType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 6, ctx.package.actualPrice, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 9, ctx.package.offerPrice, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.package.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.package.deliverablePricingSummaryList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe], styles: [".container[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n  }\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n    margin-bottom: 0px;\r\n  }\r\n  .card-header[_ngcontent-%COMP%] {\r\n    background-color: #115241;\r\n    color: #fff;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n  }\r\n  .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n  }\r\n  .card-header[_ngcontent-%COMP%]   .recommended[_ngcontent-%COMP%] {\r\n    color: #28a745;\r\n  }\r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n  .price-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n  .events[_ngcontent-%COMP%], .deliverables[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n  .events[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .deliverables[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n  }\r\n  .event[_ngcontent-%COMP%], .deliverable-item[_ngcontent-%COMP%] {\r\n    background-color: #f8f9fa;\r\n    padding: 1rem;\r\n    border-radius: 4px;\r\n    margin-bottom: 1rem;\r\n  }\r\n  .services[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-gap: 0.5rem;\r\n    gap: 0.5rem;\r\n  }\r\n  .deliverable-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-gap: 1rem;\r\n    gap: 1rem;\r\n  }\r\n  .actual-price[_ngcontent-%COMP%]{\r\n    color: #999; \r\n    text-decoration: line-through; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2Utdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxtQkFBbUI7RUFDckI7RUFDQTs7SUFFRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQVc7SUFBWCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBUztJQUFULFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVyxFQUFFLDhDQUE4QztJQUMzRCw2QkFBNkIsRUFBRSxtQ0FBbUM7RUFDcEUiLCJmaWxlIjoicGFja2FnZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTUyNDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIC5yZWNvbW1lbmRlZCB7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxuICB9XHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG4gIC5wcmljZS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIC5ldmVudHMsXHJcbiAgLmRlbGl2ZXJhYmxlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIC5ldmVudHMgaDMsXHJcbiAgLmRlbGl2ZXJhYmxlcyBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAuZXZlbnQsXHJcbiAgLmRlbGl2ZXJhYmxlLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAuc2VydmljZXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICB9XHJcbiAgLmRlbGl2ZXJhYmxlLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG4gIC5hY3R1YWwtcHJpY2V7XHJcbiAgICBjb2xvcjogIzk5OTsgLyogR3JleSBjb2xvciB0byBpbmRpY2F0ZSB0aGUgb3JpZ2luYWwgcHJpY2UgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyAvKiBTdHJpa2V0aHJvdWdoIHRoZSBhY3R1YWwgcHJpY2UgKi9cclxuICB9Il19 */"] });


/***/ }),

/***/ 9277:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/pages/whatsapp/whatsapp.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsappComponent": () => (/* binding */ WhatsappComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services.service */ 5601);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);





class WhatsappComponent {
    constructor(apiService, activeModal, router) {
        this.apiService = apiService;
        this.activeModal = activeModal;
        this.router = router;
        this.message = '';
    }
    close() {
        this.activeModal.close();
    }
    sendMessage() {
        let sendmsg = this.message;
        const encodedMessage = encodeURIComponent(sendmsg);
        window.open(`https://wa.me/917510615035??text=${encodedMessage}`, '_blank');
    }
    ngOnInit() {
        this.message = `Hello Camrin Films,

I'm interested in learning more about your ${this.enquiryData.package} package for a ${this.enquiryData.eventName} event on ${this.enquiryData.eventDate}. Could you please reply me with more details?

Thank you for your time. I look forward to hearing from you soon.

Best regards,
Nashim K N`;
    }
}
WhatsappComponent.ɵfac = function WhatsappComponent_Factory(t) { return new (t || WhatsappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
WhatsappComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WhatsappComponent, selectors: [["app-whatsapp"]], inputs: { enquiryData: "enquiryData" }, decls: 8, vars: 1, consts: [[1, "success-container"], [1, "success-icon"], ["src", "../../../../assets/img/whatsapp.png", 1, "whatsapp"], ["name", "message", "id", "message", 1, "form-control", "floating", "whatsapp-textarea", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function WhatsappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Send Whatsapp Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WhatsappComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WhatsappComponent_Template_button_click_6_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".whatsapp[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n    margin-right: 2px;\r\n}\r\n.whatsapp-textarea[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    height: 150px;\r\n}\r\n.success-container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    \r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n.success-icon[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n    color: #4caf50;\r\n    margin-bottom: 20px;\r\n  }\r\nh2[_ngcontent-%COMP%] {\r\n    color: #2e7d32;\r\n    margin-bottom: 10px;\r\n  }\r\np[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #4caf50;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n  }\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: #45a049;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7RUFDbkM7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJ3aGF0c2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoYXRzYXBwe1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG4ud2hhdHNhcHAtdGV4dGFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLnN1Y2Nlc3MtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU5OyAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5zdWNjZXNzLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6ICM0Y2FmNTA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBjb2xvcjogIzJlN2QzMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 9215:
/*!**********************************************************!*\
  !*** ./src/app/all-modules/pages/package-view/data.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"selectedPackage":{"packageName":"THIRD","eventType":"BRIDE AND GROOM","recommended":false,"actualPrice":343000,"offerPrice":274000,"events":[{"eventName":"ENGAGEMENT","packageId":"6199650","services":[{"service":"Candid Photographer","count":1},{"service":"Candid Videographer","count":2},{"service":"Traditional Photographer","count":1},{"service":"Traditional Videographer","count":1},{"service":"Helicam","count":1},{"service":"Motion Candid Video","count":2}]},{"eventName":"WEDDING","packageId":"5489477","services":[{"service":"Candid Photographer","count":1},{"service":"Candid Videographer","count":2},{"service":"Traditional Photographer","count":1},{"service":"Traditional Videographer","count":1},{"service":"Helicam","count":1},{"service":"Motion Candid Video","count":2}]}],"deliverablePricingSummaryList":[{"packageName":"THIRD","event":"1","deliverableName":"80 LEAF 140 PAGES MAGAZINE ALBUM","price":20000,"count":2},{"packageName":"THIRD","event":"1","deliverableName":"INSTAGRAM REELS","price":1000,"count":8},{"packageName":"THIRD","event":"1","deliverableName":"HIGHLIGHT VIDEO","price":10000,"count":1},{"packageName":"THIRD","event":"1","deliverableName":"FULL LENGTH VIDEO","price":12000,"count":1},{"packageName":"THIRD","event":"1","deliverableName":"EDITED PHOTOS 75 NOS","price":15000,"count":1},{"packageName":"THIRD","event":"1","deliverableName":"PHOTO FRAMES 8 NOS","price":8000,"count":1}]}}');

/***/ })

}]);
//# sourceMappingURL=default-src_app_all-modules_pages_package-view_package-view_component_ts-src_app_all-modules_-9e1e86.js.map
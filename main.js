(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projekte\rsp\src\main.ts */"zUnb");


/***/ }),

/***/ "4Niy":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SidenavListComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSidenavClose = () => this.sidenavClose.emit();
    }
    ngOnInit() { }
}
SidenavListComponent.ɵfac = function SidenavListComponent_Factory(t) { return new (t || SidenavListComponent)(); };
SidenavListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavListComponent, selectors: [["app-sidenav-list"]], outputs: { sidenavClose: "sidenavClose" }, decls: 22, vars: 0, consts: [["mat-list-item", "", "routerLink", "/home", 3, "click"], [1, "nav-caption"], ["mat-list-item", "", "routerLink", "/company", 3, "click"], ["mat-list-item", "", "routerLink", "/products", 3, "click"], ["mat-list-item", "", "routerLink", "/service", 3, "click"], ["mat-list-item", "", "routerLink", "/certification", 3, "click"], ["mat-list-item", "", "routerLink", "/contact", 3, "click"], ["mat-list-item", "", "routerLink", "/legal", 3, "click"]], template: function SidenavListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_1_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_4_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Unternehmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_7_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Produkte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_10_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_13_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Zertifizierung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_16_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_19_listener() { return ctx.onSidenavClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.nav-caption[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InNpZGVuYXYtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmEgOmFjdGl2ZSB7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLm5hdi1jYXB0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 38, vars: 0, consts: [["src", "assets/header_rsp-gmbh.png", "alt", "", 1, "banner"], [1, "container"], [1, "card0"], [1, "card1"], [1, "card2"], [1, "card3"], [1, "welcome-text"], ["src", "assets/iso9001_d__alpha.png", "alt", "", 1, "cert"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kabelkonfektion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Im Sektor Kabelsysteme haben wir uns in 40 Jahren Erfahrung einen Standard erarbeitet, der seinesgleichen sucht ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Elektroger\u00E4tebau");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Komplette, individuelle Ger\u00E4te und Systeme mit der geforderten Elektronik bauen wir erfolgreich am Standort Soest. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Metallbearbeitung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Metallbau ma\u00DFgeschneidert: das ist der Anspruch von RSP aus Soest. Wir fertigen Produkte und L\u00F6sungen nach Ihren Vorgaben ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Auf unser Qualit\u00E4tsmanagement ist immer Verlass. Wir sind zertifiziert nach DIN EN ISO 9001 und der AQAP-Reihe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "RSP GmbH mit Sitz in Soest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Schwerpunkt sind die Kabelkonfektion, Ger\u00E4teherstellung, Elektroger\u00E4tebau und Metallbearbeitung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Unsere Kabelkonstruktionen und ihre Konfektionen sind zugelassen nach VG 96927. RSP aus Soest steht f\u00FCr h\u00F6chste Flexibilit\u00E4t. Das stellen wir seit \u00FCber 40 Jahren erfolgreich unter Beweis. Die RSP GmbH setzt auf langfristige Kundenbindung und Zuverl\u00E4ssigkeit. Ein Beispiel daf\u00FCr ist die langj\u00E4hrige Zusammenarbeit mit dem Unternehmen Rheinmetall, \u00FCber das wir an zahlreichen Defence-Projekten beteiligt sind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".banner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  left: 0;\n  top: 56px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(56px + 30vw);\n  left: 0;\n  gap: 2rem;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  display: grid;\n  grid-template: \"a\" auto \"b\" auto \"c\" auto \"d\" auto \"e\" auto/auto;\n}\n\n@media (min-width: 900px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template: \"a b\" auto \"c d\" auto \"e e\" auto/auto auto auto;\n  }\n}\n\n@media (min-width: 1500px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template: \"a b c d\" auto \"e e e e\" auto/auto auto auto auto;\n  }\n}\n\n.card0[_ngcontent-%COMP%] {\n  grid-area: a;\n  max-width: min(400px, 80vw);\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2em;\n  padding-top: 2em;\n}\n\n.card0[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1em;\n  color: #666;\n}\n\n.card1[_ngcontent-%COMP%] {\n  grid-area: b;\n  max-width: min(400px, 80vw);\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2em;\n}\n\n.card1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1em;\n  color: #666;\n}\n\n.card2[_ngcontent-%COMP%] {\n  grid-area: c;\n  max-width: min(400px, 80vw);\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2em;\n}\n\n.card2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1em;\n  color: #666;\n}\n\n.card3[_ngcontent-%COMP%] {\n  grid-area: d;\n  max-width: min(400px, 80vw);\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2em;\n}\n\n.card3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1em;\n  color: #666;\n}\n\n.welcome-text[_ngcontent-%COMP%] {\n  grid-area: e;\n  margin: 2rem;\n}\n\n.cert[_ngcontent-%COMP%] {\n  float: right;\n  width: 100px;\n  margin: 1em;\n}\n\n.example[_ngcontent-%COMP%] {\n  float: left;\n  width: 400px;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxnRUFDRTtBQUZKOztBQVNBO0VBQ0U7SUFDRSw4REFDRTtFQVBKO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLGdFQUNFO0VBWEo7QUFDRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBY0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQVpKOztBQWVBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBYUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQVhKOztBQWNBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBWUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQVZKOztBQWFBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQVRKOztBQWFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFWRjs7QUFhQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBVkYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG4gIC8vbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDU2cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTZweCArIDMwdncpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAvLyB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOlxyXG4gICAgXCJhXCIgYXV0b1xyXG4gICAgXCJiXCIgYXV0b1xyXG4gICAgXCJjXCIgYXV0b1xyXG4gICAgXCJkXCIgYXV0b1xyXG4gICAgXCJlXCIgYXV0byAvIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTpcclxuICAgICAgXCJhIGJcIiBhdXRvXHJcbiAgICAgIFwiYyBkXCIgYXV0b1xyXG4gICAgICBcImUgZVwiIGF1dG8gLyBhdXRvIGF1dG8gYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGU6XHJcbiAgICAgIFwiYSBiIGMgZFwiIGF1dG9cclxuICAgICAgXCJlIGUgZSBlXCIgYXV0byAvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZDAge1xyXG4gIGdyaWQtYXJlYTogYTtcclxuICBtYXgtd2lkdGg6IG1pbig0MDBweCwgODB2dyk7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcbi5jYXJkMSB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIG1heC13aWR0aDogbWluKDQwMHB4LCA4MHZ3KTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcbi5jYXJkMiB7XHJcbiAgZ3JpZC1hcmVhOiBjO1xyXG4gIG1heC13aWR0aDogbWluKDQwMHB4LCA4MHZ3KTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcbi5jYXJkMyB7XHJcbiAgZ3JpZC1hcmVhOiBkO1xyXG4gIG1heC13aWR0aDogbWluKDQwMHB4LCA4MHZ3KTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcblxyXG4ud2VsY29tZS10ZXh0IHtcclxuICBncmlkLWFyZWE6IGU7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59XHJcblxyXG4uY2VydCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLmV4YW1wbGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDFlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Lmp2":
/*!**********************************************************!*\
  !*** ./src/app/certification/certification.component.ts ***!
  \**********************************************************/
/*! exports provided: CertificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationComponent", function() { return CertificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CertificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
CertificationComponent.ɵfac = function CertificationComponent_Factory(t) { return new (t || CertificationComponent)(); };
CertificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificationComponent, selectors: [["app-certification"]], decls: 14, vars: 0, template: function CertificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zertifizierungen und Zulassungen: Auf unsere Qualit\u00E4t ist immer Verlass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Die RSP GmbH ist zertifiziert nach DIN EN ISO 9001 und nach der AQAP-Reihe\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Wir sind nach DIN EN ISO 9001 und milit\u00E4risch nach der AQAP-Reihe zertifiziert. Bei der DIN-Norm handelt es sich um eine \u00DCbersichtsnorm f\u00FCr den Bereich konfektionierte Kabel und Leitungen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Diese Norm gibt eine \u00DCbersicht \u00FCber konfektionierte Kabel und Leitungen, die in Bauartnormen der Reihe VG 96927 ver\u00F6ffentlicht sind.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Zust\u00E4ndig f\u00FCr die Norm ist das Gremium NA 140-00-04 AA, \u201EKonfektionierte elektrische Kabel und Leitungen\u201C der DIN-Namenstelle Elektrotechnik (NE).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " F\u00FCr unsere Kabel, Kabelb\u00E4ume und Kabelkonfektionen haben wir die Zulassung VG 96927.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ebenso sind RSP-Produkte zertifiziert nach DIN VDE und VDI.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "MzDm":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceComponent.ɵfac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(); };
ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], decls: 34, vars: 0, template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Service der RSP GmbH: Auf unser Qualit\u00E4tsmanagement ist immer Verlass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wir sind zertifiziert nach DIN EN ISO 9001 und nach der AQAP-Reihe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Mit unserem Qualit\u00E4tsmanagement setzen wir unsere Qualit\u00E4tspolitik und unsere Qualit\u00E4tsziele um. Wie gehen wir dabei vor? Die Betriebssicherheit, die Schulung und Motivation unserer Mitarbeiter unterliegen ebenso den Standards unseres Qualit\u00E4tsmanagements wie die Kooperation mit unseren Partnern, Lieferanten und Auftragnehmern.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Besonders im Focus stehen die organisatorischen Abl\u00E4ufe im Unternehmen, insbesondere das Fehler-Controlling und die daraus abgeleiteten Optimierungen unserer Abl\u00E4ufe.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Alle Ma\u00DFnahmen unseres Qualit\u00E4tsmanagements sind in unserem Handbuch festgelegt beschrieben. Regelm\u00E4\u00DFige Pr\u00FCfungen, Reviews und Audits garantieren die Wirksamkeit unseres Qualit\u00E4tsmanagements.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Jeder Mitarbeiter ist f\u00FCr die Qualit\u00E4t unserer Produkte und Dienstleistungen mitverantwortlich und arbeitet an der Umsetzung und Erf\u00FCllung der formulierten Qualit\u00E4tsziele aktiv mit.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ma\u00DFstab f\u00FCr die Qualit\u00E4t unserer Produkte und Dienstleistungen ist allein das Urteil unseres Kunden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Auftragsbezogene Konstruktionen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Projektabwicklungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Defence-Projekte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Einer unserer wichtigsten Partner ist seit Jahren das Unternehmen Rheinmetall, \u00FCber das wir an zahlreichen Defence-Projekte beteiligt sind.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Instandhaltung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " F\u00FCr RSP versteht es sich von selbst, dass wir f\u00FCr unsere Produkte auf Wunsch den kompletten Service und die Instandhaltung anbieten. Auf RSP in Soest ist Verla\u00DF. Wir gehen noch einen Schritt weiter. \u00DCber unser Obsoleszenz-Management und unser Re-Engineering sind wir in der Lage, Bauteile, die es auf dem Markt nicht mehr gibt, nachzubauen. Damit unterst\u00FCtzen wir unsere Kunden bei ihrer Wirtschaftlichkeit.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Obsoleszenz-Management und Re-Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "...macht alte Bauteile wieder lebendig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "RSP baut nach, was es (eigentlich) nicht mehr gibt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Manche Produkte halten l\u00E4nger, als einem lieb ist. Das gro\u00DFe Ganze funktioniert noch bestens, nur ein kleines R\u00E4dchen im Getriebe will nicht mehr. Und dieses alte R\u00E4dchen wird nicht mehr gebaut. Jetzt kommen unser Obsoleszenz-Management und unser Re-Engineering ins Spiel. RSP baut Teile nach, die nicht mehr gebaut werden. Damit bleiben Fahrzeuge und Maschinen weiter im Einsatz. Zum Schutz der Umwelt.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Qmlm":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 34, vars: 0, template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RSP Sch\u00FClke GmbH in Soest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Kabelkonfektion, Elektroger\u00E4tebau, Metallbearbeitung und Service f\u00FCr unsere Kunden\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Die RSP Sch\u00FClke GmbH mit Sitz in Soest, Westfalen, wurde 1977 gegr\u00FCndet, ist seit 1982 eine GmbH und bis heute ein Familienunternehmen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Der Schwerpunkt der RSP GmbH ist die Projekt- und Kleinserienfertigung und Konstruktion bei Kabelkonfektion, Ger\u00E4teherstellung, Elektrotechnik, Elektroger\u00E4te- und Metallbau. Unsere Kabelkonstruktionen und ihre Konfektionen sind zugelassen nach VG 96927. RSP GmbH aus Soest steht f\u00FCr h\u00F6chste Flexibilit\u00E4t. Das stellen wir seit vielen Jahren erfolgreich unter Beweis. Die RSP Sch\u00FClke GmbH setzt auf langfristige Kundenbindung und Zuverl\u00E4ssigkeit. Ein Beispiel daf\u00FCr ist die langj\u00E4hrige Zusammenarbeit mit dem Unternehmen Rheinmetall, \u00FCber das wir an zahlreichen Defence-Projekten beteiligt sind.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Wir nehmen unsere Verantwortung gegen\u00FCber unserer Umwelt sehr ernst. Deshalb stehen Qualit\u00E4t und Nachhaltigkeit f\u00FCr uns an erster Stelle. In diesem Zusammenhang stehen auch unser Obsoleszenz-Management und unser Re-Engineering. Die RSP GmbH baut nach, was es auf dem Markt nicht mehr gibt. Damit bleiben Ger\u00E4te oder Fahrzeuge unserer Kunden l\u00E4nger im Einsatz. Das unterst\u00FCtzt die Wirtschaftlichkeit und schont die Umwelt und ihre Ressourcen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Die wichtigsten Kunden der RSP Sch\u00FClke GmbH sind die Bundeswehr, die Deutsche Post, das Technische Hilfswerk und Rheinmetall. Weitere Kunden sind unter anderen die Landesregierung NRW, die Bundespolizei, Airbus und die Feuerwehr.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Strategische Qualit\u00E4t ist unser Anspruch f\u00FCr heute und morgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Nachhaltig, unserer Umwelt verpflichtet: daf\u00FCr steht die RSP Sch\u00FClke GmbH\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Wir zeichnen uns aus durch Kompetenz, Erfahrung, Flexibilit\u00E4t, Termintreue, Zuverl\u00E4ssigkeit, Diskretion und ein Team von hochqualifizierten und engagierten Mitarbeitern. Genau das sch\u00E4tzen unsere Kunden seit \u00FCber 40 Jahren an der RSP GmbH. In diesen Jahren ist es uns gelungen, zahlreiche Patente und milit\u00E4rische Zulassungen zu erzielen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Unseren Erfolg verdanken wir unserer technologischen Expertise, unserer Wirtschaftlichkeit und Flexibilit\u00E4t. Die Erfahrung und das professionelle K\u00F6nnen der RSP GmbH Mitarbeiter gew\u00E4hrleisten h\u00F6chste Qualit\u00E4t der Produkte und ihre zuverl\u00E4ssige Produktion. Wir sind einer der f\u00FChrenden Anbieter im Bereich Kabel, Kabelkonfektion, Elektrotechnik und Elektroger\u00E4tebau.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " F\u00FCr uns, der RSP GmbH, geht es um mehr als die technische Qualit\u00E4t unserer Produkte und Serviceleistungen. Unser Anspruch sind stets erstklassige Produkte und Dienstleistungen zu wettbewerbsf\u00E4higen Preisen. Die Zukunftsperspektive der RSP Sch\u00FClke GmbH ist die kontinuierliche Verbesserung des Bestehenden: morgen besser als heute ist unser Anspruch. Um das zu verwirklichen stehen wir in einem kontinuierlichen und konstruktiven Dialog mit unseren Kunden und Lieferanten und ggf. den zust\u00E4ndigen Beh\u00F6rden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Die F\u00E4higkeit und Kompetenz der RSP GmbH garantiert h\u00F6chste Qualit\u00E4t unserer Leistungen, mit denen wir Anforderungen und Erwartungen unserer Kunden erf\u00FCllen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Bei all unserem Tun f\u00FChlen wir uns, unseren Mitarbeitern, der Gesellschaft und der Umwelt verpflichtet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "RSP GmbH in Soest: auf diese Kunden sind wir stolz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Wir setzen auf langfristige Kundenbeziehungen seit 40 Jahren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Die RSP Sch\u00FClke GmbH zeichnet sich durch Kompetenz, Erfahrung, Flexibilit\u00E4t, Termintreue, Zuverl\u00E4ssigkeit, Diskretion und einem Team von hochqualifizierten und engagierten Mitarbeitern aus. Genau das sch\u00E4tzen unsere Kunden seit \u00FCber 40 Jahren an uns. In diesen Jahren ist es der RSP GmbH gelungen, die in der Branche wichtigen Zertifizierungen und Zulassungen, auch die milit\u00E4rischen Zulassungen am Standort in Soest, zu erzielen. Unser Kompetenzspektrum reicht vom Kabelbau, der Kabelkonfektion, Elektroger\u00E4tebau bis hin zur Metallbearbeitung. Die RSP Sch\u00FClke GmbH konstruiert und baut nach Vorgaben der Kunden oder baut mit dem Re-Engineering Bauteile nach, die es nicht mehr gibt.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Wir sind stolz auf langj\u00E4hrige Kunden. Die Hauptkunden der RSP GmbH sind die Bundeswehr, die Deutsche Post, das Technische Hilfswerk und Rheinmetall. Weitere Kunden sind unter anderen die Landesregierung NRW, die Bundespolizei, Airbus und die Feuerwehr.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "4Niy");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/header/header.component */ "umHo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'rsp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["role", "navigation"], ["sidenav", ""], [3, "sidenavClose"], [3, "sidenavToggle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidenav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function AppComponent_Template_app_sidenav_list_sidenavClose_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_header_sidenavToggle_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_2__["SidenavListComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: auto;\n}\n\n@media (min-width: 900px) {\n  main[_ngcontent-%COMP%] {\n    max-width: 900px;\n  }\n}\n\n@media (min-width: 1500px) {\n  main[_ngcontent-%COMP%] {\n    max-width: 60vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBRUEsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lcixcclxubWF0LXNpZGVuYXYtY29udGVudCxcclxubWF0LXNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5tYWluIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vIG1heC13aWR0aDogNTByZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICBtYWluIHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legal/legal.component */ "rjgQ");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company/company.component */ "Qmlm");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/header/header.component */ "umHo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "4Niy");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./certification/certification.component */ "Lmp2");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__["LegalComponent"],
        _company_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"],
        _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
        _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_16__["SidenavListComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
        _certification_certification_component__WEBPACK_IMPORTED_MODULE_19__["CertificationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 14, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " RSP-Sch\u00FClke GmbH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ferdinand-Gabriel-Weg 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "59494 Soest\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tel.: +49 (0)2921 7809-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fax: +49 (0)2921 7809-40\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-Mail: info@rsp-schuelke.de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "rjgQ":
/*!******************************************!*\
  !*** ./src/app/legal/legal.component.ts ***!
  \******************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LegalComponent {
    constructor() { }
    ngOnInit() {
    }
}
LegalComponent.ɵfac = function LegalComponent_Factory(t) { return new (t || LegalComponent)(); };
LegalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LegalComponent, selectors: [["app-legal"]], decls: 315, vars: 0, consts: [[2, "list-style", "none"], ["href", "https://dg-datenschutz.de/datenschutz-dienstleistungen/datenschutz-audit/"], ["href", "https://www.wbs-law.de/taetigkeitsgebiete/medienrecht/"]], template: function LegalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Anbieter und inhaltlich Verantwortlicher gem\u00E4\u00DF MDStV:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "RSP-Sch\u00FClke GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ferdinand-Gabriel-Weg 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 59494 Soest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Telefon: +49 (0)2921 7809-0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Telefax: +49 (0)2921 7809-40 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " E-Mail: info@rsp-schuelke.de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Internet: www.rsp-schuelke.de\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gesch\u00E4ftsf\u00FChrer: Roswitha Sch\u00FClke, J\u00FCrgen Becker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " AG Arnsberg, HRB 5612 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Steuer-Nr.: 343/5703/0699 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " USt.-Ident-Nr. DE 126639652\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Webdesign, Webmaster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dr. Mark Sch\u00FClke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ferdinand-Gabriel-Weg 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 59494 Soest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " E-Mail: m.schuelke@rsp-schuelke.de\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Disclaimer, Haftungsausschluss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1. Inhalt des Onlineangebotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Der Autor \u00FCbernimmt keinerlei Gew\u00E4hr f\u00FCr die Aktualit\u00E4t, Korrektheit, Vollst\u00E4ndigkeit oder Qualit\u00E4t der bereitgestellten Informationen. Haftungsanspr\u00FCche gegen den Autor, welche sich auf Sch\u00E4den materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollst\u00E4ndiger Informationen verursacht wurden, sind grunds\u00E4tzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vors\u00E4tzliches oder grob fahrl\u00E4ssiges Verschulden vorliegt.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Alle Angebote sind freibleibend und unverbindlich. Der Autor beh\u00E4lt es sich ausdr\u00FCcklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ank\u00FCndigung zu ver\u00E4ndern, zu erg\u00E4nzen, zu l\u00F6schen oder die Ver\u00F6ffentlichung zeitweise oder endg\u00FCltig einzustellen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2. Verweise und Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Bei direkten oder indirekten Verweisen auf fremde Webseiten (\"Hyperlinks\"), die au\u00DFerhalb des Verantwortungsbereiches des Autors liegen, w\u00FCrde eine Haftungsverpflichtung ausschlie\u00DFlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch m\u00F6glich und zumutbar w\u00E4re, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Der Autor erkl\u00E4rt hiermit ausdr\u00FCcklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zuk\u00FCnftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verkn\u00FCpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdr\u00FCcklich von allen Inhalten aller gelinkten /verkn\u00FCpften Seiten, die nach der Linksetzung ver\u00E4ndert wurden. Diese Feststellung gilt f\u00FCr alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie f\u00FCr Fremdeintr\u00E4ge in vom Autor eingerichteten G\u00E4steb\u00FCchern, Diskussionsforen und Mailinglisten. F\u00FCr illegale, fehlerhafte oder unvollst\u00E4ndige Inhalte und insbesondere f\u00FCr Sch\u00E4den, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der \u00FCber Links auf die jeweilige Ver\u00F6ffentlichung lediglich verweist.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3. Urheber- und Kennzeichenrecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zur\u00FCckzugreifen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte gesch\u00FCtzten Marken- und Warenzeichen unterliegen uneingeschr\u00E4nkt den Bestimmungen des jeweils g\u00FCltigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigent\u00FCmer. Allein aufgrund der blo\u00DFen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter gesch\u00FCtzt sind!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Das Copyright f\u00FCr ver\u00F6ffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielf\u00E4ltigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdr\u00FCckliche Zustimmung des Autors nicht gestattet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "4. Datenschutz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Sofern innerhalb des Internetangebotes die M\u00F6glichkeit zur Eingabe pers\u00F6nlicher oder gesch\u00E4ftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdr\u00FCcklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist - soweit technisch m\u00F6glich und zumutbar - auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben ver\u00F6ffentlichten Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie Emailadressen durch Dritte zur \u00DCbersendung von nicht ausdr\u00FCcklich angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails bei Verst\u00F6ssen gegen dieses Verbot sind ausdr\u00FCcklich vorbehalten.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "5. Rechtswirksamkeit dieses Haftungsausschlusses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollst\u00E4ndig entsprechen sollten, bleiben die \u00FCbrigen Teile des Dokumentes in ihrem Inhalt und ihrer G\u00FCltigkeit davon unber\u00FChrt.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Wir freuen uns sehr \u00FCber Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert f\u00FCr die Gesch\u00E4ftsleitung der RSP-Sch\u00FClke GmbH. Eine Nutzung der Internetseiten der RSP-Sch\u00FClke GmbH ist grunds\u00E4tzlich ohne jede Angabe personenbezogener Daten m\u00F6glich. Sofern eine betroffene Person besondere Services unseres Unternehmens \u00FCber unsere Internetseite in Anspruch nehmen m\u00F6chte, k\u00F6nnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht f\u00FCr eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in \u00DCbereinstimmung mit den f\u00FCr die RSP-Sch\u00FClke GmbH geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerkl\u00E4rung m\u00F6chte unser Unternehmen die \u00D6ffentlichkeit \u00FCber Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerkl\u00E4rung \u00FCber die ihnen zustehenden Rechte aufgekl\u00E4rt.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Die RSP-Sch\u00FClke GmbH hat als f\u00FCr die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Ma\u00DFnahmen umgesetzt, um einen m\u00F6glichst l\u00FCckenlosen Schutz der \u00FCber diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch k\u00F6nnen Internetbasierte Daten\u00FCbertragungen grunds\u00E4tzlich Sicherheitsl\u00FCcken aufweisen, sodass ein absoluter Schutz nicht gew\u00E4hrleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu \u00FCbermitteln.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "1. Begriffsbestimmungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Die Datenschutzerkl\u00E4rung der RSP-Sch\u00FClke GmbH beruht auf den Begrifflichkeiten, die durch den Europ\u00E4ischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerkl\u00E4rung soll sowohl f\u00FCr die \u00D6ffentlichkeit als auch f\u00FCr unsere Kunden und Gesch\u00E4ftspartner einfach lesbar und verst\u00E4ndlich sein. Um dies zu gew\u00E4hrleisten, m\u00F6chten wir vorab die verwendeten Begrifflichkeiten erl\u00E4utern.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Wir verwenden in dieser Datenschutzerkl\u00E4rung unter anderem die folgenden Begriffe:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "a) personenbezogene Daten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\u00FCrliche Person (im Folgenden \u201Ebetroffene Person\u201C) beziehen. Als identifizierbar wird eine nat\u00FCrliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identit\u00E4t dieser nat\u00FCrlichen Person sind, identifiziert werden kann. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "b) betroffene Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Betroffene Person ist jede identifizierte oder identifizierbare nat\u00FCrliche Person, deren personenbezogene Daten von dem f\u00FCr die Verarbeitung Verantwortlichen verarbeitet werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "c) Verarbeitung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgef\u00FChrte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Ver\u00E4nderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch \u00DCbermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verkn\u00FCpfung, die Einschr\u00E4nkung, das L\u00F6schen oder die Vernichtung. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "d) Einschr\u00E4nkung der Verarbeitung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Einschr\u00E4nkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre k\u00FCnftige Verarbeitung einzuschr\u00E4nken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "e) Profiling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte pers\u00F6nliche Aspekte, die sich auf eine nat\u00FCrliche Person beziehen, zu bewerten, insbesondere, um Aspekte bez\u00FCglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, pers\u00F6nlicher Vorlieben, Interessen, Zuverl\u00E4ssigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser nat\u00FCrlichen Person zu analysieren oder vorherzusagen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "f) Pseudonymisierung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zus\u00E4tzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden k\u00F6nnen, sofern diese zus\u00E4tzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Ma\u00DFnahmen unterliegen, die gew\u00E4hrleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren nat\u00FCrlichen Person zugewiesen werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "g) Verantwortlicher oder f\u00FCr die Verarbeitung Verantwortlicher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Verantwortlicher oder f\u00FCr die Verarbeitung Verantwortlicher ist die nat\u00FCrliche oder juristische Person, Beh\u00F6rde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen \u00FCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise k\u00F6nnen die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "h) Auftragsverarbeiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Auftragsverarbeiter ist eine nat\u00FCrliche oder juristische Person, Beh\u00F6rde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "i) Empf\u00E4nger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Empf\u00E4nger ist eine nat\u00FCrliche oder juristische Person, Beh\u00F6rde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabh\u00E4ngig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Beh\u00F6rden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten m\u00F6glicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empf\u00E4nger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "j) Dritter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Dritter ist eine nat\u00FCrliche oder juristische Person, Beh\u00F6rde, Einrichtung oder andere Stelle au\u00DFer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "k) Einwilligung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Einwilligung ist jede von der betroffenen Person freiwillig f\u00FCr den bestimmten Fall in informierter Weise und unmissverst\u00E4ndlich abgegebene Willensbekundung in Form einer Erkl\u00E4rung oder einer sonstigen eindeutigen best\u00E4tigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "2. Name und Anschrift des f\u00FCr die Verarbeitung Verantwortlichen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europ\u00E4ischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "RSP-Sch\u00FClke GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Ferdinand-Gabriel-Weg 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "59494 Soest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Deutschland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Tel.: 02921 7809-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "E-Mail: info@rsp-schuelke.de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Website: www.rsp-schuelke.de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "3. Erfassung von allgemeinen Daten und Informationen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Die Internetseite der RSP-Sch\u00FClke GmbH erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden k\u00F6nnen die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche \u00FCber ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige \u00E4hnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die RSP-Sch\u00FClke GmbH keine R\u00FCckschl\u00FCsse auf die betroffene Person. Diese Informationen werden vielmehr ben\u00F6tigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung f\u00FCr diese zu optimieren, (3) die dauerhafte Funktionsf\u00E4higkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gew\u00E4hrleisten sowie (4) um Strafverfolgungsbeh\u00F6rden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die RSP-Sch\u00FClke GmbH daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erh\u00F6hen, um letztlich ein optimales Schutzniveau f\u00FCr die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "4. Routinem\u00E4\u00DFige L\u00F6schung und Sperrung von personenbezogenen Daten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Der f\u00FCr die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur f\u00FCr den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europ\u00E4ischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der f\u00FCr die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Entf\u00E4llt der Speicherungszweck oder l\u00E4uft eine vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber oder einem anderen zust\u00E4ndigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinem\u00E4\u00DFig und entsprechend den gesetzlichen Vorschriften gesperrt oder gel\u00F6scht.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "5. Rechte der betroffenen Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "a) Recht auf Best\u00E4tigung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Jede betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber einger\u00E4umte Recht, von dem f\u00FCr die Verarbeitung Verantwortlichen eine Best\u00E4tigung dar\u00FCber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. M\u00F6chte eine betroffene Person dieses Best\u00E4tigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\u00FCr die Verarbeitung Verantwortlichen wenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "b) Recht auf Auskunft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, jederzeit von dem f\u00FCr die Verarbeitung Verantwortlichen unentgeltliche Auskunft \u00FCber die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europ\u00E4ische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft \u00FCber folgende Informationen zugestanden: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "die Verarbeitungszwecke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "die Kategorien personenbezogener Daten, die verarbeitet werden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " die Empf\u00E4nger oder Kategorien von Empf\u00E4ngern, gegen\u00FCber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empf\u00E4ngern in Drittl\u00E4ndern oder bei internationalen Organisationen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " falls m\u00F6glich die geplante Dauer, f\u00FCr die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht m\u00F6glich ist, die Kriterien f\u00FCr die Festlegung dieser Dauer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " das Bestehen eines Rechts auf Berichtigung oder L\u00F6schung der sie betreffenden personenbezogenen Daten oder auf Einschr\u00E4nkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "das Bestehen eines Beschwerderechts bei einer Aufsichtsbeh\u00F6rde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verf\u00FCgbaren Informationen \u00FCber die Herkunft der Daten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " das Bestehen einer automatisierten Entscheidungsfindung einschlie\u00DFlich Profiling gem\u00E4\u00DF Artikel 22 Abs.1 und 4 DS-GVO und \u2014 zumindest in diesen F\u00E4llen \u2014 aussagekr\u00E4ftige Informationen \u00FCber die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung f\u00FCr die betroffene Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Ferner steht der betroffenen Person ein Auskunftsrecht dar\u00FCber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation \u00FCbermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im \u00DCbrigen das Recht zu, Auskunft \u00FCber die geeigneten Garantien im Zusammenhang mit der \u00DCbermittlung zu erhalten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " M\u00F6chte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\u00FCr die Verarbeitung Verantwortlichen wenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "c) Recht auf Berichtigung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, die unverz\u00FCgliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Ber\u00FCcksichtigung der Zwecke der Verarbeitung, die Vervollst\u00E4ndigung unvollst\u00E4ndiger personenbezogener Daten \u2014 auch mittels einer erg\u00E4nzenden Erkl\u00E4rung \u2014 zu verlangen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " M\u00F6chte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\u00FCr die Verarbeitung Verantwortlichen wenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "d) Recht auf L\u00F6schung (Recht auf Vergessen werden)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverz\u00FCglich gel\u00F6scht werden, sofern einer der folgenden Gr\u00FCnde zutrifft und soweit die Verarbeitung nicht erforderlich ist: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Die personenbezogenen Daten wurden f\u00FCr solche Zwecke erhoben oder auf sonstige Weise verarbeitet, f\u00FCr welche sie nicht mehr notwendig sind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gem\u00E4\u00DF Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO st\u00FCtzte, und es fehlt an einer anderweitigen Rechtsgrundlage f\u00FCr die Verarbeitung. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Die betroffene Person legt gem\u00E4\u00DF Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gr\u00FCnde f\u00FCr die Verarbeitung vor, oder die betroffene Person legt gem\u00E4\u00DF Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Die personenbezogenen Daten wurden unrechtm\u00E4\u00DFig verarbeitet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Die L\u00F6schung der personenbezogenen Daten ist zur Erf\u00FCllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gem\u00E4\u00DF Art. 8 Abs. 1 DS-GVO erhoben. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Sofern einer der oben genannten Gr\u00FCnde zutrifft und eine betroffene Person die L\u00F6schung von personenbezogenen Daten, die bei der RSP-Sch\u00FClke GmbH gespeichert sind, veranlassen m\u00F6chte, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\u00FCr die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der RSP-Sch\u00FClke GmbH wird veranlassen, dass dem L\u00F6schverlangen unverz\u00FCglich nachgekommen wird. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Wurden die personenbezogenen Daten von der RSP-Sch\u00FClke GmbH \u00F6ffentlich gemacht und ist unser Unternehmen als Verantwortlicher gem\u00E4\u00DF Art. 17 Abs. 1 DS-GVO zur L\u00F6schung der personenbezogenen Daten verpflichtet, so trifft die RSP-Sch\u00FClke GmbH unter Ber\u00FCcksichtigung der verf\u00FCgbaren Technologie und der Implementierungskosten angemessene Ma\u00DFnahmen, auch technischer Art, um andere f\u00FCr die Datenverarbeitung Verantwortliche, welche die ver\u00F6ffentlichten personenbezogenen Daten verarbeiten, dar\u00FCber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen f\u00FCr die Datenverarbeitung Verantwortlichen die L\u00F6schung s\u00E4mtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Der Mitarbeiter der RSP-Sch\u00FClke GmbH wird im Einzelfall das Notwendige veranlassen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "e) Recht auf Einschr\u00E4nkung der Verarbeitung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, von dem Verantwortlichen die Einschr\u00E4nkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar f\u00FCr eine Dauer, die es dem Verantwortlichen erm\u00F6glicht, die Richtigkeit der personenbezogenen Daten zu \u00FCberpr\u00FCfen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Die Verarbeitung ist unrechtm\u00E4\u00DFig, die betroffene Person lehnt die L\u00F6schung der personenbezogenen Daten ab und verlangt stattdessen die Einschr\u00E4nkung der Nutzung der personenbezogenen Daten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " Der Verantwortliche ben\u00F6tigt die personenbezogenen Daten f\u00FCr die Zwecke der Verarbeitung nicht l\u00E4nger, die betroffene Person ben\u00F6tigt sie jedoch zur Geltendmachung, Aus\u00FCbung oder Verteidigung von Rechtsanspr\u00FCchen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gr\u00FCnde des Verantwortlichen gegen\u00FCber denen der betroffenen Person \u00FCberwiegen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die Einschr\u00E4nkung von personenbezogenen Daten, die bei der RSP-Sch\u00FClke GmbH gespeichert sind, verlangen m\u00F6chte, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\u00FCr die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der RSP-Sch\u00FClke GmbH wird die Einschr\u00E4nkung der Verarbeitung veranlassen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "f) Recht auf Daten\u00FCbertragbarkeit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, g\u00E4ngigen und maschinenlesbaren Format zu erhalten. Sie hat au\u00DFerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu \u00FCbermitteln, sofern die Verarbeitung auf der Einwilligung gem\u00E4\u00DF Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gem\u00E4\u00DF Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht f\u00FCr die Wahrnehmung einer Aufgabe erforderlich ist, die im \u00F6ffentlichen Interesse liegt oder in Aus\u00FCbung \u00F6ffentlicher Gewalt erfolgt, welche dem Verantwortlichen \u00FCbertragen wurde. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Ferner hat die betroffene Person bei der Aus\u00FCbung ihres Rechts auf Daten\u00FCbertragbarkeit gem\u00E4\u00DF Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen \u00FCbermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeintr\u00E4chtigt werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Zur Geltendmachung des Rechts auf Daten\u00FCbertragbarkeit kann sich die betroffene Person jederzeit an einen Mitarbeiter der RSP-Sch\u00FClke GmbH wenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "g) Recht auf Widerspruch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, aus Gr\u00FCnden, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch f\u00FCr ein auf diese Bestimmungen gest\u00FCtztes Profiling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Die RSP-Sch\u00FClke GmbH verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir k\u00F6nnen zwingende schutzw\u00FCrdige Gr\u00FCnde f\u00FCr die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person \u00FCberwiegen, oder die Verarbeitung dient der Geltendmachung, Aus\u00FCbung oder Verteidigung von Rechtsanspr\u00FCchen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Verarbeitet die RSP-Sch\u00FClke GmbH personenbezogene Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch f\u00FCr das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegen\u00FCber der RSP-Sch\u00FClke GmbH der Verarbeitung f\u00FCr Zwecke der Direktwerbung, so wird die RSP-Sch\u00FClke GmbH die personenbezogenen Daten nicht mehr f\u00FCr diese Zwecke verarbeiten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Zudem hat die betroffene Person das Recht, aus Gr\u00FCnden, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der RSP-Sch\u00FClke GmbH zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gem\u00E4\u00DF Art. 89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erf\u00FCllung einer im \u00F6ffentlichen Interesse liegenden Aufgabe erforderlich. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Zur Aus\u00FCbung des Rechts auf Widerspruch kann sich die betroffene Person direkt jeden Mitarbeiter der RSP-Sch\u00FClke GmbH oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszu\u00FCben, bei denen technische Spezifikationen verwendet werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " h) Automatisierte Entscheidungen im Einzelfall einschlie\u00DFlich Profiling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, nicht einer ausschlie\u00DFlich auf einer automatisierten Verarbeitung \u2014 einschlie\u00DFlich Profiling \u2014 beruhenden Entscheidung unterworfen zu werden, die ihr gegen\u00FCber rechtliche Wirkung entfaltet oder sie in \u00E4hnlicher Weise erheblich beeintr\u00E4chtigt, sofern die Entscheidung (1) nicht f\u00FCr den Abschluss oder die Erf\u00FCllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zul\u00E4ssig ist und diese Rechtsvorschriften angemessene Ma\u00DFnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit ausdr\u00FCcklicher Einwilligung der betroffenen Person erfolgt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Ist die Entscheidung (1) f\u00FCr den Abschluss oder die Erf\u00FCllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdr\u00FCcklicher Einwilligung der betroffenen Person, trifft die RSP-Sch\u00FClke GmbH angemessene Ma\u00DFnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung geh\u00F6rt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " M\u00F6chte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\u00FCr die Verarbeitung Verantwortlichen wenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\u00E4ischen Richtlinien- und Verordnungsgeber gew\u00E4hrte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " M\u00F6chte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\u00FCr die Verarbeitung Verantwortlichen wenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "6. Rechtsgrundlage der Verarbeitung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage f\u00FCr Verarbeitungsvorg\u00E4nge, bei denen wir eine Einwilligung f\u00FCr einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erf\u00FCllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorg\u00E4ngen der Fall ist, die f\u00FCr eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt f\u00FCr solche Verarbeitungsvorg\u00E4nge die zur Durchf\u00FChrung vorvertraglicher Ma\u00DFnahmen erforderlich sind, etwa in F\u00E4llen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erf\u00FCllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen F\u00E4llen k\u00F6nnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen nat\u00FCrlichen Person zu sch\u00FCtzen. Dies w\u00E4re beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden w\u00FCrde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden m\u00FCssten. Dann w\u00FCrde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich k\u00F6nnten Verarbeitungsvorg\u00E4nge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorg\u00E4nge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht \u00FCberwiegen. Solche Verarbeitungsvorg\u00E4nge sind uns insbesondere deshalb gestattet, weil sie durch den Europ\u00E4ischen Gesetzgeber besonders erw\u00E4hnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein k\u00F6nnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erw\u00E4gungsgrund 47 Satz 2 DS-GVO).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " 7. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchf\u00FChrung unserer Gesch\u00E4ftst\u00E4tigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "8. Dauer, f\u00FCr die die personenbezogenen Daten gespeichert werden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Das Kriterium f\u00FCr die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinem\u00E4\u00DFig gel\u00F6scht, sofern sie nicht mehr zur Vertragserf\u00FCllung oder Vertragsanbahnung erforderlich sind.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " 9. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit f\u00FCr den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; m\u00F6gliche Folgen der Nichtbereitstellung\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Wir kl\u00E4ren Sie dar\u00FCber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verf\u00FCgung stellt, die in der Folge durch uns verarbeitet werden m\u00FCssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschlie\u00DFt. Eine Nichtbereitstellung der personenbezogenen Daten h\u00E4tte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden k\u00F6nnte. Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter kl\u00E4rt den Betroffenen einzelfallbezogen dar\u00FCber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder f\u00FCr den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten h\u00E4tte.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "10. Bestehen einer automatisierten Entscheidungsfindung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Diese Muster Datenschutzerkl\u00E4rung wurde durch den Datenschutzerkl\u00E4rungs-Generator der DGD Deutsche Gesellschaft f\u00FCr Datenschutz GmbH, die ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Datenschutz-Audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " durchf\u00FChrt, in Kooperation mit der ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Medienrechtskanzlei WILDE BEUGER SOLMECKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " erstellt.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWdhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "umHo":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");








class HeaderComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 28, vars: 0, consts: [["color", "primary"], ["fxHide.gt-sm", ""], ["mat-icon-button", "", 3, "click"], ["mat-button", "", "routerLink", "/home"], ["src", "assets/logo-rsp1.png", 1, "logo"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "end", "fxHide.lt-md", ""], ["fxLayoutGap", "15px", 1, "navigation-items"], ["mat-button", "", "routerLink", "/company"], ["mat-button", "", "routerLink", "/products"], ["mat-button", "", "routerLink", "/service"], ["mat-button", "", "routerLink", "/certification"], ["mat-button", "", "routerLink", "/contact"], ["mat-button", "", "routerLink", "/legal"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.onToggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Unternehmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Produkte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Zertifizierung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-height: 56px;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTs7RUFFRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFHRjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FBUkYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5hOmhvdmVyLFxyXG5hOmFjdGl2ZSB7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4ubmF2aWdhdGlvbi1pdGVtcyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi8vIG1hdC10b29sYmFyIHtcclxuLy8gICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4vLyAgIG1hdC10b29sYmFyIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuLmxvZ28ge1xyXG4gIG1heC1oZWlnaHQ6IDU2cHg7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


const _c0 = ["*"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "layout-wrapper"], ["fxFlex", "80%", "fxFlex.lt-md", "100%", 1, "flex-wrapper"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]], styles: [".layout-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.flex-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmZsZXgtd3JhcHBlcntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company/company.component */ "Qmlm");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legal/legal.component */ "rjgQ");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certification/certification.component */ "Lmp2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_1__["CompanyComponent"] },
    { path: 'service', component: _service_service_component__WEBPACK_IMPORTED_MODULE_4__["ServiceComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'certification', component: _certification_certification_component__WEBPACK_IMPORTED_MODULE_7__["CertificationComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'legal', component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_2__["LegalComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 24, vars: 0, template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Von Kabel bis Metall: wir von der RSP GmbH verwirklichen die Projekte unserer Kunden\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zuverl\u00E4ssig und in h\u00F6chster Qualit\u00E4t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Das Produktportfolio der RSP Sch\u00FClke GmbH aus Soest ist sehr umfassend und reicht vom speziellen Kabel, \u00FCber komplette Kabelsysteme nach Anforderungen unserer Kunden, bis zu ultramodernen und zweckm\u00E4\u00DFigen Haltestellen f\u00FCr den \u00D6ffentlichen Nahverkehr. F\u00FCr die RSP GmbH versteht es sich von selbst, dass wir f\u00FCr unsere Produkte auf Wunsch den kompletten Service und die Instandhaltung anbieten. Auf uns ist Verlass.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Produktportfolio der RSP Sch\u00FClke GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Kabelsysteme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Im Sektor Kabelsysteme hat sich die RSP Sch\u00FClke GmbH in 40 Jahren Erfahrung einen Standard erarbeitet, der seinesgleichen sucht. Wir fertigen verschiedenste Systemkabel, Kabelb\u00E4ume, Sonderkabel, Prototypenkabel und Kabeltrommeln. Dies insbesondere f\u00FCr den milit\u00E4rischen Bereich. Zugelassen sind unsere Kabel und Kabelkonfektionen gem\u00E4\u00DF VG 96927.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ger\u00E4te & Elektronik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Komplette, individuelle Ger\u00E4te und Systeme mit der geforderten Elektronik bauen wir, die RSP GmbH, erfolgreich seit \u00FCber 40 Jahren am Standort Soest, sowohl in Serie wie auch Einzelst\u00FCcke nach MIL und VG, VDI und VDE.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Metallbau & \u00D6VNP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Metallbau ma\u00DFgeschneidert: das ist der Anspruch der RSP GmbH aus Soest. Im Bereich Metallbau und \u00D6ffentlicher Nahverkehr fertigen wir nichtgepanzerte Produkte und L\u00F6sungen nach den Vorgaben des Kunden, sowie Serienprodukte f\u00FCr die Deutsche Post.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ausr\u00FCstung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hier fehlt noch Text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
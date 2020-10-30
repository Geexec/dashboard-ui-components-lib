(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('geexec-dashboard-components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['geexec-dashboard-components'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var GeexecDashboardComponentsService = /** @class */ (function () {
        function GeexecDashboardComponentsService() {
        }
        return GeexecDashboardComponentsService;
    }());
    GeexecDashboardComponentsService.ɵfac = function GeexecDashboardComponentsService_Factory(t) { return new (t || GeexecDashboardComponentsService)(); };
    GeexecDashboardComponentsService.ɵprov = i0.ɵɵdefineInjectable({ token: GeexecDashboardComponentsService, factory: GeexecDashboardComponentsService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GeexecDashboardComponentsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var GeexecDashboardComponentsComponent = /** @class */ (function () {
        function GeexecDashboardComponentsComponent() {
        }
        GeexecDashboardComponentsComponent.prototype.ngOnInit = function () {
        };
        return GeexecDashboardComponentsComponent;
    }());
    GeexecDashboardComponentsComponent.ɵfac = function GeexecDashboardComponentsComponent_Factory(t) { return new (t || GeexecDashboardComponentsComponent)(); };
    GeexecDashboardComponentsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeexecDashboardComponentsComponent, selectors: [["lib-geexec-dashboard-components"]], decls: 2, vars: 0, template: function GeexecDashboardComponentsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " geexec-dashboard-components works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GeexecDashboardComponentsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-geexec-dashboard-components',
                        template: "\n    <p>\n      geexec-dashboard-components works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var _c0 = ["*"];
    var GxHeadingComponent = /** @class */ (function () {
        function GxHeadingComponent() {
        }
        GxHeadingComponent.prototype.ngOnInit = function () {
        };
        return GxHeadingComponent;
    }());
    GxHeadingComponent.ɵfac = function GxHeadingComponent_Factory(t) { return new (t || GxHeadingComponent)(); };
    GxHeadingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GxHeadingComponent, selectors: [["gx-heading"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function GxHeadingComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GxHeadingComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gx-heading',
                        templateUrl: './gx-heading.component.html',
                        styleUrls: ['./gx-heading.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var GxInputComponent = /** @class */ (function () {
        function GxInputComponent() {
        }
        GxInputComponent.prototype.ngOnInit = function () {
        };
        return GxInputComponent;
    }());
    GxInputComponent.ɵfac = function GxInputComponent_Factory(t) { return new (t || GxInputComponent)(); };
    GxInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GxInputComponent, selectors: [["gx-input"]], decls: 2, vars: 0, template: function GxInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "gx-input works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GxInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gx-input',
                        templateUrl: './gx-input.component.html',
                        styleUrls: ['./gx-input.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var GeexecDashboardComponentsModule = /** @class */ (function () {
        function GeexecDashboardComponentsModule() {
        }
        return GeexecDashboardComponentsModule;
    }());
    GeexecDashboardComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: GeexecDashboardComponentsModule });
    GeexecDashboardComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GeexecDashboardComponentsModule_Factory(t) { return new (t || GeexecDashboardComponentsModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GeexecDashboardComponentsModule, { declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent], exports: [GeexecDashboardComponentsComponent, GxHeadingComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GeexecDashboardComponentsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent],
                        imports: [],
                        exports: [GeexecDashboardComponentsComponent, GxHeadingComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of geexec-dashboard-components
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GeexecDashboardComponentsComponent = GeexecDashboardComponentsComponent;
    exports.GeexecDashboardComponentsModule = GeexecDashboardComponentsModule;
    exports.GeexecDashboardComponentsService = GeexecDashboardComponentsService;
    exports.GxHeadingComponent = GxHeadingComponent;
    exports.GxInputComponent = GxInputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=geexec-dashboard-components.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('geexec-dashboard-components', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['geexec-dashboard-components'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, i1) { 'use strict';

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
    GxInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GxInputComponent, selectors: [["gx-input"]], inputs: { type: "type", required: "required", label: "label" }, decls: 6, vars: 3, consts: [[1, "group"], [3, "type", "required"], [1, "highlight"], [1, "bar"]], template: function GxInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "input", 1);
                i0.ɵɵelement(2, "span", 2);
                i0.ɵɵelement(3, "span", 3);
                i0.ɵɵelementStart(4, "label");
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate("type", ctx.type);
                i0.ɵɵpropertyInterpolate("required", ctx.required);
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(ctx.label);
            }
        }, styles: [".group[_ngcontent-%COMP%]{margin:20px 0;position:relative}input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #757575;display:block;font-size:14px;padding:10px 10px 10px 5px;width:300px}input[_ngcontent-%COMP%]:focus{outline:none}label[_ngcontent-%COMP%]{-moz-transition:.2s ease all;-webkit-transition:all .2s ease;color:#999;font-size:18px;font-weight:400;left:5px;pointer-events:none;position:absolute;top:10px;transition:all .2s ease}input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{color:#5264ae;font-size:14px;top:-10px}.bar[_ngcontent-%COMP%]{display:block;position:relative;width:300px}.bar[_ngcontent-%COMP%]:after, .bar[_ngcontent-%COMP%]:before{-moz-transition:.2s ease all;-webkit-transition:all .2s ease;background:#5264ae;bottom:1px;content:\"\";height:2px;position:absolute;transition:all .2s ease;width:0}.bar[_ngcontent-%COMP%]:before{left:50%}.bar[_ngcontent-%COMP%]:after{right:50%}input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:after, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before{width:50%}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GxInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gx-input',
                        templateUrl: './gx-input.component.html',
                        styleUrls: ['./gx-input.component.css']
                    }]
            }], function () { return []; }, { type: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = ["*"];
    var GxButtonComponent = /** @class */ (function () {
        function GxButtonComponent() {
        }
        GxButtonComponent.prototype.ngOnInit = function () {
        };
        return GxButtonComponent;
    }());
    GxButtonComponent.ɵfac = function GxButtonComponent_Factory(t) { return new (t || GxButtonComponent)(); };
    GxButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GxButtonComponent, selectors: [["gx-button"]], inputs: { disabled: "disabled", bgColor: "bgColor" }, ngContentSelectors: _c0$1, decls: 2, vars: 2, consts: [[3, "disabled", "ngClass"]], template: function GxButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("disabled", ctx.disabled)("ngClass", ctx.bgColor != undefined ? ctx.bgColor : "primary");
            }
        }, directives: [i1.NgClass], styles: ["button[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;border:none;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;line-height:36px;margin:0;min-width:64px;outline:none;overflow:visible;padding:0 16px;position:relative;text-align:center;text-decoration:none;transform:translateZ(0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:baseline;white-space:nowrap}button[_ngcontent-%COMP%]:disabled{background-color:#d3d3d3;color:grey;cursor:not-allowed}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GxButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'gx-button',
                        templateUrl: './gx-button.component.html',
                        styleUrls: ['./gx-button.component.css']
                    }]
            }], function () { return []; }, { disabled: [{
                    type: i0.Input
                }], bgColor: [{
                    type: i0.Input
                }] });
    })();

    var GeexecDashboardComponentsModule = /** @class */ (function () {
        function GeexecDashboardComponentsModule() {
        }
        return GeexecDashboardComponentsModule;
    }());
    GeexecDashboardComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: GeexecDashboardComponentsModule });
    GeexecDashboardComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GeexecDashboardComponentsModule_Factory(t) { return new (t || GeexecDashboardComponentsModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GeexecDashboardComponentsModule, { declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent], imports: [i1.CommonModule], exports: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GeexecDashboardComponentsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent]
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
    exports.GxButtonComponent = GxButtonComponent;
    exports.GxHeadingComponent = GxHeadingComponent;
    exports.GxInputComponent = GxInputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=geexec-dashboard-components.umd.js.map

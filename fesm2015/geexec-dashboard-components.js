import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵprojectionDef, ɵɵprojection, ɵɵelement, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵtextInterpolate, Input, ɵɵproperty, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';

class GeexecDashboardComponentsService {
    constructor() { }
}
GeexecDashboardComponentsService.ɵfac = function GeexecDashboardComponentsService_Factory(t) { return new (t || GeexecDashboardComponentsService)(); };
GeexecDashboardComponentsService.ɵprov = ɵɵdefineInjectable({ token: GeexecDashboardComponentsService, factory: GeexecDashboardComponentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeexecDashboardComponentsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class GeexecDashboardComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeexecDashboardComponentsComponent.ɵfac = function GeexecDashboardComponentsComponent_Factory(t) { return new (t || GeexecDashboardComponentsComponent)(); };
GeexecDashboardComponentsComponent.ɵcmp = ɵɵdefineComponent({ type: GeexecDashboardComponentsComponent, selectors: [["lib-geexec-dashboard-components"]], decls: 2, vars: 0, template: function GeexecDashboardComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " geexec-dashboard-components works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeexecDashboardComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-geexec-dashboard-components',
                template: `
    <p>
      geexec-dashboard-components works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

const _c0 = ["*"];
class GxHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
GxHeadingComponent.ɵfac = function GxHeadingComponent_Factory(t) { return new (t || GxHeadingComponent)(); };
GxHeadingComponent.ɵcmp = ɵɵdefineComponent({ type: GxHeadingComponent, selectors: [["gx-heading"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function GxHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "p");
        ɵɵprojection(1);
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GxHeadingComponent, [{
        type: Component,
        args: [{
                selector: 'gx-heading',
                templateUrl: './gx-heading.component.html',
                styleUrls: ['./gx-heading.component.css']
            }]
    }], function () { return []; }, null); })();

class GxInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
GxInputComponent.ɵfac = function GxInputComponent_Factory(t) { return new (t || GxInputComponent)(); };
GxInputComponent.ɵcmp = ɵɵdefineComponent({ type: GxInputComponent, selectors: [["gx-input"]], inputs: { type: "type", required: "required", label: "label" }, decls: 6, vars: 3, consts: [[1, "group"], [3, "type", "required"], [1, "highlight"], [1, "bar"]], template: function GxInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "input", 1);
        ɵɵelement(2, "span", 2);
        ɵɵelement(3, "span", 3);
        ɵɵelementStart(4, "label");
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵpropertyInterpolate("type", ctx.type);
        ɵɵpropertyInterpolate("required", ctx.required);
        ɵɵadvance(4);
        ɵɵtextInterpolate(ctx.label);
    } }, styles: [".group[_ngcontent-%COMP%]{margin:20px 0;position:relative}input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #757575;display:block;font-size:14px;padding:10px 10px 10px 5px;width:300px}input[_ngcontent-%COMP%]:focus{outline:none}label[_ngcontent-%COMP%]{-moz-transition:.2s ease all;-webkit-transition:all .2s ease;color:#999;font-size:18px;font-weight:400;left:5px;pointer-events:none;position:absolute;top:10px;transition:all .2s ease}input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{color:#5264ae;font-size:14px;top:-10px}.bar[_ngcontent-%COMP%]{display:block;position:relative;width:300px}.bar[_ngcontent-%COMP%]:after, .bar[_ngcontent-%COMP%]:before{-moz-transition:.2s ease all;-webkit-transition:all .2s ease;background:#5264ae;bottom:1px;content:\"\";height:2px;position:absolute;transition:all .2s ease;width:0}.bar[_ngcontent-%COMP%]:before{left:50%}.bar[_ngcontent-%COMP%]:after{right:50%}input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:after, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before{width:50%}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GxInputComponent, [{
        type: Component,
        args: [{
                selector: 'gx-input',
                templateUrl: './gx-input.component.html',
                styleUrls: ['./gx-input.component.css']
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], required: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

const _c0$1 = ["*"];
class GxButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
GxButtonComponent.ɵfac = function GxButtonComponent_Factory(t) { return new (t || GxButtonComponent)(); };
GxButtonComponent.ɵcmp = ɵɵdefineComponent({ type: GxButtonComponent, selectors: [["gx-button"]], inputs: { disabled: "disabled", bgColor: "bgColor" }, ngContentSelectors: _c0$1, decls: 2, vars: 2, consts: [[3, "disabled", "ngClass"]], template: function GxButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "button", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("disabled", ctx.disabled)("ngClass", ctx.bgColor != undefined ? ctx.bgColor : "primary");
    } }, directives: [NgClass], styles: ["button[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;border:none;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;line-height:36px;margin:0;min-width:64px;outline:none;overflow:visible;padding:0 16px;position:relative;text-align:center;text-decoration:none;transform:translateZ(0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:baseline;white-space:nowrap}button[_ngcontent-%COMP%]:disabled{background-color:#d3d3d3;color:grey;cursor:not-allowed}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GxButtonComponent, [{
        type: Component,
        args: [{
                selector: 'gx-button',
                templateUrl: './gx-button.component.html',
                styleUrls: ['./gx-button.component.css']
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], bgColor: [{
            type: Input
        }] }); })();

class GeexecDashboardComponentsModule {
}
GeexecDashboardComponentsModule.ɵmod = ɵɵdefineNgModule({ type: GeexecDashboardComponentsModule });
GeexecDashboardComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function GeexecDashboardComponentsModule_Factory(t) { return new (t || GeexecDashboardComponentsModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GeexecDashboardComponentsModule, { declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent], imports: [CommonModule], exports: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeexecDashboardComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent],
                imports: [
                    CommonModule
                ],
                exports: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of geexec-dashboard-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GeexecDashboardComponentsComponent, GeexecDashboardComponentsModule, GeexecDashboardComponentsService, GxButtonComponent, GxHeadingComponent, GxInputComponent };
//# sourceMappingURL=geexec-dashboard-components.js.map

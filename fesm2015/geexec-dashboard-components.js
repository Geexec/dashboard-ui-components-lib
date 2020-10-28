import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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

class GxHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
GxHeadingComponent.ɵfac = function GxHeadingComponent_Factory(t) { return new (t || GxHeadingComponent)(); };
GxHeadingComponent.ɵcmp = ɵɵdefineComponent({ type: GxHeadingComponent, selectors: [["gx-heading"]], decls: 2, vars: 0, template: function GxHeadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "gx-heading works!");
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

class GeexecDashboardComponentsModule {
}
GeexecDashboardComponentsModule.ɵmod = ɵɵdefineNgModule({ type: GeexecDashboardComponentsModule });
GeexecDashboardComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function GeexecDashboardComponentsModule_Factory(t) { return new (t || GeexecDashboardComponentsModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GeexecDashboardComponentsModule, { declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent], exports: [GeexecDashboardComponentsComponent, GxHeadingComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeexecDashboardComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent],
                imports: [],
                exports: [GeexecDashboardComponentsComponent, GxHeadingComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of geexec-dashboard-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GeexecDashboardComponentsComponent, GeexecDashboardComponentsModule, GeexecDashboardComponentsService, GxHeadingComponent };
//# sourceMappingURL=geexec-dashboard-components.js.map

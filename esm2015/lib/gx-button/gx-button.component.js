import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class GxButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
GxButtonComponent.ɵfac = function GxButtonComponent_Factory(t) { return new (t || GxButtonComponent)(); };
GxButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GxButtonComponent, selectors: [["gx-button"]], inputs: { disabled: "disabled", bgColor: "bgColor" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "disabled", "ngClass"]], template: function GxButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("ngClass", ctx.bgColor != undefined ? ctx.bgColor : "primary");
    } }, directives: [i1.NgClass], styles: ["button[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;border:none;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;line-height:36px;margin:0;min-width:64px;outline:none;overflow:visible;padding:0 16px;position:relative;text-align:center;text-decoration:none;transform:translateZ(0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:baseline;white-space:nowrap}button[_ngcontent-%COMP%]:disabled{background-color:#d3d3d3;color:grey;cursor:not-allowed}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GxButtonComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3gtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJHOi9yZWFjdCBwcm9qZWN0cy9hbmd1bGFyL2xpYnJhcnkvZGFzaGJvYXJkLXVpLWNvbXBvbmVudHMvcHJvamVjdHMvZ2VleGVjLWRhc2hib2FyZC1jb21wb25lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9neC1idXR0b24vZ3gtYnV0dG9uLmNvbXBvbmVudC50cyIsImxpYi9neC1idXR0b24vZ3gtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O2tGQVBVLGlCQUFpQjtzREFBakIsaUJBQWlCOztRQ1A5QixpQ0FJRTtRQUFBLGtCQUFZO1FBQ2QsaUJBQVM7O1FBSlAsdUNBQXFCLCtEQUFBOztrRERNVixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QztzQ0FHVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2d4LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9neC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9neC1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEd4QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBkaXNhYmxlZDtcbiAgQElucHV0KCkgYmdDb2xvcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8YnV0dG9uXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIFtuZ0NsYXNzXT1cImJnQ29sb3IgIT0gdW5kZWZpbmVkID8gYmdDb2xvciA6ICdwcmltYXJ5J1wiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPlxuIl19
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class GxInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
GxInputComponent.ɵfac = function GxInputComponent_Factory(t) { return new (t || GxInputComponent)(); };
GxInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GxInputComponent, selectors: [["gx-input"]], inputs: { type: "type", required: "required", label: "label" }, decls: 6, vars: 3, consts: [[1, "group"], [3, "type", "required"], [1, "highlight"], [1, "bar"]], template: function GxInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelement(3, "span", 3);
        i0.ɵɵelementStart(4, "label");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("type", ctx.type);
        i0.ɵɵpropertyInterpolate("required", ctx.required);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.label);
    } }, styles: [".group[_ngcontent-%COMP%]{margin:20px 0;position:relative}input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #757575;display:block;font-size:14px;padding:10px 10px 10px 5px;width:300px}input[_ngcontent-%COMP%]:focus{outline:none}label[_ngcontent-%COMP%]{-moz-transition:.2s ease all;-webkit-transition:all .2s ease;color:#999;font-size:18px;font-weight:400;left:5px;pointer-events:none;position:absolute;top:10px;transition:all .2s ease}input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{color:#5264ae;font-size:14px;top:-10px}.bar[_ngcontent-%COMP%]{display:block;position:relative;width:300px}.bar[_ngcontent-%COMP%]:after, .bar[_ngcontent-%COMP%]:before{-moz-transition:.2s ease all;-webkit-transition:all .2s ease;background:#5264ae;bottom:1px;content:\"\";height:2px;position:absolute;transition:all .2s ease;width:0}.bar[_ngcontent-%COMP%]:before{left:50%}.bar[_ngcontent-%COMP%]:after{right:50%}input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:after, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before{width:50%}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GxInputComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3gtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ikc6L3JlYWN0IHByb2plY3RzL2FuZ3VsYXIvbGlicmFyeS9kYXNoYm9hcmQtdWktY29tcG9uZW50cy9wcm9qZWN0cy9nZWV4ZWMtZGFzaGJvYXJkLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Zvcm1zL2d4LWlucHV0L2d4LWlucHV0LmNvbXBvbmVudC50cyIsImxpYi9mb3Jtcy9neC1pbnB1dC9neC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPeEQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixnQkFBZ0IsQ0FBQztJQU1qQixRQUFRO0lBQ1IsQ0FBQzs7Z0ZBVFUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7UUNQN0IsOEJBQ0U7UUFBQSwyQkFDQTtRQUFBLDBCQUErQjtRQUMvQiwwQkFBeUI7UUFDekIsNkJBQU87UUFBQSxZQUFXO1FBQUEsaUJBQVE7UUFDNUIsaUJBQU07O1FBSkcsZUFBaUI7UUFBakIsMENBQWlCO1FBQUMsa0RBQXlCO1FBRzNDLGVBQVc7UUFBWCwrQkFBVzs7a0RER1AsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEM7c0NBS1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2d4LWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2d4LWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3gtaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEd4SW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgdHlwZTtcbiAgQElucHV0KCkgcmVxdWlyZWQ7XG4gIEBJbnB1dCgpIGxhYmVsO1xuIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgPGlucHV0IHR5cGU9XCJ7eyB0eXBlIH19XCIgcmVxdWlyZWQ9XCJ7eyByZXF1aXJlZCB9fVwiIC8+XG4gIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgPGxhYmVsPnt7IGxhYmVsIH19PC9sYWJlbD5cbjwvZGl2PlxuIl19
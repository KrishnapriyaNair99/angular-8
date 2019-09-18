import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input() defaultColor: string;
    @Input() highlightColor: string;
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    @HostBinding('style.backgroundColor') backgroundColor:string;

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        console.log('Default color --------->>>>>', this.defaultColor);
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseover') mouseover() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
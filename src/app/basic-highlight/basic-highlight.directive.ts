import { Directive,ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef<HTMLElement>) {} //<HTMLElement tell TS that this is an html element , making a casting

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
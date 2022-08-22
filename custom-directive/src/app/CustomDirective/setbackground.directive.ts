import { Directive, ElementRef,OnInit } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
    
 
export class SetBackgroundDirective implements OnInit{
private element:ElementRef;
    constructor(element:ElementRef){
    this.element=element;
}
ngOnInit(){
    this.element.nativeElement.style.backgroundColor='green';
}
}
import { Directive, HostBinding, HostListener,ElementRef } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event){
        this.isOpen= this.elRef.nativeElement.contains(event.target)?
        !this.isOpen: false;
    }
    // @HostListener('click') toggleOpen(){
    //     this.isOpen= !this.isOpen;
    // }//toggle the dropdown menu by clicks only on the area but anywhere.

    constructor(private elRef: ElementRef){

    }

}
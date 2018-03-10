import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('className') dropdowndisplay:string;
  openedDropDown=this.dropdowndisplay+' open';
  closedDropDown=this.dropdowndisplay;
  toggled=false;
  constructor() { }

  @HostListener('click') showDropDownList(eventData:Event){
    this.toggled=!this.toggled;
    if(this.toggled){
        this.dropdowndisplay=this.openedDropDown;
    }else{
      this.dropdowndisplay=this.closedDropDown;
    }
  }

}

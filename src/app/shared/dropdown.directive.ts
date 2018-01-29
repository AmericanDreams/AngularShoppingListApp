import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  ngOnInit(): void {
  }

  @HostListener('click') toggleButton() {
    this.isOpen =  !this.isOpen;
  }




}

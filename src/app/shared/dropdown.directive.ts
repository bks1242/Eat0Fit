import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('Class.open') isOpen = false;

    @HostListener('click') openToggle () {
        console.log('toggle is hit');
        this.isOpen = !this.isOpen;
    }
}

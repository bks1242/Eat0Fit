import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() navigateEvent = new EventEmitter<string>();

    navigate (param: string) {
        console.log(param);
        this.navigateEvent.emit(param);
    }
}
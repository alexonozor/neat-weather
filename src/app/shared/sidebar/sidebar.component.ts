import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidenavService } from '../../core/services/sidebar/sidebar.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
    public states = [];

    constructor(public sideNav: SidenavService) { }

    ngOnInit(): void {
        this.states = this.sideNav.cities();
    }
}

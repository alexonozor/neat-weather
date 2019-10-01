import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import {SidenavService} from '../../core/services/sidebar/sidebar.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public states = [];

  constructor(public sideNav: SidenavService) {
      this.states = this.sideNav.cities();
   }

    ngOnInit(): void {
        this.sideNav.close();
     }
}

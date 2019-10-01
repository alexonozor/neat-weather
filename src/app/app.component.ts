import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';
import {SidenavService} from './core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Neat weather';
  @ViewChild('drawer', { static: true }) public drawer: MatDrawer;

  constructor(private drawerService: SidenavService) {}

  // initialise the draw to it service.
  ngOnInit() {
    this.drawerService.setSidenav(this.drawer);
  }
}

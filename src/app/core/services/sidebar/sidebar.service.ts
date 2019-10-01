import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatDrawer;

  constructor() { }

  public setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

  public cities() {
    return [
      {
        id: 4125402,
        name: 'Paris',
        country: 'US',
        image: 'https://res.cloudinary.com/sportbay-co/image/upload/v1569789164/dark-skyline-paris_23-2147771443_qepwlx.jpg',
      },
      {
        id: 5134295,
        name: 'Rome',
        country: 'US',
        image: 'https://res.cloudinary.com/sportbay-co/image/upload/v1569789589/grey-skyline-rome_23-2147776306_nouhxu.jpg',
      },
      {
        id: 2759794,
        name: 'Amsterdam',
        country: 'NL',
        image: 'https://res.cloudinary.com/sportbay-co/image/upload/v1569788880/amsterdam-skyline-design_23-2147765691_l2263n.jpg',
      },
      {
        id: 5083330,
        name: 'Berlin',
        country: 'US',
        image: 'https://res.cloudinary.com/sportbay-co/image/upload/v1569789014/white-black-skyline-berlin_23-2147775390_geg2ed.jpg',
      },
      {
        id: 2759794,
        name: 'London',
        country: 'US',
        image: 'https://res.cloudinary.com/sportbay-co/image/upload/v1569788397/black-london-skyline-design_23-2147771445_eshlvg.jpg',
      },
    ];
  }
}


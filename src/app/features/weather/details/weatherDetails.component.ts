import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, timer, of, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap, map, tap, catchError, finalize, takeWhile, repeatWhen, delay } from 'rxjs/operators';
import { WeatherService } from '../../../core/services/weather/weather.service';
import { WeatherModel } from '../../../core/services/weather/weather.model';
import { MatDrawer } from '@angular/material';
import { SidenavService } from '../../../core/services/sidebar/sidebar.service';
import { BreakpointObserver } from '@angular/cdk/layout';




@Component({
  selector: 'app-weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetailsComponent implements OnInit {
  public $weather: Observable<WeatherModel>;
  public viewForecasts = false;
  public subscription = new Subscription();
  public isLoading = false;
  public isMobileScreen: boolean;
  @ViewChild('drawer', { static: true }) public drawer: MatDrawer;

  constructor(
    public route: ActivatedRoute,
    public weatherService: WeatherService,
    public sidenav: SidenavService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.isMobileScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  }


  ngOnInit(): void {
    this.showSideBar();
    this.isLoading = true;
    this.$weather = this.route.paramMap.pipe(
      finalize(() => {
        this.isLoading = false;
      }),
      map((value: any) => value.params.id),
      switchMap(params => this.weatherService.getWeather(params)),
      tap((params) => {
        if (this.viewForecasts) {
          this.viewForecast(params.id);
        }
      })
    );
  }


  showSideBar() {
    if (this.isMobileScreen) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }




  viewForecast(cityId) {
    this.viewForecasts = true;
    this.weatherService.updateForecasts(cityId);
  }
}

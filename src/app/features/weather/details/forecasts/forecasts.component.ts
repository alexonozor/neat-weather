import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable,  Subscription} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {WeatherService} from '../../../../core/services/weather/weather.service';
import {ForecastModel} from '../../../../core/services/weather/forecast.model';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.scss']
})

export class WeatherForecastsComponent implements OnInit, OnDestroy {
  public $selectedForecast: ForecastModel;
  public subscription = new Subscription();
  public isLoading = false;

  /**
   * Graph config
   */
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    title: {
      display: true,
      text: '5 days forecasts on 3 hours time intervals'
    },
    axisX: {
      suffix: '°C',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: (label, index, labels) => `${label} °C`
          },
        },
      ]
    },
  };

  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    { data: [], label: 'Forecast Temperature' },
  ];

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    const forecast = this.weatherService.currentForecasts.subscribe(cityId => {
      if (cityId) { this.viewForecast(cityId); }
    });

    this.subscription.add(forecast);
  }

  viewForecast(city) {
    this.isLoading = true;
    const forecastSub = this.weatherService.getWeatherForecast(city)
    .pipe(finalize(() => this.isLoading = false))
      .subscribe((res) => {
        this.$selectedForecast = res;
        // reset
        this.barChartLabels = [];
        this.barChartData[0].data = [];
        // repopulate
        this.$selectedForecast.list.forEach(data => {
          this.barChartLabels.push(data.dt_txt);
          this.barChartData[0].data.push(data.main.temp);
        });
      });

    this.subscription.add(forecastSub); // add to subscription
  }


  ngOnDestroy() {
    this.subscription.unsubscribe(); // stop all component Rxjs stream..
  }
}

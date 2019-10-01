import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, throwError, BehaviorSubject} from 'rxjs';
import {WeatherModel} from '../weather/weather.model';
import {environment} from '../../../../environments/environment';
import {ForecastModel} from '../../services/weather/forecast.model';


@Injectable()
export class WeatherService {

  private forecastsSubject = new BehaviorSubject(null);
   currentForecasts = this.forecastsSubject.asObservable();


    constructor(private http: HttpClient) {}

    getWeather(country: string): Observable<WeatherModel> {
        return this.http.get<WeatherModel>(`${environment.host}/weather?q=${country}&appid=${environment.appKey}`);
    }

    getWeatherForecast(cityId: string) {
      return this.http.get<ForecastModel>(`${environment.host}/forecast?appid=${environment.appKey}&id=${cityId}&units=metric`);
    }


    updateForecasts(cityId: string) {
      this.forecastsSubject.next(cityId);
    }

}

import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { MyOwnCustomMaterialModule } from '../../shared/material';
import { WeatherRoutingModule } from './weather.routing';
import { WeatherDetailsComponent } from './details/weatherDetails.component';
import { WeatherForecastsComponent } from './details/forecasts/forecasts.component';
import {CommonModule} from '@angular/common';
import {WeatherService} from '../../core/services/weather/weather.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts';
import {ErrorsModule} from './../../core/errors/errors.module';
import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  declarations: [
    WeatherDetailsComponent,
    WeatherForecastsComponent
  ],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    SharedModule,
    WeatherRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    ChartsModule,
    ErrorsModule
  ],
  providers: [
    WeatherService,
  ],
})
export class WeatherModule { }

import {Route} from '@angular/router';
import {WeatherDetailsComponent} from './details/weatherDetails.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: ':id', component: WeatherDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule {}


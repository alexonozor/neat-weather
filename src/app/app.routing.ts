
import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { Route } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'error',
        loadChildren: () => import('./core/errors/errors.module').then(m => m.ErrorsModule)
    },
    {
        path: 'weather',
        loadChildren: () => import('./features/weather/weather.module').then(m => m.WeatherModule)
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {MyOwnCustomMaterialModule} from './shared/material';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './features/home/home.component';
import {PageNotFoundComponent} from './features/page-not-found/page-not-found.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ErrorsModule} from './core/errors/errors.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ErrorsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

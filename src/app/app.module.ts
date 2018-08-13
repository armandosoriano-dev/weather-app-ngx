import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherModule } from '@app/weather/weather.module';
import { SharedModule } from '@shared/shared.module';

import { BaseComponent } from '@app/base/base.component';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [AppComponent, BaseComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    WeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

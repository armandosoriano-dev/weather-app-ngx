import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { WeatherCardComponent } from '@app/weather/weather-card/weather-card.component';
import { WeatherHistoryComponent } from '@app/weather/weather-history/weather-history.component';
import { WeatherListComponent } from '@app/weather/weather-list/weather-list.component';

@NgModule({
  imports: [SharedModule, HttpClientModule],
  declarations: [
    WeatherListComponent,
    WeatherCardComponent,
    WeatherHistoryComponent,
  ],
  exports: [WeatherListComponent],
  entryComponents: [WeatherHistoryComponent],
})
export class WeatherModule {}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable, Subscription, interval } from 'rxjs';

import { WeatherData } from '@app/weather/shared/weather.model';
import { WeatherHistoryComponent } from '@app/weather/weather-history/weather-history.component';
import { WeatherService } from '@app/weather/shared/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  readonly ERROR_NO_ID = `WeatherCard component requires a valid 'id' to work`;
  @Input() id: number;
  data$: Observable<WeatherData>;
  error: string;
  intervalSubscription: Subscription;

  constructor(
    private readonly service: WeatherService,
    private readonly sheet: MatBottomSheet,
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.data$ = this.service.getCityData(this.id);
      this.intervalSubscription = interval(10000).subscribe(_ => {
        this.data$ = this.service.getCityData(this.id);
      });
    } else {
      // would be good to display it somewhere in the card
      this.error = this.ERROR_NO_ID;
      console.error(this.error);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  openHistory(): void {
    this.service.getCityHistory(this.id).subscribe(history => {
      this.sheet.open(WeatherHistoryComponent, {
        data: history,
      });
    });
  }
}

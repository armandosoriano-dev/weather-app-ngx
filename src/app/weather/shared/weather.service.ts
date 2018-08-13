import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { WeatherData } from '@app/weather/shared/weather.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private dataMap: Map<number, WeatherData[]> = new Map();

  constructor(private readonly http: HttpClient) {}

  getCityData(id: number): Observable<WeatherData> {
    console.log('called', id);
    return this.http
      .get<WeatherData>(
        `${environment.WEATHER_API}/weather?id=${id}&units=metric`,
      )
      .pipe(
        tap(data => this.addData(id, data)),
        catchError(_error => {
          debugger;
          return of(null);
        }),
      );
  }

  getCityHistory(id: number): Observable<WeatherData[]> {
    const history = this.dataMap.get(id);
    return of(history);
  }

  // private catchError(): Observable<any> {
  //   return;
  // }

  private addData(id: number, data: WeatherData): void {
    const storedData = this.dataMap.get(id);
    if (storedData) {
      if (!storedData.find(item => item.dt === data.dt)) {
        this.dataMap.set(id, [...storedData, data]);
      }
    } else {
      this.dataMap.set(id, [data]);
    }
  }
}

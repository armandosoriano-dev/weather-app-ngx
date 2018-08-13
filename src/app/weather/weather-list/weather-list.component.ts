import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
  @Input() cityIds: string[];

  constructor() {}

  ngOnInit() {}
}

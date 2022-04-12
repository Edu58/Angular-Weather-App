import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherModel } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather?q='

  constructor ( private http: HttpClient ) { }
  
  callApi (city: string) {
     return this.http.get( this.baseUrl + `${ city }&appid=${ environment.apiKey }&units=metric` )
  }
}

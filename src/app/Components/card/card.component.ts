import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetweatherService } from 'src/app/Services/getweather.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  show!: boolean
  main!: string
  description!: string
  humidity!: string
  temp!: string
  wind!: string


  constructor(private api: GetweatherService) { }

  getWeather ( form: NgForm ) {
    this.api.callApi( form.value.city ).subscribe(
      ( data: any ) => {
        if ( data )
        {
          this.show = true
          this.main = data.weather[0].main
          this.description = data.weather[0].description
          this.temp = data.main.temp
          this.humidity = data.main.humidity
          this.wind = data.wind.speed
        }
      }
    )
  }

}

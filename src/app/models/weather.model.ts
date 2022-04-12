export class WeatherModel {

     main: string 
     description: string 
     temp: string 
     humidity: string 
     wind: string 
    
    constructor (main: string,description: string,humidity: string,temp: string,wind: string) {
        this.main = main
        this.description = description
        this.temp = temp
        this.humidity = humidity
        this.wind = wind
    }
}
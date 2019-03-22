import {KEY, URL_WEATHER, URL_FORECAST} from './constants';


class WeatherDataService{

    getCurrentWeather(city, units) {
        return fetch(`${URL_WEATHER}${city}&appid=${KEY}&units=${units}`)
            .then(resp=>{
                if(!resp.ok)return new Error('Error');
                return resp.json();
            })
            .catch(error => console.log("Error", {error}));
    }

    getWeatherForecast(city, units) {
        return fetch(`${URL_FORECAST}${city}&appid=${KEY}&units=${units}`)
            .then(resp=>resp.json()).then(data=>data);
    }

    subscribe(callback, city, units){
        units = units === 'C' ? 'metric' : 'imperial';
        Promise.all([
            this.getCurrentWeather(city, units),
            this.getWeatherForecast(city, units)
        ]).then(weather => callback(weather[0], weather[1]));
    }
}

export default new WeatherDataService();

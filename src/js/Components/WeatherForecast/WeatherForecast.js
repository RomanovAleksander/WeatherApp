import Component from "../../framework/Component";
import {WeatherForecastItem} from "../WeatherForecastItem";

export default class WeatherForecast extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        return this.props.list.map(item => {
            return {
                    tag: WeatherForecastItem,
                    props: {
                        dt: item.dt,
                        temperature: item.main.temp,
                        weather: item.weather[0].main,
                    }
                }
        });
    }
}
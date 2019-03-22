import Component from "../../framework/Component";

import {SearchHistory} from "../SearchHistory";
import {SearchBar} from "../SearchBar";
import {CurrentWeather} from "../CurrentWeather";
import {WeatherForecast} from "../WeatherForecast";
import {FavouriteLocations} from "../FavouriteLocations";

import WeatherDataService from '../../Services/WeatherDataService';

import {snowAnimation} from "../../animation/bg-animation";
import {moonAnimation} from "../../animation/bg";

export default class App extends Component {
    constructor(host, props, state = {name: 'Kyiv', units: 'C', load: false}) {
        super(host, props, state);
    }

    init() {
        this.onServerResponse = this.onServerResponse.bind(this);
        WeatherDataService.subscribe(this.onServerResponse, this.state.name, this.state.units);
    }

    getWeather(city) {
        this.setState({name: city});
        WeatherDataService.subscribe(this.onServerResponse, this.state.name, this.state.units);
    }

    getWeatherForecast() {
        return [...this.props.forecast.list].filter((el, i) => i % 8 === 0)
    }

    onServerResponse(current, forecast) {
        this.props = {current, forecast};
        this.setState({load: true});
        snowAnimation();
        moonAnimation();
    }

    changeUnits() {
        this.state.units === 'C' ? this.setState({units: 'F'}) : this.setState({units: 'C'});
        WeatherDataService.subscribe(this.onServerResponse, this.state.name, this.state.units);
        snowAnimation();
    }


    render() {
        if (this.state.load && !this.props.current.message)
            return [
                {
                    tag: 'div',
                    classList: ['wrapper'],
                    children: [
                        {
                            tag: 'h2',
                            classList: ['hide'],
                            content: 'KOTTANS'
                        },
                        {
                            tag: 'div',
                            classList: ['cat'],
                        },
                        {
                            tag: 'canvas',
                            attributes: [
                                {name: 'id', value: 'canvas'},
                            ],
                        },
                        {
                            tag: 'canvas',
                            attributes: [
                                {name: 'id', value: 'intro-canvas'},
                            ],
                        },

                        {
                            tag: 'div',
                            classList: ['weather-wrapper'],
                            children: [
                                // {
                                //     tag: SearchHistory,
                                //     props: {},
                                // },
                                {
                                    tag: 'div',
                                    classList: ['weather-container'],
                                    children: [
                                        {
                                            tag: SearchBar,
                                            props: {
                                                getWeather: this.getWeather.bind(this),
                                                units: this.state.units,
                                                changeUnits: this.changeUnits.bind(this),
                                            }
                                        },
                                        {
                                            tag: 'div',
                                            classList: ['weather'],
                                            children: [
                                                {
                                                    tag: CurrentWeather,
                                                    props: {
                                                        units: this.state.units,
                                                        name: this.props.current.name,
                                                        sys: this.props.current.sys.country,
                                                        dt: this.props.current.dt,
                                                        weather: this.props.current.weather[0].main,
                                                        humidity: this.props.current.main.humidity,
                                                        wind: this.props.current.wind.speed,
                                                        temp: this.props.current.main.temp,
                                                        tempMax: this.props.current.main.temp_max,
                                                        tempMin: this.props.current.main.temp_min,

                                                        // addToFavourite: this.addToFavourite.bind(this),
                                                    }
                                                },
                                            ],
                                        },
                                        {
                                            tag: 'div',
                                            classList: ['weekly-weather',],
                                            children: [
                                                {
                                                    tag: WeatherForecast,
                                                    props: {
                                                        list: this.getWeatherForecast()
                                                    }
                                                },
                                            ],
                                        },
                                    ],
                                },
                                // {
                                //     tag: FavouriteLocations,
                                //     props: {
                                //         getWeather: this.getWeather.bind(this),
                                //     }
                                // },
                            ],
                        },
                    ],
                },
            ];
        else
            return [
                {
                    tag: 'h2',
                    classList: ['hide', 'active'],
                    content: 'Ooooops'
                },
                {
                    tag: 'div',
                    classList: ['cat', 'go'],
                },
            ]
    }
}

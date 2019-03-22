import Component from "../../framework/Component";
import {dayOfWeek} from "../../utils/helpers";

import clouds from "../../../images/svg/wi-cloudy.svg";
import snow from "../../../images/svg/wi-day-snow.svg";
import sunny from "../../../images/svg/wi-day-sunny.svg";
import rain from "../../../images/svg/wi-day-rain.svg";

export default class CurrentWeather extends Component {
    constructor(host, props) {
        super(host, props);
    }

    check() {
        if (this.props.weather === 'Clouds') {
            return clouds
        } else if (this.props.weather === 'Snow') {
            return snow
        } else if (this.props.weather === 'Clear') {
            return sunny
        }  else if (this.props.weather === 'Rain') {
            return rain
        }
    }

    render() {
        return [
            {
                tag: 'div',
                classList: ['weather-today'],
                children: [
                    {
                        tag: 'div',
                        classList: ['weather-header'],
                        children: [
                            {
                                tag: 'div',
                                classList: ['city'],
                                content: this.props.name + ', ' + this.props.sys,
                            },
                            {
                                tag: 'button',
                                classList: ['btn-add-favourites'],
                                attributes: [
                                    {
                                        type: 'button',
                                        title: 'Add to favorite',
                                    },
                                ],
                                content: '<svg class="favourite-icon" aria-hidden="true" data-prefix="far" data-icon="star" role="img"\n' +
                                '                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">\n' +
                                '                                <path fill="currentColor"\n' +
                                '                                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">\n' +
                                '                                </path>\n' +
                                '                            </svg>'
                            },
                        ],
                    },
                    {
                        tag: 'div',
                        classList: ['forecast-container'],
                        children: [
                            {
                                tag: 'div',
                                classList: ['container'],
                                children: [
                                    {
                                        tag: 'div',
                                        classList: ['day'],
                                        content: dayOfWeek(this.props.dt),
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['date'],
                                        content: new Date(this.props.dt * 1000).toLocaleDateString('uk-UA'),
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['wind'],
                                        content: this.props.wind + ' ' + `${this.props.units === 'C' ? 'm/s' : 'm/h'}`,
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['humidity'],
                                        content: this.props.humidity + '%',
                                    },
                                ],
                            },
                            {
                                tag: 'div',
                                classList: ['container'],
                                children: [


                                            {
                                                tag: 'img',
                                                attributes: [
                                                    {name: 'src', value: this.check()}
                                                ],
                                                classList: ['sky-icon',],


                                    },
                                    {
                                        tag: 'div',
                                        classList: ['sky'],
                                        content: this.props.weather,
                                    },
                                ],
                            },
                            {
                                tag: 'div',
                                classList: ['container'],
                                children: [
                                    {
                                        tag: 'div',
                                        classList: ['temperature'],
                                        children: [
                                            {
                                                tag: 'div',
                                                classList: ['min'],
                                                content: ' <svg class="search-icon" aria-hidden="true" data-prefix="fas" data-icon="long-arrow-alt-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg>\n' +
                                                `${Math.round(this.props.tempMin)}` + '°',
                                            },
                                            {
                                                tag: 'div',
                                                classList: ['max'],
                                                content: '<svg class="search-icon" aria-hidden="true" data-prefix="fas" data-icon="long-arrow-alt-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path></svg>\n' +
                                                `${Math.round(this.props.tempMax)}` + '°',
                                            },
                                        ]
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['current-temperature'],
                                        content: Math.round(this.props.temp) + '°',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ]
    }
}

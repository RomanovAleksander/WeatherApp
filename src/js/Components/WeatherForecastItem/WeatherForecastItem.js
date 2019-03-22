import Component from "../../framework/Component";
import {dayOfWeek} from "../../utils/helpers";

import clouds from "../../../images/svg/wi-cloudy.svg";
import snow from "../../../images/svg/wi-day-snow.svg";
import sunny from "../../../images/svg/wi-day-sunny.svg";
import rain from "../../../images/svg/wi-day-rain.svg";

export default class SearchBar extends Component {
    constructor(host, props) {
        super(host, props)
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
                classList: ['weekly-container'],
                children: [
                    {
                        tag: 'img',
                        attributes: [
                            {name: 'src', value: this.check()}
                        ],
                        classList: ['weekly-icon',],
                    },
                    {
                        tag: 'div',
                        classList: ['weekly-desk'],
                        content: this.props.weather,
                    },
                    {
                        tag: 'div',
                        classList: ['weekly-temp'],
                        content: Math.round(this.props.temperature) + '°',
                    },
                    {
                        tag: 'div',
                        classList: ['weekly-time'],
                        content: dayOfWeek(this.props.dt),
                    },
                    {
                        tag: 'div',
                        classList: ['weekly-date'],
                        content: new Date(this.props.dt * 1000).toLocaleDateString('uk-UA'),
                    },
                ],
            },
        ]
    }

}
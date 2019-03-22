import Component from "../../framework/Component";
import {snowAnimation} from "../../animation/bg-animation";

export default class SearchBar extends Component {
    constructor(host, props) {
        super(host, props);
    }

    getCity() {
        const city = document.querySelector('.search-input');
        this.props.getWeather(city.value);
        snowAnimation();
    }


    render() {
        return [
            {
                tag: 'div',
                classList: ['search-container'],
                children: [
                    {
                        tag: 'input',
                        classList: ['search-input'],
                        attributes: [
                            {name: 'type', value: 'text'},
                            {name: 'placeholder', value: 'Type location...'},
                            {name: 'required', value: ''},
                            {name: 'autofocus', value: ''},
                            {name: 'autocomplete', value: 'off'},
                        ],
                    },
                    {
                        tag: 'button',
                        classList: ['search-btn'],
                        eventHandlers: {
                            click: this.getCity.bind(this)
                        },
                        content: '<svg class="search-icon" aria-hidden="true" data-prefix="fas"\n' +
                        '                         data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"\n' +
                        '                         data-fa-i2svg="">\n' +
                        '                        <path fill="currentColor"\n' +
                        '                              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>\n' +
                        '                    </svg>',
                    },
                    {
                        tag: 'button',
                        classList: ['units', ],
                        content: `${this.props.units === 'C' ? '°C' : '°F'}`,
                        eventHandlers: {
                            click: this.props.changeUnits
                        },
                    },
                    // {
                    //     tag: 'select',
                    //     classList: ['units'],
                    //     attributes: [
                    //         {
                    //             title: 'Select units',
                    //         },
                    //     ],
                    //     children: [
                    //         {
                    //             tag: 'option',
                    //             content: '°C',
                    //             attributes: [
                    //                 {
                    //                     value: 'GC',
                    //                 },
                    //             ],
                    //         },
                    //         {
                    //             tag: 'option',
                    //             content: '°F',
                    //             attributes: [
                    //                 {
                    //                     value: 'FA',
                    //                 },
                    //             ],
                    //         },
                    //     ],
                    // },
                ],
            }
        ]
    }
}

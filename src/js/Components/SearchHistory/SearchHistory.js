import Component from "../../framework/Component";

export default class SearchHistory extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        const history = localStorage.getHistoryList();

        return [
            {
                tag: 'div',
                classList: ['history'],
                children: history.map(element => {
                    return {
                        tag: 'div',
                        children: [
                            {
                                tag: 'span',
                                content: element,
                            },
                            // {
                            //     tag: 'button',
                            //     eventHandler: {
                            //
                            //     }
                            // },
                        ],
                    };
                })
            }
        ]
    }
}

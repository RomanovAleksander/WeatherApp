import Component from "../../framework/Component";

export default class FavouriteLocations extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        const favourite = localStorage.getFavouriteList();

        return [
            {
                tag: 'div',
                classList: ['history'],
                children: favourite.map(element => {
                    return {
                        tag: 'div',
                        classList: ['fav-item',],
                        content: element,
                    }
                })
            }
        ]
    }
}
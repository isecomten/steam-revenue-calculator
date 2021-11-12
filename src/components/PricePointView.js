import React from "react";
import Footer from "./Footer";
import { dataRetriever } from "./DataRetriever";
class PricePointView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }
    async componentDidMount() {
        const games = await dataRetriever.GetGamesByPricePoint();
        this.setState({ games: games });
    }
    render() {
        return (
            <div className="pp">
                Average Revenue: {this.state.games.averageRevenue}
                Average Review Count: {this.state.games.averageReviewCount}

                <Footer></Footer>
            </div>
        );
    }
}
export default PricePointView;
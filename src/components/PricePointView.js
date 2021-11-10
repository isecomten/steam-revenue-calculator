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
    componentDidMount() {
        this.setState({ games: this.state.dataRetriever.GetGamesByPricePoint() });
    }
    render() {
        return (
            <div>
                <Footer></Footer>
            </div>
        );
    }
}
export default PricePointView;
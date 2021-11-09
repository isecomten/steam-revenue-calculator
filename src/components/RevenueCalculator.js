import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
class RevenueCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfReviews: 322,
            price: 9.90
        };
    }
    render() {
        return (
            <div className="rc">
                <div className="rcDesc">
                    <h1>Calculate Revenue from Steam Games</h1>
                    <h3>Using the Boxleiter method we can use the number of review a game has on Steam to estimate the number of owners. From this, we can calculate the gross revenue and by adjusting for discounts, regional pricing, etc. we can get a rough idea of the net revenue.</h3>
                </div>
                <div>
                    <Form className="rcForm">
                        <FormGroup className="rcFormInput">
                            <FormLabel>NUMBER OF REVIEWS</FormLabel>
                            <FormControl
                                value={this.state.numOfReviews}
                                type="number"
                                onChange={(e) => this.setState({ numOfReviews: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup className="rcFormInput">
                            <FormLabel>PRICE (USD)</FormLabel>
                            <FormControl
                                value={this.state.price}
                                type="number"
                                onChange={(e) => this.setState({ price: e.target.value })}
                            />
                        </FormGroup>
                    </Form>
                </div>
                <div className="rcTotal">
                    <h5>TOTAL REVENUE:</h5>
                    <h1>${(Math.round(this.state.numOfReviews * this.state.price * 45 * 100) / 100).toFixed(2)}</h1>
                </div>
            </div>
        );
    }
}
export default RevenueCalculator;
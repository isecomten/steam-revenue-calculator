import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Footer from "./Footer";
class GameListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="gameList">
                <ListGroup>
                    <ListGroupItem>
                        <div className="gameListHeader">

                        </div>
                        <div className="gameListContent">

                        </div>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
export default GameListView;
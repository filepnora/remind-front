import React, {Component} from "react";
import ListCard from "../Card/ListCard";
import CardDeck from "react-bootstrap/CardDeck";
import "../Card/Card.css"

class ListPage extends Component {
    render() {
        return (
            <CardDeck className="deck">
                <ListCard/>
                <ListCard/>
                <ListCard/>
            </CardDeck>
        )
    }
}

export default ListPage;


import React, {Component} from 'react';
import NewItemCard from "./NewItemCard";
import CardDeck from "react-bootstrap/CardDeck";
import bookImg from "../../resources/add-book.png";
import mediaImg from "../../resources/video-document-add-button.png";
import notePadImg from "../../resources/notepad.png";
import './Card.css';

class HomePageCardGroup extends Component {
    render() {
        return (
            <CardDeck className="deck">
                <NewItemCard
                    color="rgb(254, 255, 172)"
                    buttonColor="yellow"
                    image={bookImg}
                    title="Book"
                    content="you want to read, read, will read here.."
                    link="/new-book"/>
                <NewItemCard
                    color="rgb(255, 172, 213)"
                    buttonColor="#ff28c5"
                    image={mediaImg}
                    title="Movie / Series"
                    content="you want to watch, saw, will watch.."
                    link="/new-media"/>
                <NewItemCard
                    color="rgb(172, 255, 187)"
                    buttonColor="#009767"
                    image={notePadImg}
                    title="Note"
                    content="you want to ... remember"
                    link="new-note/"/>
            </CardDeck>
        )
    }
}

export default HomePageCardGroup;
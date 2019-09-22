import React, {Component} from 'react';
import NewItemCard from "./NewItemCard";
import CardDeck from "react-bootstrap/CardDeck";
import bookImg from "../../resources/add-book.png";
import mediaImg from "../../resources/video-document-add-button.png";
import notePadImg from "../../resources/notepad.png";

class HomePageCardGroup extends Component {
    render() {
        return (
            <CardDeck>
                <NewItemCard
                    image={bookImg}
                    title="new Book"
                    content="you can add a new BOOK you want to read, read, will read here.."/>
                <NewItemCard
                    image={mediaImg}
                    title="new Movie / Series"
                    content="you can add a new MOVIE / SERIES you want to watch, saw, will watch.."/>
                <NewItemCard
                    image={notePadImg}
                    title="new Note"
                    content="you can add a new NOTE you want to ... remember"/>
            </CardDeck>
        )
    }
}

export default HomePageCardGroup;
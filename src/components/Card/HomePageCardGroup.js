import React, {Component} from 'react';
import NewItemCard from "./NewItemCard";
import HomeBottomCard from './HomeBottomCard'
import CardDeck from "react-bootstrap/CardDeck";
import bookImg from "../../resources/add-book.png";
import mediaImg from "../../resources/video-document-add-button.png";
import notePadImg from "../../resources/notepad.png";
import './Card.css';

class HomePageCardGroup extends Component {
    render() {
        return (
            <div>
                <CardDeck className="deck">
                    <NewItemCard
                        color="rgb(172, 255, 187)"
                        image={bookImg}
                        title="+ Book"
                        content="... you want to read, read, will read here"
                        link="/new-book"/>
                    <NewItemCard
                        color="rgb(255, 172, 213)"
                        image={mediaImg}
                        title="+ Movie / Series"
                        content="... you want to watch, saw, will watch"
                        link="/new-media"/>
                    <NewItemCard
                        color="rgb(254, 255, 172)"
                        image={notePadImg}
                        title="+ Note"
                        content="... you want to ... remember"
                        link="new-note/"/>
                </CardDeck>
                <CardDeck className="deck">
                    <HomeBottomCard
                        color="rgb(198, 175, 249)"
                        header="Quote of the day:"
                        content="Happiness is when what you think, what you say, and what you do are in harmony. - Gandhi"/>
                    <HomeBottomCard
                        color="rgb(172, 239, 255)"/>
                </CardDeck>
            </div>
        )
    }
}

export default HomePageCardGroup;
import React, {Component} from "react";
import ListCard from "../Card/ListCard";
import CardDeck from "react-bootstrap/CardDeck";
import "../Card/Card.css"
import NoteCard from "../Card/NoteCard";

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            mediaData: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/books`)
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    mediaData: result
                })
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    getMediaData() {
        let noteInfo = [];
        for (let i = 0; i < this.state.mediaData.length; i++) {
            let media = this.state.mediaData[i];
            noteInfo.push(
                <ListCard title={media.title} author={media.author} publicationDate={media.publicationDate} status={media.status} added={media.added}/>
            )
        }
        return noteInfo;
    }

    render() {
        return (
            <CardDeck className="deck">
                {this.getMediaData()}
            </CardDeck>
        )
    }
}

export default ListPage;


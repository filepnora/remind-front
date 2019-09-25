import React, {Component} from "react";
import NoteCard from "../Card/NoteCard";
import '../Card/Card.css'
import CardColumns from "react-bootstrap/CardColumns";

class NoteListPage extends Component {
    render() {
        return (
            <CardColumns style={{marginRight: "6em"}}>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
            </CardColumns>
        )
    }
}

export default NoteListPage;
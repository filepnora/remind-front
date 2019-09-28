import React, {Component} from "react";
import NoteCard from "../Card/NoteCard";
import '../Card/Card.css'
import CardColumns from "react-bootstrap/CardColumns";

class NoteListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            noteData: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/notes`)
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    noteData: result
                })
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    getNoteData() {
        let noteInfo = [];
        for (let i = 0; i < this.state.noteData.length; i++) {
            let note = this.state.noteData[i];
            noteInfo.push(
                <NoteCard title={note.title} content={note.content}/>
            )
        }
        return noteInfo;
    }


    render() {
        return (
            <CardColumns style={{marginRight: "6em"}}>
                {this.getNoteData()}
            </CardColumns>
        )
    }
}

export default NoteListPage;
import React, {Component} from "react";
import './Card.css';
import {Button, Card, Image} from "react-bootstrap";
import editIcon from '../../resources/edit.png'
import binIcon from '../../resources/garbage.png'
import Row from "react-bootstrap/Row";

class NoteCard extends Component {
    render() {
        return (
            <Card className="listPageNoteCard">
                <Card.Body>
                    <Card.Title className="center">
                        <Row>
                            <h3>This is a note</h3>
                            <Image className="smallButton" src={binIcon} style={{right: "1em"}}/>
                            <Image className="smallButton" src={editIcon} style={{right: "4em"}}/>
                        </Row>
                    </Card.Title>
                    <hr/>
                    <Card.Text>
                        <p>
                            some content
                            some content
                            some content
                            some content
                            some content
                            some content
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default NoteCard;
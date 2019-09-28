import React from "react";
import './Card.css';
import {Button, Card, Image} from "react-bootstrap";
import editIcon from '../../resources/edit.png'
import binIcon from '../../resources/garbage.png'
import Row from "react-bootstrap/Row";

const NoteCard = (props) => {
    return (
        <Card className="listPageNoteCard">
            <Card.Body>
                <Card.Title className="center">
                    <Row>
                        <h3>{props.title}</h3>
                        <Image className="smallButton" src={binIcon} style={{right: "1em"}}/>
                        <Image className="smallButton" src={editIcon} style={{right: "4em"}}/>
                    </Row>
                </Card.Title>
                <hr/>
                <Card.Text>
                    <p>
                        {props.content}
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NoteCard;
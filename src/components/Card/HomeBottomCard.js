import React from 'react';
import {Card} from "react-bootstrap";
import './Card.css';

const NewItemCard = (props) => {
    return (
        <Card className="homePageCard" style={{backgroundColor: props.color}}>
            <Card.Body className="homeBottomCardBody">
                <Card.Text>
                    <h5>{props.header}</h5>
                    <br/>
                    <p>{props.content}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default NewItemCard;
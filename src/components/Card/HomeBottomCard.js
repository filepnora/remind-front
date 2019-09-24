import React from 'react';
import {Card} from "react-bootstrap";
import './Card.css';

const NewItemCard = (props) => {
    return (
        <Card className="homePageCard" style={{backgroundColor: props.color}}>
            <Card.Body className="homeBottomCardBody">
                <Card.Text>
                    {props.content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default NewItemCard;
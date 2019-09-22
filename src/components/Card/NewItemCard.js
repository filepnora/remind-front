import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import './Card.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewItemCard = (props) => {
    return (
        <Card className="homePageCard">
                <Row>
                    <Col>
                        <Card.Img variant="top" className="homePageCardImg" src={props.image}/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className="homePageCardTitle">{props.title}</Card.Title>
                            <Card.Text>
                                {props.content}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
        </Card>
    )
};

export default NewItemCard;
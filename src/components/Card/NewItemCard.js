import React from 'react';
import {Card} from "react-bootstrap";
import './Card.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const NewItemCard = (props) => {
    return (
        <Card className="homePageCard" style={{backgroundColor: props.color}}>
            <Row>
                <Col className="imgCol">
                    <Card.Img variant="top" className="homePageCardImg" src={props.image}/>
                </Col>
                <Col className="textCol">
                    <Card.Body>
                        <Card.Title className="homePageCardTitle">
                            <Button className="addnewbutton" href={props.link} style={{backgroundColor: "#282c34"}}>Add {props.title}</Button>
                        </Card.Title>
                        <br/>
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
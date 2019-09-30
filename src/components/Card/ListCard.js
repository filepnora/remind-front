import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import "./Card.css"

const ListCard = (props) => {
    return (
        <Card className="listPageCard">
            <Card.Img variant="top" src=""/>
            <Card.Body>
                <Card.Title className="center"><h2>{props.title}</h2></Card.Title>
                <hr/>
                <Card.Text>
                    <p><b>Author: </b>{props.author}</p>
                    <hr/>
                    <p><b>Publication date: </b>{props.publicationDate}</p>
                    <hr/>
                    <p>Status: {props.status}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Added on {props.added}</small>
            </Card.Footer>
        </Card>
    )
};

export default ListCard;
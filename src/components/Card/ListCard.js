import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import "./Card.css"

class ListCard extends Component {
    render() {
        return (
            <Card className="listPageCard">
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        )
    }
}

export default ListCard;
import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import {Card} from "react-bootstrap";
import './AddNew.css';
import Button from "react-bootstrap/Button";

class NewNotePage extends Component {
    render() {
        return (
            <Form className="pageTitle center">
                <h1>Add a new NOTE</h1>
                <hr/>
                <Card className="newNoteCard" style={{backgroundColor: "rgb(254, 255, 172)"}}>
                    <Form.Group className="newNoteCardInputs">
                        <Form.Label><h4>Title:</h4></Form.Label>
                        <Form.Control type="text" placeholder="" className="center"/>
                        <p/>
                        <Form.Label>Content:</Form.Label>
                        <Form.Control as="textarea" rows="6"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submitButton center">
                        Submit
                    </Button>
                </Card>
            </Form>
        )
    }
}

export default NewNotePage;

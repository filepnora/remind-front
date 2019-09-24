import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './AddNew.css'
import Button from "react-bootstrap/Button";

class NewBookMediaPage extends Component {
    render() {
        return (
            <Form className="pageTitle center" style={{backgroundColor: "rgb(175, 175, 175)"}}>
                <h1>Add a new BOOK</h1>
                <hr/>
                <Card className="formCard" style={{backgroundColor: "rgb(172, 255, 187)"}}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="" className="center"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Release date</Form.Label>
                            <Form.Control type="text" placeholder="" className="center"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group className="center">
                        <Form.Label >Link</Form.Label>
                        <Form.Control type="text" className="center" placeholder="paste link here" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Status:</Form.Label>
                            <Form.Control as="select">
                                <option>Want to read it</option>
                                <option>Have it</option>
                                <option>Currently reading</option>
                                <option>Read it already</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Genre:</Form.Label>
                            <Form.Control as="select">
                                <option>Drama</option>
                                <option>Romantic</option>
                                <option>Crime</option>
                                <option>Thriller</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" className="submitButton center">
                        Submit
                    </Button>
                </Card>

            </Form>
        )
    }
}

export default NewBookMediaPage;
import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';
import 'reactjs-popup/dist/index.css';
import Table from './Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Popup from 'reactjs-popup';

import Paper from '@material-ui/core/Paper';


class EmptyCell extends Component {



    render() {


        return (
            <Card  style={{ width: '30rem' }} >
                <Card.Body>
                    <Card.Title >
                            <Col sm="4">
                                <Popup class="mt-auto" trigger={<Button variant="primary">+</Button>} position="bottom left" contentStyle={{ width: "30rem" }}>
                                    <h4 class="pb-4">Please enter customer info</h4>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column >
                                                Name Surname 
                                            </Form.Label>
                                            <Col sm="7">
                                                <Form.Control type="text" placeholder="Name and Surname" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column >
                                                GSM Number
                                            </Form.Label>
                                            <Col sm="7">
                                                <Form.Control type="text" placeholder="GSM Number" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column >
                                                Reservation Type
                                            </Form.Label>
                                            <Col sm="7">
                                                <Form.Control type="text" placeholder="Reservatiion Type" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column >
                                                Reservation Durtation
                                            </Form.Label>
                                            <Col sm="7">
                                                <Form.Control type="text" placeholder="Duration (min)" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column >
                                                Notes
                                            </Form.Label>
                                            <Col sm="7">
                                                <Form.Control type="text" placeholder="Some notes" />
                                            </Col>
                                        </Form.Group>
                                        <input type="submit" value="submit"></input>
                                    </Form>
                                    
                                    
                                </Popup>
                            </Col>
                            
                    </Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default EmptyCell;
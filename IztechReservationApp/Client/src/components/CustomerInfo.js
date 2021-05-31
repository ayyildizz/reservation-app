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

import { Inject, ScheduleComponent, Day, EventSettingsModel } from "@syncfusion/ej2-react-schedule";

import Paper from '@material-ui/core/Paper';


class CustomerInfo extends Component {






    render() {

        return (
            <Form>
                <Form.Group>
                    <Form.Label>Name Surname</Form.Label>
                    <Form.Control type="Test" placeholder="Name Surname" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="test" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form>

        )
    }
}

export default CustomerInfo;
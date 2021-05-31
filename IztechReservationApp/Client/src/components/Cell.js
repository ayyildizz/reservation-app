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

import {Inject,ScheduleComponent,Day,EventSettingsModel} from "@syncfusion/ej2-react-schedule";

import Paper from '@material-ui/core/Paper';


class Cell extends Component {

    

    


    render() {

        return (
            <Row>
                <Col sm="4">
                    <ScheduleComponent eventSettings={{ dataSource: {StartTime : new Date(2021,12,12,3,3), EndTime : new Date(2021,12,12,4,4)} }}>
                        <Inject services = {[Day]} />
                    </ScheduleComponent>
                </Col>
                <Col sm="4">
                    <ScheduleComponent>
                        <Inject services = {[Day]} />
                    </ScheduleComponent>
                </Col>
                <Col sm="4">
                    <ScheduleComponent>
                        <Inject services = {[Day]} />
                    </ScheduleComponent>
                </Col>
            </Row>
            
        )
    }
}

export default Cell;
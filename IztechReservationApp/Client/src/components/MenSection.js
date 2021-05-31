import React, { useState } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';

//import Main from "./components/Main";
import SideBar from "./SideBar";
import BarberTable from "./BarberTable";
import axios from 'axios';
import { DataManager,JsonAdaptor, UrlAdaptor, RemoteSaveAdaptor, Query, ODataV4Adaptor, WebApiAdaptor } from '@syncfusion/ej2-data';
import {  Router, Route, Link } from "react-router-dom";
import '../App.css';

class MenSection extends React.Component {

    state = {
        tests: []
    }

    componentDidMount() {
        this.getTests();
    }


    getTests = () => {
        axios.get('/api/getTest2')
            .then(res => {
                if (res.data) {
                    this.setState({
                        tests: res.data
                    })
                }
            })
            .catch(err => console.log(err))
    }


    render() {
        let dataMan = new DataManager({
            url: "http://localhost:3500/api/getMenAppointments",
            crudUrl : "http://localhost:3500/api/postTest",
    
            adaptor: new UrlAdaptor()
            //crossDomain: true
           });
    




        return (
            <div class="text-center">
                 <h3 >Men Section</h3>
                < BarberTable tests = {this.state.tests} dataMan = {dataMan} />
      
            </div>



        );
    }
}

export default MenSection;
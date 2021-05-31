import React, { Component } from 'react';


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
import CustomerTable from './Table';
import Test from "./Test";
import axios from 'axios';
import { DataManager,JsonAdaptor, UrlAdaptor, RemoteSaveAdaptor, Query, ODataV4Adaptor, WebApiAdaptor } from '@syncfusion/ej2-data';
import Paper from '@material-ui/core/Paper';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

class SideBar extends Component {

    state = {
        appointments: [],
        tests : []
      }


      componentDidMount(){
        this.getAppointments();
        this.getTests();
      }

      getAppointments = () => {
        axios.get('/api/appointments')
          .then(res => {
            if(res.data){
              this.setState({
                appointments: res.data
              })
            }
          })
          .catch(err => console.log(err))
      }

      getTests = () => {
        axios.get('/api/getTest2')
          .then(res => {
            if(res.data){
              this.setState({
                tests: res.data
              })
            }
          })
          .catch(err => console.log(err))
      }




    
      findCustomer = (id) => {
    
        axios.get(`/api/findCustomer/${id}`)
          .then(res => {
            if(res.data){
              return res.data;
            }
            else{
              return -1
            } 
          })
          .catch(err => console.log(err))
      }





    render(){

      let  {ab} = this.state.tests;
      let dataMan = new DataManager({
        url: "http://localhost:3500/api/getTest",
        crudUrl : "http://localhost:3500/api/postTest",

        adaptor: new UrlAdaptor()
        //crossDomain: true
       });


     return(   
        <div class="row">
            <div>
            <Test tests = {this.state.tests} dataMan = {dataMan} />

            
            </div>
       </div>

        
    
     )
    }



}




export default SideBar;
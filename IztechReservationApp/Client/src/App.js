import React, { useState } from 'react';

import Todo from './components/Todo';
import Table from './components/Table';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter as Router, Link, BrowserRouter } from "react-router-dom";
import Appointment from "./components/AppointmentTable";
import EmptyCell from "./components/EmptyCell";
import FullCell from "./components/FullCell";
//import Main from "./components/Main";
import SideBar from "./components/SideBar";
import MenSection from "./components/MenSection";
import WomenSection from "./components/WomenSection";
import BeautySection from "./components/BeautySection";
import CustomerInfo from "./components/CustomerInfo";
import './App.css';





const App = () => {
  
  return (
    // <Router>
    // <div className='App'>
    //   <MenSection />   
    //     <div className='container'>
    //       <Switch>
    //         <Route exact path='/MenSection' component={MenSection} /> 
    //       </Switch>         </div>
    // </div>
    // </Router>
    //<MenSection/>

    

    <div>
      <Router>
        <div class="wrapper">
          <nav id="sidebar" >
            <div class="sidebar-header">
              <div class="container">
                <div class="row mb-5">
                  <div class="column m-auto">
                    <Link to="/WomenSection"><img src="https://i.ibb.co/1fmtQCs/Kad-n-Avatar.jpg" alt="erkek" /> </Link>
                  </div>
                  <div class="column m-auto ">
                    <Link to="/MenSection"><img src="https://i.ibb.co/x3DcdNj/erkek.jpg" alt="kadın" /></Link>
                  </div>
                  <div class="column m-auto ">
                    <Link to="/BeautySection"><img src="https://i.ibb.co/fXrmt2N/guzellik.jpg" alt="güzellik" /></Link>
                  </div>
                  <div>
                    {/* <ul>
                      <li>
                        <Link to="/MenSection">Home</Link>
                      </li>
                      <li>
                        <Link to="/WomenSection">WomenSection</Link>
                      </li>
                      <li>
                        <Link to="/MenSection">MenSection</Link>
                      </li>
                    </ul> */}
                    <hr />
                  </div>

                </div>
                <div class="row mt-5 mb-5">
                  <Calendar id="calendar"  />

                </div>
                <div class="row mt-5 ">
                <Link to="/CustomerInfo"><div class="btn btn-light btn-block active" role="button" aria-pressed="true" >Customer Details</div></Link>
                </div>
              </div>
            </div>
          </nav>
          <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="navbar-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-align-justify"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <div class="nav navbar-nav ml-auto">
                    <p>Iztech Computer Engineering Department CENG318 Term Project by Group-6</p>
                  </div>
                </div>
              </div>
            </nav>
            <Switch>
              <Route exact path="/MenSection">
                <MenSection />
              </Route>
              <Route path="/WomenSection">
                <WomenSection />
              </Route>
              <Route path="/BeautySection">
                <BeautySection />
              </Route>
              <Route path="/CustomerInfo">
                <CustomerInfo />
              </Route>
            </Switch>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
      </Router>
    </div>

  );
}


export default App;
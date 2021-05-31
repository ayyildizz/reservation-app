import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


class CustomerInfoTable extends Component {

  state = {
    customer: {}
  }


  render(){
    var customer ;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">Telephone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {this.props.appointments.map((row) => (

            <div>
              {this.findCustomer(row.customerId)}
            <TableRow key={row._id}>    
              <TableCell component="th" scope="row"> {row.serviceType}</TableCell>
              <TableCell align="right"> {this.props.findCustomer(row.customerId)}</TableCell>
              <TableCell align="right">{row.customerId}</TableCell>
              <TableCell align="right">{row._id}</TableCell>
            </TableRow>
            </div>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}




};







export default CustomerInfoTable

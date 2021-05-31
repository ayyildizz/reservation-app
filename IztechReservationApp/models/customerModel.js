const mongoose = require('mongoose');
const Appointment = require('./appointmentModel')
const Schema = mongoose.Schema;

//create schema for customer
const customerSchema = new Schema({
    nameSurname: {
        type: String,
    }, phoneNumber: {
        type: String,
    }, eMail: {
        type: String,
    },
})

//create model for customer
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

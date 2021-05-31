const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customer = require('./customerModel')

//create schema for appointment
const appointmentSchema = new Schema({
    serviceType: {
        type: String,
    }, startDate: {
        type: Date,
    }, endDate: {
        type: Date,
    }, duration: {
        type: Number,
    }, notes: {
        type: String,
    }, customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer,
    },


})

//create model for appointment
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

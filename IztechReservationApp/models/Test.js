const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for customer
const testSchema = new Schema({
    customerName: {
        type: String,
    },
    customerPhone: {
        type: String,
    }, StartTime: {
        type: Date,
    }, EndTime: {
        type: Date,
    }, Id: {
        type: Number,
    }, artistName: [{
        type: String,
    }], artistId: [{
        type: Number,
    }],
        notes: {
        type: String,
    }, serviceType: {
        type: String,
    }


})

//create model for customer
const Test = mongoose.model('Test', testSchema);

module.exports = Test;

var mongoose = require('mongoose');

const ExpenceDetailsSchema = new mongoose.Schema({
    userId: String,
    expenceDetails: [],
    date: Date
});
const ExpenceDetails = mongoose.model('expence', ExpenceDetailsSchema);
module.exports = ExpenceDetails;
var account = require('./account/accountRoute');
var customerDetails = require('./customer-details/customer-detailsRoute');

exports.loadRoutes =function(app){
    account(app);
    customerDetails(app);
}

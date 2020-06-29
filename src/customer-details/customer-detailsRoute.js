var customerDetailsMgr = require('./customer-detailsMgr');

module.exports = function(app){
    app.route('/createexpencedata')
    .post(customerDetailsMgr.addExpences);
    app.route('/getsingledatedata/:id')
    .post(customerDetailsMgr.getsingleDateData);
    app.route('/getselecteddatedata/:id',)
    .post(customerDetailsMgr.getSelectedDateData);
    
}
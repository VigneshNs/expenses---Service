var customerDetailsDA = require('./customer-detailsDA');

exports.addExpences = function(req,res){
    try{
     customerDetailsDA.addExpences(req,res);
    }catch(error){
        console.log(error);
    }
}
exports.getsingleDateData = function(req,res){
    try{
        customerDetailsDA.getsingleDateData(req,res)
    }catch(error){
        console.log(error);
    }
}

exports.getSelectedDateData = function(req,res){
    try{
        customerDetailsDA.getSelectedDateData(req,res)
    }catch(error){
        console.log(error);
    }
}
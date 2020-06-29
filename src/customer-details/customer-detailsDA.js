var ExpenceDetails = require('../model/expence.model')

exports.addExpences = function(req,res){
    var expenceData = new ExpenceDetails(req.body);
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var todayDate = month + '/' + date + '/' + year;
    expenceData.userId = req.body.userId;
    expenceData.expenceDetails = req.body.expenceDetails;
    expenceData.date = todayDate;
    expenceData.save(
      function (err, superCat) {
        if (err) { // if it contains error return 0
          res.status(500).send({
            "result": 0
          });
        } else {
            ExpenceDetails.find({}).select().exec(function (err, superCat) {
            if (err) {
              res.status(500).send({
                message: "Some error occurred while retrieving notes."
              });
            } else {
              res.status(200).json(superCat);
            }
          });
        }
      });
}
/* exports.getsingleDateData = function(req,res){
    ExpenceDetails.find({'date':req.body.date}).select().exec(function (err, superCat) {
        if (err) {
          res.status(500).send({
            message: "Some error occurred while retrieving notes."
          });
        } else {
          res.status(200).json(superCat);
        }
})
} */
exports.getsingleDateData = function(req,res){
 
    ExpenceDetails.find({ $and: [
      { userId: req.params.id,
        date: req.body.date }]}
   
        ).exec(function (err, superCat) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(superCat);

        // if (superCat.length === 0) {
        //   res.status(200).send({
        //       "result": "NO RECORDS FOUND"
        //   })
        // }else{
        //   res.status(200).json(superCat);

        //   }
      }
})
}

exports.getSelectedDateData = function (req, res) {
  Product.find({ $and: [
    { userId: req.params.id,
      date:{
      '$gte': req.body.startDate,
      '$lte': req.body.endDate
    }}]
  }).select().exec(function (err, findData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(findData);
    }
  })
}
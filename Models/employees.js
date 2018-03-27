var connection = require('../connection');

function emp_getall() {

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('CALL emp_getall()', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}


module.exports = new emp_getall();
var connection = require('../connection');

function TodoDetail() {

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('CALL todo_detail()', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}


module.exports = new TodoDetail();
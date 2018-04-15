var connection = require('../connection');

function COIN() {
//test thanh cong
this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('call GETALLCOIN()' ,function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
//test thanh cong
//Tien hanh tao proceduce => ok
this.getbyid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('call getBYid(?)', [id], function(err, result) {
        con.release();
        res.send(result); 
      });
    });
  };
//ok đã test thành công
this.create = function(field_data,res) {
    connection.acquire(function(err, con) {
     // CALL createCOIN('5', 'XDN', 'NGON OK')
     // con.query('insert into DATA_COIN set ?', field_data, function(err, result) {
      con.query('CALL createCOIN(?,?,?)', [field_data.id,field_data.name,field_data.icon], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TẠO Không Thành Công'});
          console.log(err)
        } else {
          res.send({status: 0, message: 'TẠO OK '});
          console.log(field_data)
        }
      });
    });
  };

// đã test thành công
this.update = function(field_data, res) {
    connection.acquire(function(err, con) {
      //con.query('update DATA_COIN set ? where id = ?', [field_data, field_data.id], function(err, result) {
        con.query('CALL updatebyID_COIN(?,?,?);', [field_data.id, field_data.name, field_data.icon], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'DATA_COIN update failed'});
          console.log(err)
        } else {
          res.send({status: 0, message: 'DATA_COIN updated successfully'});
          console.log(field_data)
        }
      });
    });
  };
// đã test thành công  
  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
     // con.query('delete from DATA_COIN where id = ?', [id], function(err, result) {
        con.query('CALL deletebyID_COIN(?)', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
          console.log(err)
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}




module.exports = new COIN();

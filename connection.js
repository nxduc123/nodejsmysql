var mysql = require('mysql');
  
function Connection() {
  this.pool = null;
  
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 100,
      host: 'ducnxdb.ckn50iid6cii.us-east-1.rds.amazonaws.com',
      user: 'nxduc123',
      password: 'nxduc123',
      database: 'nxduc123'
    });
  };
  
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
      console.log(err)
    });
  };
}
  
module.exports = new Connection();
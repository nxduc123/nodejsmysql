var mysql = require('mysql');
  
function Connection() {
  this.pool = null;
  
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'sql12.freemysqlhosting.net',
      user: 'sql12228895',
      password: 'yMULImSZep',
      database: 'sql12228895'
    });
  };
  
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
      
    });
  };
}
  
module.exports = new Connection();
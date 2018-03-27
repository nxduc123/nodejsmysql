var todo = require('./Models/todo');
var tododetail = require('./Models/TodoDetail');
var emp_getall = require('./Models/todo')

module.exports = {
  configure: function(app) {
    app.get('/todo/', function(req, res) {
      todo.get(res);
    });

//tododtail get 1
    app.get('/todo/get10', function(req, res) {
    tododetail.get(res);
    });
//emp get all
    app.get('/todo/emp', function(req, res) {
    emp_getall.get(res);
    });


    app.get('/todo/get10', function(req, res) {
        todo.get(res);
      });
     
    app.get('/todo/read/:id/', function(req, res) {
      todo.read(res);
    });
 
    app.post('/todo/create', function(req, res) {
      todo.create(req.body, res);
    });
  
    app.put('/todo/update', function(req, res) {
      todo.update(req.body, res);
    });
  
    app.delete('/todo/delete/:id/', function(req, res) {
      todo.delete(req.params.id, res);
    });
    
  }
};
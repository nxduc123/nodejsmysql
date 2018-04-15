var coin = require('./Models/coin');

module.exports = {
  configure: function(app) {
//get all coin
    app.get('/coin', function(req, res, next) {
      coin.get(res);
    });
//get by id coin phục vụ seach
    app.get('/coin/:id', function(req, res, next) {
      coin.getbyid(req.params.id, res);
    });
// tạo mới 
    app.post('/coin/create', function(req, res,next ) {
      coin.create(req.body, res);
    
    });
//Update bản ghi
    app.put('/coin/update', function(req, res, next) {
      coin.update(req.body, res);
    });
//xóa coin theo ID
    app.delete('/coin/delete/:id', function(req, res,next) {
      coin.delete(req.params.id, res);
    })

// Trả lỗi khi not route
    app.use((req, res, next) => {
      const error = new Error('NOT FOUND');
      error.status = 404;
      next(error)
    });
    app.use((error, req, res, next)=>{
      res.status(error.status ||500);
      res.json({
        error : {
          message: error.message
        }
      });
    })
  }
};
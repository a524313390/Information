var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var infoRouter = require('./routes/info');
var infoLiRouter = require('./routes/info_li');
var companyRouter = require('./routes/company')
var companyLiRouter = require('./routes/companys')
var showRouter = require('./routes/show')
var expressJwt = require('express-jwt');
var apiRoutes = express.Router();
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var multer = require('multer')
const history = require('connect-history-api-fallback')

// DB config
let db = require('./config/databases');
// 链接数据库

mongoose.connect(db.mongUrl, {
  useNewUrlParser: true
})
var dbs = mongoose.connection;//获取connection实例
//使用Connetion监听连接状态
dbs.on('connected', function (err) {
  if (err) {
    console.log('连接数据库失败：' + err);
  } else {
    console.log('连接数据库成功！');
  }
});
dbs.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});

dbs.on("open", function () {
  console.log("数据库连成功");
});

var app = express();
//存储图片的路径
app.use(history());
var paths = 'uploads/images';
app.use(multer({ dest: paths }).array('file', 2));
app.use(express.static(path.join(__dirname, 'uploads')));//设置上传的目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressJWT({ secret: 'Bearer ' }).unless({ path: ['/api/users', '/api/users/login', '/api/users/register', '/api/users/infoadd'] }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/info', infoRouter);
app.use('/api/infoli', infoLiRouter);
app.use('/api/company', companyRouter)
app.use('/api/companys', companyLiRouter)
app.use('/api/show', showRouter)
// catch 404 and forward to error handler

app.use(function (req, res, next) {

  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  if (err.name === 'UnauthorizedError') {

    return res.status(401).json({
      msg: 'token效验错误'
    })
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

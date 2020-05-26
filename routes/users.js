var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var User = require('../models/user');
// 密码加密
var bcrypt = require('bcryptjs');
//头像插件
var gravatar = require('gravatar');
// 生成token
var jwt = require('jsonwebtoken');

// 会用body-parser中间件
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
let db = require('../config/databases');

//解析token
const tokens = require('../config/token');

var apiRoutes = express.Router();


/* 获取所有的用户 */
router.get('/', function (req, res, next) {
	let page = parseInt(req.query.page);
	let querys = {};
	let istatus = req.query.istatus;

	if (istatus) {
		querys.state = istatus
	}
	if (page == 0) {
		page = 1
	}

	let pageSize = parseInt(req.query.pageSize);
	let start = (page - 1) * pageSize;
	User.paginate(querys, {
		offset: start,
		limit: pageSize,
		sort: {
			_id: -1
		}
	}).then(function (result) {

		res.json({
			status: 0,
			result: result
		})

	});
})


//删除用户


router.get('/delete', function (req, res, next) {
	let _id = req.query.id;

	User.findOneAndRemove({ _id }).then(doc => {
		if (doc) {
			res.json({
				status: 0,
				result: doc
			})
		}
	}).catch(error => {
		res.json({
			status: 1,
			result: error
		})
	})
})
router.post('/register', function (req, res, next) {
	// 查询邮箱是否存在
	var email = {
		email: req.body.email
	};
	console.log(11111, email)
	User.findOne(email).then(doc => {
		if (doc) {
			return res.json({
				status: 1,
				msg: '邮箱已被注册'
			})
		} else {
			var avatar = gravatar.url(req.body.email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});
			let newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				avatar,
				istatus: req.body.istatus
			})
			bcrypt.genSalt(10, function (err, salt) {
				bcrypt.hash(newUser.password, salt, function (err, hash) {
					if (err) throw err;

					newUser.password = hash

					console.log(newUser)
					newUser.save().then(user => {
						res.json(user)
					})
				});
			});



		}
	})

});

/* GET users login 登陆接口  返回token*/
router.post('/login', function (req, res, next) {

	let name = req.body.name;

	let password = req.body.password;
	User.findOne({
		'$or': [{
			name
		}, {
			email: name
		}]
	}).then(user => {
		if (!user) {
			return res.json({
				status: 1,
				msg: '用户不存在,请注册'
			})
		} else {
			bcrypt.compare(password, user.password, function (err, pwd) {
				if (err) throw err;
				if (pwd) {
					let rule = {
						id: user.id,
						name: user.name,
						avatar: user.avatar,
						istatus: user.istatus,
						email: user.email
					}
					jwt.sign(rule, 'Bearer ', {
						expiresIn: 3600
					}, function (err, token) {
						if (err) throw err;

						res.json({
							status: 0,
							token: 'Bearer ' + token
						})
					});

				} else {
					res.json({
						status: 1,
						msg: '用户名或者密码错误'
					})
				}
			});
		}
	})
});

router.post('/changepwd', function (req, res, next) {
	let obj = {};
	let _id = req.body.id;
	obj.oldpwd = req.body.oldpwd;
	obj.password = req.body.pass;
	let salt = bcrypt.genSaltSync(10);
	User.findOne({
		_id
	}).then(docs => {
		bcrypt.compare(obj.oldpwd, docs.password, function (err, succ) {
			if (succ) {
				let hash = bcrypt.hashSync(obj.password, salt);

				User.findOneAndUpdate({ _id }, { $set: { password: hash } }, { new: true }).then(docs => {
					if (docs) {
						res.json({
							status: 0,
							msg: docs
						})
					}
				})
			} else {
				res.json({
					status: 1,
					msg: '原始密码输入错误'
				})
			}
		});
	})
})


// token效验
router.get('/current', function (req, res, next) {
	console.log(req.user.name)
	if (!req.user) {
		res.json({
			msg: 'token失效'
		})
	} else {
		res.json(req.user)
	}


})


//修改用户信息
router.post('/update', function (req, res, next) {
	// 查询邮箱是否存在
	let obj = {};
	let _id = req.body._id;
	let pass = req.body.pass;
	obj.email = req.body.email;
	obj.istatus = req.body.istatus;

	if (pass) {
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(pass, salt);

		obj.password = hash
	}

	User.findOneAndUpdate({
		_id
	}, obj, {
		new: true
	}).then(docs => {
		console.log(docs);
		if (docs) {
			res.json({
				status: 0,
				result: docs
			})
		}
	})
});

//获取小助手账户
router.get('/zhu', function (req, res, next) {
	User.find({ istatus: 3 }).then(doc => {
		res.json({
			code: 0,
			data: doc
		})
	}).catch(e => {
		res.json({
			code: 1,
			data: e
		})
	})

})
module.exports = router;

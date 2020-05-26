var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var Show = require('../models/show');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

function formMat(time) {

    let d = new Date(time);

    let batchDate = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
    return batchDate
}

router.get('/getList', async (req, res, next) => {
    if (!req.user) {
        res.json({
            msg: 'token失效'
        })
    } else {
        let { page, pageSize, username } = req.query;
        let infolen = await Show.find();
        let start = (page - 1) * pageSize;

        if (username) {
            Show.find({ username }).skip(start).limit(parseInt(pageSize)).sort({ '_id': -1 }).then(doc => {
                res.json({
                    code: 0,
                    data: doc,
                    total: infolen.length
                })
            })
        } else {
            Show.find().skip(start).limit(parseInt(pageSize)).sort({ '_id': -1 }).then(doc => {
                res.json({
                    code: 0,
                    data: doc,
                    total: infolen.length
                })
            })
        }


    }

})

router.post('/add', async (req, res, next) => {
    let { username, c_time, number } = req.body

    if (!req.user) {
        res.json({
            msg: 'token失效'
        })
    } else {


        const info = await Show.find({ username })
        const time = formMat(c_time)

        if (info.length == 0) {
            new Show({ username, c_time, number }).save().then(respon => {
                res.json({
                    code: 0,
                    data: respon
                })
            });
            return false;
        }

        var flag = info.some(item => {
            const newTime = formMat(item.c_time)
            if (newTime == time) {
                return true
            }
        })
        if (flag) {
            res.json({
                code: -1,
                data: '当天数据已经存在'
            })
        } else {
            new Show({ username, c_time, number }).save().then(respon => {
                res.json({
                    code: 0,
                    data: respon
                })
            });
        }
    }
})


router.get('/delete', (req, res, next) => {
    const { _id } = req.query;

    Show.findByIdAndRemove({ _id }).then(doc => {
        res.json({
            code: 0,
            data: '删除成功'
        })
    }).catch(e => {
        res.json({
            code: 1,
            data: '删除失败'
        })
    })
})


router.post('/update', (req, res, next) => {
    const { number, _id } = req.body;

    Show.findByIdAndUpdate({ _id }, { $set: { number } }, { new: true }).then(doc => {
        if (doc) {
            res.json({
                code: 0,
                data: doc
            })
        }
    }).catch(e => {
        res.json({
            code: 1,
            data: e
        })
    })

})
router.get('/search', async (req, res, next) => {
    const { username, startTime, endTime } = req.query;
    let { page = 1, pageSize = 10 } = req.query;
    let start = (page - 1) * pageSize;
    const userLen = await Show.find({ username });
    if (username && startTime && endTime) {
        Show.find({ c_time: { $gte: startTime, $lt: endTime }, username }).skip(start).limit(parseInt(pageSize)).sort({ '_id': -1 }).then(doc => {
            res.json({
                code: 0,
                data: doc,
                total: userLen.length
            })
        }).catch(e => {
            res.json({
                code: 1,
                data: e
            })
        })
    }
    if (startTime && endTime) {
        Show.find({ c_time: { $gte: startTime, $lt: endTime } }).skip(start).limit(parseInt(pageSize)).sort({ '_id': -1 }).then(doc => {
            res.json({
                code: 0,
                data: doc,
                total: userLen.length
            })
        }).catch(e => {
            res.json({
                code: 1,
                data: e
            })
        })
    }
    if (username) {




        Show.find({ username }).skip(start).limit(parseInt(pageSize)).sort({ '_id': -1 }).then(doc => {
            res.json({
                code: 0,
                data: doc,
                total: userLen.length
            })
        }).catch(e => {
            res.json({
                code: 1,
                data: e
            })
        })
    }



})


module.exports = router;
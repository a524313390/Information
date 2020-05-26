let mongoose = require('mongoose');
// user 模型
const Schema = mongoose.Schema;




const showSchema = new Schema({
    number: {
        required: true,
        type: Number
    },
    c_time: {
        required: true,
        type: Number
    },
    username: {
        type: String,
        required: true,

    }
});

let show = mongoose.model('show', showSchema, 'show')
module.exports = show
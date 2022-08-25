const mongoose = require('mongoose');
const Task = require('./Task.model');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    topic: {
       type: String,
       required: true
    },
    description: {
        type: String,
    },
    tasks: {
        type: [Task]
    },
    timestamps: Date

})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
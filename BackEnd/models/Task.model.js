const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
    },
    timestamps: Date

})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
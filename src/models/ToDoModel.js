const mongoose = require('mongoose');

let dataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    username: { type: String, required: true },
    status: { type: String, default: "new" },
    description: { type: String },
    complete: { type: Boolean },
    pass: { type: String, default: "" }
}, { timestamp: true, versionKey: false });

let ToDo = mongoose.model('todos', dataSchema);
module.exports = ToDo;
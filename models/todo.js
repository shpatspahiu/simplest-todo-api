const mongoose = require('mongoose')

const Schema = mongoose.Schema
const TaskSchema = new Schema({
  taskMessage: { type: String, required: true, maxLength: 250 },
  isDone: { type: Boolean },
  createdAt: { type: Date },
  lastUpdatedAt: { type: Date }
})

module.exports = mongoose.model("Task", TaskSchema)
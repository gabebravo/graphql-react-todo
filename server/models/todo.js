import uuid from 'node-uuid'
import mongoose from 'mongoose'
const schema = mongoose.Schema

const todoSchema = new schema({
  id: {type: String, default: uuid.v1},
  text: String,
  isComplete: Boolean
})

const model = mongoose.model('todo', todoSchema)
export default model
import mongoose from 'mongoose'
import Todo from './models/todo'

export const resolvers = {

  Query: { 

    todo: (root, { id }) => {
      return Todo.findOne({ id: id })
    },

    todos: () => Todo.find({}), 

    activeTodos: (root, { id }) => {
      return Todo.find({ isComplete: false })
    },

    completedTodos: (root, { id }) => {
      return Todo.find({ isComplete: true })
    },

  },

  Mutation: {

    addTodo: (root, { text }) => {
      const todo = new Todo({ text, isComplete: false })
      return todo.save();
    }, 

    deleteTodo: (root, { id }) => {
      return Todo.remove({ id })
    }, 

    markTodoComplete: (root, { id }) => {
      return Todo.findOneAndUpdate({ id }, { isComplete: true })
    },

    updateTodoText: (root, { id, text }) => {
      return Todo.findOneAndUpdate({ id }, { text })
    }, 

  }
}

export default resolvers


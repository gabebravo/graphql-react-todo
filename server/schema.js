const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = 
`type Todo {
  id: String
  text: String
  isComplete: Boolean
}

type Query {
  todo(id: String): Todo
  todos: [Todo]
  activeTodos: [Todo]
  completedTodos: [Todo]
}

type Mutation {
  addTodo(text: String!): Todo
  deleteTodo(id: String!): Todo
  updateTodoText(id: String!, text: String!): Todo
  markTodoComplete(id: String!): Todo
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
module.exports = schema
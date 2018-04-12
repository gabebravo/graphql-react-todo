# graphql-react-todo
Full stack Todo app using MongoDB, Mongoose ODM, Express, Apollo GraphQL Server, Apollo Client, and React

### SCHEMA : 

Todo {  
id: String  
text: String  
isComplete: Boolean  
}  

### QUERIES : 
```javascript
todo(id: String): Todo  
{
  todo(id: "59520430-233b-11e8-be30-a7fcc3d2da82"){
    text
    isComplete
  }
}```

todos: [Todo]
{
  todos {
    id
    text
    isComplete
  }
}

activeTodos: [Todo]
{
  activeTodos {
    id
    text
    isComplete
  }
}

completedTodos: [Todo]
{
  completedTodos {
    id
    text
    isComplete
  }
}

### MUTATIONS :

**addTodo(text: String!): Todo**
mutation {
  addTodo(text: "Walk the Dog")
  {
    id
    text
    isComplete
  }
}

deleteTodo(id: String!): Todo
mutation {
  deleteTodo(id: "1a63aef0-3e01-11e8-a0d4-b714ab1aa93c"){
    id
    text
    isComplete
  }
}

updateTodoText(id: String!, text: String!): Todo
mutation {
  updateTodoText(id: "3fbd5720-234c-11e8-9b97-d3265043e8da", text: "Walk the dog"){
    id
    text
    isComplete
  }
}

**markTodoComplete(id: String!): Todo**
mutation {
  markTodoComplete(id: "3fbd5720-234c-11e8-9b97-d3265043e8da"){
    id
    text
    isComplete
  }
}


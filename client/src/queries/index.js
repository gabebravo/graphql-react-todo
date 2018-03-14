import gql from 'graphql-tag';

export const allTodos = gql`{
  todos {
    id
    text
    isComplete
  }
}`;

export const specificTodo = gql`
  query TodoQuery($id: String!){
    todo(id: $id){
      text
      isComplete
    }
}`;

export const activeTodos = gql`{
  activeTodos {
    id
    text
    isComplete
  }
}`;

export const completedTodos = gql`{
  completedTodos {
    id
    text
    isComplete
  }
}`;
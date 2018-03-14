import gql from 'graphql-tag';

export const addTodo = gql`
  mutation($text: String!) {
    addTodo(text: $text) {
      id
      text	
      isComplete
    }
  }`;

export const editTodo = gql`
  mutation($id: String!, $text: String!) {
    updateTodoText(id: $id, text: $text) {
      id
      text	
      isComplete
    }
  }`;

export const deleteTodo = gql`
  mutation($id: String!) {
    deleteTodo(id: $id) {
      id
      text	
      isComplete
    }
  }`;

  export const markCompleted = gql`
    mutation($id: String!) {
      markTodoComplete(id: $id) {
        id
        text	
        isComplete
      }
  }`;
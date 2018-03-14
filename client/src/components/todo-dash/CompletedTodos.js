import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { completedTodos } from '../../queries';
import CompletedTodo from './CompletedTodo';

export class CompletedTodos extends Component {

  getCompletedTodos = todos => {

    return todos && todos.length > 0  ?

      todos.map( (todo, index) => {
          return <CompletedTodo 
            key={index}
            id={todo.id}
            todoDescription={todo.text} />
      })

      : <div>{`Let's start completing some todos`}</div>;
  }

  render() {

    const { completedTodos = null } = this.props.data;
    
    return (
      <div>
        { this.getCompletedTodos(completedTodos) }
      </div>
    )
  }

}

export default graphql(completedTodos)(CompletedTodos)

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { activeTodos } from '../../queries';
import ActiveTodo from './ActiveTodo';

export class ActiveTodos extends Component {

  getActiveTodos = todos => {

    return todos && todos.length > 0 ?

      todos.map( (todo, index) => {
          return <ActiveTodo 
            key={index}
            id={todo.id}
            todoDescription={todo.text} />
      })

      : <div>{`Let's get cracking and add some todos`}</div>;
  }

  render() {

    const { activeTodos = null } = this.props.data;

    return (
      <div>
        { this.getActiveTodos(activeTodos) }
      </div>
    )
  }

}

export default graphql(activeTodos)(ActiveTodos)

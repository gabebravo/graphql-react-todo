import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { markCompleted } from '../../mutations';
import { activeTodos, completedTodos } from '../../queries';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const buttonStyles = {
  color: '#000',
  backgroundColor: '#fff',
  borderColor: '#ccc'
}

const cardStyles = {
  backgroundColor: '#2980b9', 
  borderColor: '#2980b9', 
  marginBottom: '5vh'
}

class ActiveTodo extends Component {

  render() {

    const { id, todoDescription } = this.props; 

    return (
      <Row style={{ justifyContent: 'center' }}>
        <Col sm="6">
          <Card body inverse style={cardStyles}>
            <CardTitle>
              <Link to={`/edit-todo/${id}`}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </Link>
              {todoDescription}</CardTitle>
            <Button style={buttonStyles}
              onClick={ 
                () => this.props.mutate({ 
                  variables: { id },
                  refetchQueries: [{ query: activeTodos }, { query: completedTodos }] 
                }) 
              }>Mark Completed</Button>
          </Card>
        </Col>
      </Row>
    );

  }
}

export default graphql(markCompleted)(ActiveTodo);
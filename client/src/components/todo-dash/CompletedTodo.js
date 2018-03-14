import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { deleteTodo } from '../../mutations';
import { completedTodos } from '../../queries';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';

const buttonStyles = {
  color: '#000',
  backgroundColor: '#fff',
  borderColor: '#ccc'
}

const cardStyles = { 
  backgroundColor: '#95a5a6', 
  borderColor: '#95a5a6', 
  marginBottom: '5vh' 
}

class CompletedTodo extends Component {

  render() {

    const { id, todoDescription } = this.props;

    return (

      <Row style={{ justifyContent: 'center' }}>
        <Col sm="6">
          <Card body inverse style={cardStyles}>
            <CardTitle style={{ color: 'hsla(0,0%,100%,.65)' }}>{todoDescription}</CardTitle>
            <Button style={buttonStyles}
              onClick={ 
                () => this.props.mutate({ 
                  variables: { id },
                  refetchQueries: [{ query: completedTodos }] 
                }) 
              }>Remove</Button>
          </Card>
        </Col>
      </Row>

    )

  }

}

export default graphql(deleteTodo)(CompletedTodo);
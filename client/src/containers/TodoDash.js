import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/shared/Header';
import ActiveTodos from '../components/todo-dash/ActiveTodos';
import CompletedTodos from '../components/todo-dash/CompletedTodos';

class TodoDash extends Component {

  render() {
    
    return (
      <div>

        <Header />

        <Container>
          <Row style={{ textAlign: 'center', paddingTop: '20vh' }}>
            <Col>
              <Container>
                <Row>

                  <Col sm="12" md="6">
                    <h1>Pending</h1>
                    <ActiveTodos />
                  </Col>

                  <Col sm="12" md="6">
                    <h1>Completed</h1>
                    <CompletedTodos />
                  </Col>
                  
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default TodoDash;
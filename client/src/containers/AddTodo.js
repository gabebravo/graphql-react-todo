import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addTodo } from '../mutations';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import Header from '../components/shared/Header';
import ModalPop from '../components/shared/ModalPop';

class AddTodo extends Component {

  state = {
    taskDescription: '', 
    showModal: false
  }

  updateTaskDescription = e => {
    this.setState({
      taskDescription: e.target.value
    })
  }

  submitTask = () => {
    this.props.mutate({ 
      variables: { text: this.state.taskDescription }
    })
    this.setState({ showModal: true });
    this.setState({
      taskDescription: ''
    })
  }

  toggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {

    const button = this.state.taskDescription.length === 0 ? 
    <Button className="add-btn" disabled>Submit</Button>:
    <Button onClick={this.submitTask} className="add-btn">Submit</Button>

  return (
      <div>
        <Header />

        <Container>
          <Row style={{ paddingTop: '20vh' }}><Col>
              <Form>
                <FormGroup>
                  <h1 htmlFor="task">Enter Task</h1>
                  <Input type="text" name="task" 
                    onChange={this.updateTaskDescription}
                    value={this.state.taskDescription} 
                    placeholder="ex. Walk the dog" />
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row><Col>{button}</Col></Row>
        </Container>

        <ModalPop 
          showModal={this.state.showModal} 
          toggleModal={this.toggle}
          headerText="Success"
          bodyText="The todo has been added. Please return to the main page by clicking OK below."
        />

      </div>
    );
  }
}

export default graphql(addTodo)(AddTodo);

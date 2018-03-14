
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { specificTodo, activeTodos } from '../queries';
import { editTodo } from '../mutations';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import Header from '../components/shared/Header';
import ModalPop from '../components/shared/ModalPop';

class EditTodo extends Component {

  state = {
    taskDescription: null, 
    showModal: false
  }

  updateTaskDescription = e => {
    this.setState({
      taskDescription: e.target.value
    })
  }

  submitTask = () => {
    this.props.mutate({ 
      variables: { 
        id: this.props.match.params.id,
        text: this.state.taskDescription 
      }, refetchQueries: [{ query: activeTodos }]
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

    const originalText = this.props.data.todo && this.props.data.todo.text;

    const value = this.state.taskDescription !== null
      ? this.state.taskDescription || '' 
      : originalText || '';

    const button = value.length === 0 ? 
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
                    value={value} 
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

export default graphql(editTodo)(graphql(specificTodo, {
  options: props => ({ variables: { id: props.match.params.id } })
})(EditTodo))

// export default graphql(specificTodo, {
//     options: props => ({ variables: { id: props.match.params.id } })
//   })(EditTodo);



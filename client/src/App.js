import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// components
import TodoDash from './containers/TodoDash';
import AddTodo from './containers/AddTodo';
import EditTodo from './containers/EditTodo';
import NotFound from './components/shared/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={TodoDash} />
          <Route path='/add-todo' component={AddTodo} />
          <Route path='/edit-todo/:id' component={EditTodo} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
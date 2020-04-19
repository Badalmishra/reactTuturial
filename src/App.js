import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Todo from './components/Todo';
import Message from './components/Message';
import Header from './components/Header';

class App extends React.Component {

  render(){
    return(
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Todo/>  
          </Route>
          <Route path="/message">
            <Message/>  
          </Route>
        </Switch>
      
      </Router>
    )
  }
}

export default App;

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
import Login from './components/Login'

class App extends React.Component {
  
  render(){
    return(
      <Router>
        <Header/>
        <Login  />
        <Switch>
          <Route exact path="/">
            <Todo/>  
          </Route>
          <Route 
                exact 
                path="/message/:id" 
                render={(props)=> <Message {...props}  />}/>
                
        </Switch>
      
      </Router>
    )
  }
}

export default App;

import React from 'react';
import List from './components/List';
import Form from './components/Form';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos:[
        {
          body:'nacho bc!',
          status:1
        },
        {
          body:'khao bc!',
          status:0
        },
        {
          body:'aish karo bc!',
          status:1
        },
      ]
    }
  }

  render(){
    return (
      <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
          <List todos={this.state.todos}/>
          <Form/>
      </div>
    );
  }
}

export default App;

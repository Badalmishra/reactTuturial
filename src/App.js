import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username : "abc"
    }
  }
  changeName() {
    this.setState({username:'new name'})
  }
  render(){
    return (
      <div>
        <Header name={this.state.username}/>
        <hr/>
        <Body changeName={() => this.changeName()} name={this.state.username}/>

      </div>
    );
  }
}

export default App;

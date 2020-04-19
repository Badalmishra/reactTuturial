import React from 'react';
import List from './List';
import Form from './Form';


class Todo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos:[
        {
          id:1,
          body:'nacho bc!',
          status:1
        },
        {
          id:2,
          body:'khao bc!',
          status:0
        },
        {
          id:3,
          body:'aish karo bc!',
          status:1
        },
      ]
    }
  }
  componentDidMount(){
    // this.markDone(2)
  }

  getTodos(){
    fetch()// set state with server data
  }
  togglePending(id){
    console.log('id from list:: ',id)

    let array = this.state.todos
    let ourTargetTask = array.find(elem => {return elem.id == id})
    ourTargetTask.status = ourTargetTask.status == 0?1:0
    this.setState({todos:array})
  }
  deleteTask(id) {
    console.log('id from list:: ',id)

    let array = this.state.todos.filter(singleTodo=>{return singleTodo.id!=id})
    this.setState({todos:array})
  }
  addTodo(body){
    // this.setState({
    //   todos:[
    //           ...this.state.todos,
    //           {id:Math.random(),body:body,status:1}
    //         ]
    // })
    let todos = this.state.todos
    let newTask = {id:Math.random(),body:body,status:0}
    todos.push(newTask)
    this.setState({todos:todos})    
  }
  render(){
    return (
      <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
          <List 
            togglePending={(id)=>this.togglePending(id)} 
            todos={this.state.todos}
            deleteTask={(id)=>this.deleteTask(id)}
              />
          <Form addTodo={(body)=>this.addTodo(body)}/>
      </div>
    );
  }
}

export default Todo;

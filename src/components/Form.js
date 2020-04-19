import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body:''
        }
    }
    setBody(event ){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    send(){
        this.props.addTodo(this.state.body)
        this.setState({body:''})
    }
    render() {
        return (
            <div className="input-group mt-2" style={{width:'50%'}}>
                  <input name="body" value={this.state.body} onChange={(event)=>this.setBody(event)} type="text" className="form-control" placeholder="Enter Task" />
                    <div class="input-group-append">
                        <button onClick={()=>this.send(this.state.body)} class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
            </div>
        )
    }
}

export default  Form
import React from 'react'
import { withRouter } from "react-router-dom";

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Message:''
        }
    }
    componentDidMount(){
        this.setState({Message:this.props.match.params.id})
        console.log(this.props)
    }
    render() {
        return (
            <div className="container alert alert-primary">
               you have a message : {this.state.Message}
            </div>
        )
    }
}

export default  Message
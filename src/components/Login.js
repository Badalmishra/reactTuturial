import React from 'react'
import {

    Link
  } from "react-router-dom";

import { ListGroup,Button ,Modal, Spinner, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setLogin, setHide } from '../actions'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            email:'test@test.com',
            password: 'test#1'
        }
    }
    componentDidMount(){
        let token = localStorage.getItem('token')
        if (token) {
            this.props.setLogin(token)
        }
    }
    setFields(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    //just for testing
    // componentDidMount(){
    //     this.login()
    // }
    login(event=false){
        this.setState({loading:true})
        if(event)
            event.preventDefault()
        let data = {email:this.state.email,password:this.state.password}
        fetch('http://localhost:3001/user/login',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data),

        }).then(response=>response.json())
        .then(parsedJson=>{
            this.setState({loading:false})
            console.log('parsedJSON response:: ',parsedJson)
            //set token to local storage
            localStorage.setItem('token',parsedJson.token)
            this.props.setLogin('test')
            this.props.setHide()

            //change application state
        })
    }
    render() {
        return (
            <>
    
            <Modal show={this.props.login.show} onHide={()=>this.props.setHide()} >
                
                    <Modal.Header closeButton>
                        <Modal.Title>User Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form  >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  value={this.state.email} onChange={(event)=>this.setFields(event)} type="email" name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={this.state.password}  onChange={(event)=>this.setFields(event)} type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={(event)=>this.login(event)} variant="primary" type="submit">
                            {
                                this.state.loading
                                ?
                                <Spinner size="sm" animation="border" />
                                :
                                null
                            }
                            Submit
                        </Button>
                    </Form>
                    </Modal.Body>
            </Modal>
            </>

        )
    }
}

const mapStateToProps = state => ({
    login: state.login,
  })
  
const mapDispatchToProps = dispatch => ({
    setLogin: token => dispatch(setLogin(token)),
    // setLogin: token => dispatch(setLogin(token)),
    setHide: () => dispatch(setHide()),
   
})
// export default  Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)
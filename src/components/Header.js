import React from 'react'
import {

    Link
  } from "react-router-dom";

import { ListGroup,Button ,Modal, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { setLogin,setShow,setLogout } from '../actions'
class Header extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <>
            <nav className="navbar px-5 navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">React Router</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {
                            this.props.login.token 
                            ?
                            <Button onClick={()=>this.props.setLogout()}>
                            Log out
                            </Button>
                            :
                            <Button onClick={()=>this.props.setShow()}>
                            Login
                            </Button>
                        }
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/message/hello">Message</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            </>

        )
    }
}

const mapStateToProps = state => ({
    login: state.login
  })
  
const mapDispatchToProps = dispatch => ({
    setLogin: token => dispatch(setLogin(token)),
    setShow: () => dispatch(setShow()),
    setLogout: () => dispatch(setLogout()),
   
})
// export default  Login
export default connect(mapStateToProps, mapDispatchToProps)(Header)

// export default  Header
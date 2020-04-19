import React from 'react'
import {

    Link
  } from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <nav className="navbar px-5 navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">React Router</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/message">Message</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default  Header
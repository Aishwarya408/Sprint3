
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
    isLoggedIn = false;
    constructor(props) {
        super(props)

        this.state = {

        }
        var url = window.location.pathname.split('/');
        console.log(url);
        if (url.indexOf("login") > -1 || url.length === 1)
            this.isLoggedIn = true;
        console.log(window.location.pathname + ' ' + this.isLoggedIn);
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/home">Online Survey Portal</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/register"}>Register</Link>
                                </li>
                            </ul>
                            {!this.isLoggedIn ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/login"} onClick={this.logout}>Logout</Link>
                                </li>
                            </ul> : null}
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
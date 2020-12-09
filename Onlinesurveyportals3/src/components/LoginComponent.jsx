import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class LoginComponent extends Component {
    errorMessage = false;
    constructor(props) {
        super(props)
        this.state = { 
            user:this.props.match.params.topicid,
            userName: '',
            password: '' };
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    loginForm = (e) => {
        debugger;
        e.preventDefault();
        let admin = { userName: this.state.userName, password: this.state.password };
        if (admin.userName === 'Aishwarya' && admin.password === 'aishu123')
            this.props.history.push("/surveyor");
        else if (admin.userName === 'aishu' && admin.password === '123')
            this.props.history.push("/participant");
        else {
            this.state.userName = '';
            this.state.password = '';
            this.errorMessage = true;
            this.props.history.push("/login");
        }
        // AdminService.getUserDetails(admin.userName, admin.password).then((res) => {
        //     if (res.data){
        //         var url= res.data;
        //         console.log(url);
        //         this.props.history.push("/surveyor");
        //     }
        //     else {
        //         this.state.userName = '';
        //         this.state.password = '';
        //         this.state.result = true;
        //         this.props.history.push("/login");
        //     }
        // });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-4 offset-md-4 offset-md-4 p-4 bg-white rounded shadow">
                            <h3 className="text-center">Login</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>User Name:</label>
                                        <input placeholder="UserName" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input placeholder="Password" name="Password" type="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-success" onClick={this.loginForm}>Login</button>
                                    </div>
                                    {this.errorMessage ? <label className="text-danger small">Invalid Login</label> : null}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent
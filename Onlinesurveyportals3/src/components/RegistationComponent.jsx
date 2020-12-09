
import React, { Component } from 'react'
import TopicService from '../services/TopicService';
import { Row, Form, Col, Button } from 'react-bootstrap';
import SurveyorService from '../services/SurveyorService';

class RegistationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            id: 0,
            lastname: '',
            phone: '',
            role: '',
            userName: '',
            userPassword: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.saveRegistation = this.saveRegistation.bind(this);
    }
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changePhoneHandler = (event) => {
        this.setState({ phone: event.target.value });
    }
    changeRoleHandler = (event) => {
        this.setState({ role: event.target.value });
    }
    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }
    changeUserPasswordHandler = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    saveRegistation = (e) => {
        e.preventDefault();
        let registationData = {
            email: this.state.email,
            firstName: this.state.firstName,
            id: 10,
            lastname: this.state.lastname,
            phone: this.state.phone,
            role: this.state.role,
            userName: this.state.userName,
            userPassword: this.state.userPassword
        }
        console.log('topic => ' + JSON.stringify(registationData));
        SurveyorService.createSurveyor(registationData).then(res => {
            alert('Registation complete, Click OK to Login');
            this.props.history.push('/login');
        });
    }

    componentDidMount() {
        TopicService.getTopicById(this.props.match.params.topicid).then((res) => {
            let topic = res.data;
            this.setState({ topicName: topic.topicName });
        });
    }
    render() {
        return (
            <div className='text-white'>
                <h2>Registration <hr /> </h2>
                <Row>
                    <Col sm={6}>
                        <form>
                            <div className="form-group">
                                <label>First Name: <span className="text-danger">*</span></label>
                                <input placeholder="Enter First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                            </div>
                            <div className="form-group">
                                <label>Last Name: <span className="text-danger">*</span></label>
                                <input placeholder="Enter Last Name" name="lastname" className="form-control"
                                    value={this.state.lastname} onChange={this.changeLastNameHandler}></input>
                            </div>
                            <div className="form-group">
                                <label>Email: <span className="text-danger">*</span></label>
                                <input placeholder="Enter Email" name="email" type="email" className="form-control"
                                    value={this.state.email} onChange={this.changeEmailHandler}></input>
                            </div>
                            <div className="form-group">
                                <label>Phone: <span className="text-danger">*</span></label>
                                <input placeholder="Enter Phone" name="phone" minLength="10" maxLength="10" className="form-control"
                                    value={this.state.phone} onChange={this.changePhoneHandler}></input>
                            </div>
                            <div className="form-group">
                                <label>Role: <span className="text-danger">*</span></label>
                                <input placeholder="Enter Role" name="role" className="form-control"
                                    value={this.state.role} onChange={this.changeRoleHandler}></input>
                            </div>
                            <div className="form-group">
                                <label>User Name: <span className="text-danger">*</span></label>
                                <input placeholder="Enter User Name" name="userName" className="form-control"
                                    value={this.state.userName} onChange={this.changeUserNameHandler}></input>
                            </div>
                            <div className="form-group">
                                <label>User Password: <span className="text-danger">*</span></label>
                                <input placeholder="Enter User Password" name="userPassword" className="form-control"
                                    value={this.state.userPassword} onChange={this.changeUserPasswordHandler}></input>
                            </div>
                            <button className="btn btn-success" onClick={this.saveRegistation}><i class="fa fa-floppy-o"></i> Register</button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default RegistationComponent;

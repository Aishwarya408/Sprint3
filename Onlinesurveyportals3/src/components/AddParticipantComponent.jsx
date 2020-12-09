
import React, { Component } from 'react'
import ParticipantService from '../services/ParticipantService';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddParticipantComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: ''

    }
    this.changeParticipantHandler = this.changeParticipantHandler.bind(this);
    this.saveParticipant = this.saveParticipant.bind(this);
  }
  changeParticipantHandler = (event) => {
    this.setState({ participant: event.target.value });
  }
  saveParticipant = (e) => {
    e.preventDefault();
    let participant = { participant: this.state.participant };
    console.log('participant => ' + JSON.stringify(participant));
    ParticipantService.createParticipant(participant).then(res => {
      this.props.history.push('/allparticipants');
    });
  }
  cancel() {
    this.props.history.push('/allparticipants');
  }

  render() {
    let pageTitle;
    if (this.state.participant) {
      pageTitle = <h2>Edit Participant</h2>
    } else {
      pageTitle = <h2>Add Participant</h2>
    }
    return (
      <div className='text-white'>
        {pageTitle}
        <Row>
          <Col sm={6}>
            <form>
              <div className="form-group">
                <label>First Name:</label>
                <input placeholder="Participant" name="participant" className="form-control"
                  value={this.state.participant} onChange={this.changeParticipantHandler}></input>
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input placeholder="Participant" name="participant" className="form-control"
                  value={this.state.participant} onChange={this.changeParticipantHandler}></input>
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input placeholder="Participant" name="participant" className="form-control"
                  value={this.state.participant} onChange={this.changeParticipantHandler}></input>
              </div>
              <button className="btn btn-success" onClick={this.saveParticipant}>Save</button>
              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

              <button className="btn btn-primary float-right mx-1" onClick={() => this.props.history.push("/allparticipants")}>
                <i className="fa fa-angle-double-left"></i> Back to List
              </button>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddParticipantComponent;

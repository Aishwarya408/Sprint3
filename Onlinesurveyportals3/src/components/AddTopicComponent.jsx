
import React, { Component } from 'react'
import TopicService from '../services/TopicService';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      topicName: ''
    }
    this.changeTopicNameHandler = this.changeTopicNameHandler.bind(this);
    this.saveTopic = this.saveTopic.bind(this);
  }
  changeTopicNameHandler = (event) => {
    this.setState({ topicName: event.target.value });
  }
 
  saveTopic = (e) => {
    e.preventDefault();
    let topicData = {
      id: 0,
      topicName: this.state.topicName
    };
    console.log('topic => ' + JSON.stringify(topicData));
    TopicService.createTopic(topicData).then(res => {
      this.props.history.push('/alltopics');
    });
  }

  componentDidMount() {
    TopicService.getTopicById(this.props.match.params.topicid).then((res) => {
      let topic = res.data;
      this.setState({ topicName: topic.topicName });
    });
  }

  updateTopic = (e) => {
    e.preventDefault();
    let topic = { topicName: this.state.topicName, id: this.props.match.params.topicid };
    console.log('topic => ' + JSON.stringify(topic));
    TopicService.updateTopic(topic, this.props.match.params.topicid).then(res => {
      this.props.history.push('/alltopics');
    });
  }

  cancel() {
    this.props.history.push('/alltopics');
  }

  render() {
    let pageTitle;
    if (this.props.match.params.topicid) {
      pageTitle = <h2>Edit Topic</h2>
    } else {
      pageTitle = <h2>Add Topic</h2>
    }
    return (
      <div className='text-white'>
        {pageTitle}
        <Row>
          <Col sm={6}>
            <form>
              <div className="form-group">
                <label>Topic:</label>
                <input placeholder="Enter Topic" name="topicName" className="form-control"
                  value={this.state.topicName} onChange={this.changeTopicNameHandler}></input>
              </div>
              {/* <div className="form-group">
                <label>Description:</label>
                <textarea placeholder="Enter Description" name="topic" className="form-control"
                  value={this.state.topic} onChange={this.changeDescriptionHandler}></textarea>
              </div> */}
              {this.props.match.params.topicid ? <button className="btn btn-success" onClick={this.updateTopic}>Update</button> : 
              <button className="btn btn-success" onClick={this.saveTopic}><i class="fa fa-floppy-o"></i> Save</button>}
              <button className="btn btn-danger ml-2" onClick={this.cancel.bind(this)}><i class="fa fa-times" aria-hidden="true"></i> Cancel</button>

              <button className="btn btn-primary float-right mx-1" onClick={() => this.props.history.push("/alltopics")}>
                <i className="fa fa-angle-double-left"></i> Back to List
              </button>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddTopic;

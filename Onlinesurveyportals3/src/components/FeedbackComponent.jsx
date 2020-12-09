import React, { Component } from 'react'
import TopicService from '../services/TopicService';
import { Row, Form, Col, Button } from 'react-bootstrap';
import FeedbackService from '../services/FeedbackService';

class FeedbackComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: '',
            feedbck: '',
            topicid: 0
        }
        this.changefeedbckHandler = this.changefeedbckHandler.bind(this);
        this.saveFeedback = this.saveFeedback.bind(this);
    }
    changefeedbckHandler = (event) => {
        this.setState({ feedbck: event.target.value });
    }

    saveFeedback = (e) => {
        e.preventDefault();
        let feedbackData = {
            sid: 0,
            feedbck: this.state.feedbck
        };
        FeedbackService.createFeedback(feedbackData).then(res => {
            alert('Thank you for submitting feedback');
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className='text-white'>
                <h2>Feedback</h2>
                <Row>
                    <Col sm={6}>
                        <form>
                            <div className="form-group">
                                <textarea placeholder="Enter Feedback" name="feedbck" className="form-control"
                                    value={this.state.feedbck} onChange={this.changefeedbckHandler}></textarea>
                            </div>
                            <button className="btn btn-success float-right" onClick={this.saveFeedback}><i class="fa fa-floppy-o"></i> Submit</button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FeedbackComponent;

import React, { Component } from 'react'
import AdminService from '../services/AdminService';
import TopicService from '../services/TopicService';
import { Row, Form, Col, Button } from 'react-bootstrap';
import QuestionService from '../services/QuestionService';
import AnswerService from '../services/AnswerService';

class ParticipantsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultMessage: '',
            allTopics: [],
            topicid: '',
            questionList: [],
            questionId: '',
            answer: ''
        };
        this.changeAnswerHandler = this.changeAnswerHandler.bind(this);

    }
    changeAnswerHandler = (event) => {
        this.setState({ answer: event.target.value });
    }
    componentDidMount() {
        TopicService.getTopics().then((res) => {
            this.setState({ allTopics: res.data });
        });
    }

    onCreateTopic = () => {
        alert(this.state.topicid);
        this.setState({ topicid: this.state.topicid });
    }

    selectTopic = (e) => {
        let selectedValue = e.target.value;
        this.setState({ topicid: selectedValue });
        QuestionService.getQuestions().then((res) => {
            this.setState({ questionList: res.data.filter(q => q.topicid == this.state.topicid) });
        });
    }

    selectQuestion = (e) => {
        let selectedValue = e.target.value;
        this.setState({ questionId: selectedValue });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let questionData = {
            id: 0,
            answer: this.state.answer,
            questionid: this.state.questionId
        };

        console.log('Answer => ' + JSON.stringify(questionData));
        AnswerService.createAnswer(questionData).then(res => {
            alert('Answer submitted successfully');
            this.props.history.push('/feedback');
        });
    }


    render() {
        console.log(this.props.match.params.topicid);
        const { allTopics, questionList } = this.state;
        let allTopicsList = allTopics.length > 0
            && allTopics.map((item, i) => {
                return (
                    <option key={i} value={item.id} selected={this.state.topicid === item.id}>{item.topicName}</option>
                )
            }, this);

        let allQuestionsList = questionList.length > 0
            && questionList.map((item, i) => {
                return (
                    <option key={i} value={item.id} selected={this.state.topicid === item.id}>{item.question}</option>
                )
            }, this);
        return (
            <div className="container text-white">
                <h2>Welcome Participant</h2>
                <Row>
                    <Col sm={6}>
                        <form>
                            <div className="form-group">
                                <label>Select a Topic:</label>
                                <select className="form-control form-control-sm" name="topic" onChange={this.selectTopic}>
                                    {allTopicsList}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Select a Question:</label>
                                <select className="form-control form-control-sm" name="question" onChange={this.selectQuestion}>
                                    {allQuestionsList}
                                </select>
                            </div>
                            {this.state.questionId != "" ?
                                <div className="form-group">
                                    <label>Answer:</label>
                                    <textarea placeholder="Enter Answer" name="answer" className="form-control"
                                        value={this.state.answer} onChange={this.changeAnswerHandler}></textarea>
                                </div> : null}
                            {/* <div className="form-group">
                                <label>Feedback:</label>
                                <textarea placeholder="Enter Feedback" name="feedback" className="form-control"
                                    value={this.state.feedback} onChange={this.changeFeedbackHandler}></textarea>
                            </div>
                                 */}
                            <div className="form-group float-right">
                                <button className="btn btn-success btn-sm" onClick={this.onSubmit}>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default ParticipantsComponent
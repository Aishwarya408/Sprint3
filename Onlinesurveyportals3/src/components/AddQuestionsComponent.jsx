import React, { Component } from 'react'
import QuestionService from '../services/QuestionService';
import { Row, Form, Col, Button } from 'react-bootstrap';
import TopicService from '../services/TopicService';

class AddQuestionsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            question: '',
            topicid: '',
            allTopics:[]
        }
        this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
    }
    changeQuestionHandler = (event) => {
        this.setState({ question: event.target.value });
    }

    saveQuestion = (e) => {
        e.preventDefault();
        let questionData = {
            id: 0,
            question: this.state.question,
            topicid: this.state.topicid
        };
        console.log('question => ' + JSON.stringify(questionData));
        QuestionService.createQuestion(questionData).then(res => {
            this.props.history.push('/allquestions');
            alert('Question saved successfully.');
        });
    }

    componentDidMount() {
        TopicService.getTopics().then((res) => {
            this.setState({ allTopics: res.data });
        });
        QuestionService.getQuestionById(this.props.match.params.questionId).then((res) => {
            let question = res.data;
            this.setState({ question: question.question,topicid: question.topicid });
        });
    }

    updateQuestion = (e) => {
        e.preventDefault();
        let questionData = { question: this.state.question,topicid: this.state.topicid, id: this.props.match.params.questionId };
        console.log('question => ' + JSON.stringify(questionData));
        QuestionService.updateQuestion(questionData, this.props.match.params.questionId).then(res => {
            this.props.history.push('/allquestions');
            alert('Question updated successfully.');
        });
    }

    cancel() {
        this.props.history.push('/allquestions');
    }
    
    selectTopic = (e) => {
        let selectedValue = e.target.value;
        this.setState({ topicid: selectedValue });
    }

    render() {
        let pageTitle;
        if (this.props.match.params.questionId) {
            pageTitle = <h2>Edit Question</h2>
        } else {
            pageTitle = <h2>Add Question</h2>
        }

        const { allTopics } = this.state;
        let allTopicsList = allTopics.length > 0
            && allTopics.map((item, i) => {
                return (
                    <option key={i} value={item.id} selected={this.state.topicid === item.id}>{item.topicName}</option>
                )
            }, this);

        return (
            <div className='text-white'>
                {pageTitle}
                <Row>
                    <Col sm={6}>
                        <form>
                            <div className="form-group">
                                <label>Select a Topic:</label>
                                <select className="form-control form-control-sm" name="topic" onChange={this.selectTopic}>
                                    {allTopicsList}
                                </select>
                                {/* <textarea placeholder="Enter Description" name="question"
                                    value={this.state.question} onChange={this.changeDescriptionHandler}></textarea> */}
                            </div>
                            <div className="form-group">
                                <label>Question:</label>
                                <input placeholder="Enter Question" name="question" className="form-control"
                                    value={this.state.question} onChange={this.changeQuestionHandler}></input>
                            </div>

                            {this.props.match.params.questionId ? <button className="btn btn-success" onClick={this.updateQuestion}>Update</button> :
                                <button className="btn btn-success" onClick={this.saveQuestion}><i class="fa fa-floppy-o"></i> Save</button>}
                            <button className="btn btn-danger ml-2" onClick={this.cancel.bind(this)}><i class="fa fa-times" aria-hidden="true"></i> Cancel</button>

                            <button className="btn btn-primary float-right mx-1" onClick={() => this.props.history.push("/allquestions")}>
                                <i className="fa fa-angle-double-left"></i> Back to List</button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddQuestionsComponent;

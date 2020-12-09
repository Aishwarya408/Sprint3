import React, { Component } from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';
import QuestionService from '../services/QuestionService';

class QuestionsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
        this.addQuestion = this.addQuestion.bind(this);
        this.editQuestion = this.editQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);

    }
    componentDidMount() {
        QuestionService.getQuestions().then((res) => {
            this.setState({ questions: res.data })
        });
    }
    addQuestion() {
        this.props.history.push('/addquestion/');
    }
    editQuestion(questionid) {
        this.props.history.push(`/editquestion/${questionid}`)
    }
    deleteQuestion(id, name) {
        if (window.confirm("Do you want to Delete '" + name + "' ?")) {
            QuestionService.deleteQuestion(id).then(res => {
                this.setState({ questions: this.state.questions.filter(question => question.id !== id) })
            });
        }
    }

    render() {
        return (
            <div>
                <h2 className="mt-5 text-white">Questions List</h2> 
                <Button variant="info" className="btn btn-primary float-right mx-1" onClick={() => this.props.history.push("/surveyor")}>
                    <i className="fa fa-home"></i> Back to Home
                </Button>
                <button variant="info" className="btn btn-primary mb-1" onClick={() => this.props.history.push("/addquestion")}><i className="fa fa-plus"></i> Add</button>
                <div className="table-responsive">
                    <table className="table table-sm table-dark text-center">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.questions.map(q => (
                                <tr key={q.id}>
                                    <td>{q.id}</td>
                                    <td>{q.question}</td>
                                    <td>
                                        <i className="btn fa fa-pencil text-info" title="Edit" variant="info" onClick={() => this.editQuestion(q.id)}></i>
                                        <i className="btn fa fa-trash text-danger" title="Delete" variant="info" onClick={() => this.deleteQuestion(q.id, q.question)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default QuestionsComponent
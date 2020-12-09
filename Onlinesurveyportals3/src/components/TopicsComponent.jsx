import React, { Component } from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';
import TopicService from '../services/TopicService';

class TopicsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        }
        this.addTopic = this.addTopic.bind(this);
        this.editTopic = this.editTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);

    }
    componentDidMount() {
        TopicService.getTopics().then((res) => {
            this.setState({ topics: res.data })
        });
    }
    addTopic() {
        this.props.history.push('/add-topic/');
    }
    editTopic(topicid) {
        this.props.history.push(`/edittopic/${topicid}`)
    }
    deleteTopic(id, name) {
        if (window.confirm("Do you want to Delete '" + name + "' ?")) {
            TopicService.deleteTopic(id).then(res => {
                this.setState({ topics: this.state.topics.filter(topic => topic.id !== id) })
            });
        }
    }
    render() {
        return (
            <div>
                <h2 className="mt-5 text-white">Topics List</h2>
                <Button variant="info" className="btn btn-primary float-right mx-1" onClick={() => this.props.history.push("/surveyor")}>
                    <i className="fa fa-home"></i> Back to Home
                </Button>
                <button variant="info" className="btn btn-primary mb-1" onClick={() => this.props.history.push("/newtopic")}><i className="fa fa-plus"></i> Add</button>
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
                            {this.state.topics.map(t => (
                                <tr key={t.id}>
                                    <td>{t.id}</td>
                                    <td>{t.topicName}</td>
                                    <td>
                                        <i className="btn fa fa-pencil text-info" title="Edit" variant="info" onClick={() => this.editTopic(t.id)}></i>
                                        <i className="btn fa fa-trash text-danger" title="Delete" variant="info" onClick={() => this.deleteTopic(t.id, t.topicName)}></i>
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

export default TopicsComponent
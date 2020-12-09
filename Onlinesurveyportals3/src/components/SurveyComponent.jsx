import React, { Component } from 'react'
import SurveyorService from '../services/SurveyorService'

class SurveyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
       
    }

    render() {
        return (
            <div className="container h-100">
                <h2 className="my-5 text-white">Welcome Surveyor</h2>
                <div className="row">
                    <div className="col-md-3 offset-md-1">
                        <div className="card text-center">
                            <div className="card-body py-5 px-2 card-title btn" onClick={() => this.props.history.push('/allparticipants')}>
                                <h4><i className="fa fa-list"></i> Participants</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <div className="card text-center">
                            <div className="card-body py-5 px-2 card-title btn" onClick={() => this.props.history.push('/alltopics')}>
                                <h4><i className="fa fa-comments"></i> Topics</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <div className="card text-center">
                            <div className="card-body py-5 px-2 card-title btn" onClick={() => this.props.history.push('/allquestions')}>
                                <h4><i className="fa fa-question"></i> Questions</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyComponent
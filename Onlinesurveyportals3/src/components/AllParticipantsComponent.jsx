import React, { Component } from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap';
import SurveyorService from '../services/SurveyorService'

class AllParticipantsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surveyors: []

        }
        // this.editsurveyor = this.editsurveyor.bind(this);
        // this.addSurveyor = this.addSurveyor.bind(this);
        // this.deleteSurveyor = this.deleteSurveyor.bind(this);
    }
    componentDidMount() {
        SurveyorService.getSurveyors().then((res) => {
            this.setState({ surveyors: res.data })

        });
    }
    // editsurveyor(id) {
    //     this.props.history.push(`/edit-surveyor/${id}`)
    // }
    // addSurveyor() {
    //     this.props.history.push('/add-surveyors/');
    // }
    // deleteSurveyor(id) {
    //     if (window.confirm("Do you want to Delete?")) {
    //         SurveyorService.deleteSurveyor(id).then(res => {
    //             this.setState({ surveyors: this.state.surveyors.filter(surveyor => surveyor.id !== id) });

    //         });
    //     }
    // }

    render() {
        return (
            <div>
                <h2 className="mt-5 text-white">Participants List</h2>
                <Button variant="info" className="btn btn-primary float-right mx-1 mb-1" onClick={() => this.props.history.push("/surveyor")}>
                    <i className="fa fa-home"></i> Back to Home
                </Button>
                {/* <button variant="info" className="btn btn-primary mb-1" onClick={() => this.props.history.push("/newparticipant")}><i className="fa fa-plus"></i> Add</button> */}
                <div className="table-responsive">
                    <table className="table table-sm table-dark text-center">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>First Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.surveyors.map(surveyor =>
                                    <tr key={surveyor.id}>
                                        <td>{surveyor.userName}</td>
                                        <td>{surveyor.firstName}</td>
                                        <td>{surveyor.lastname}</td>
                                        <td>{surveyor.email}</td>
                                        <td>{surveyor.phone}</td>
                                        <td>{surveyor.role}</td>
                                        {/* <td>
                                            <i className="btn fa fa-pencil text-info" title="Edit" variant="info" onClick={() => this.editsurveyor(surveyor.id)}></i>
                                            <i className="btn fa fa-trash text-danger" title="Delete" variant="info" onClick={() => this.deleteSurveyor(surveyor.id)}></i>
                                        </td> */}
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}
export default AllParticipantsComponent

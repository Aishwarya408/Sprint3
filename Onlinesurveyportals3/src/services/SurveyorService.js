import axios from 'axios';
const SURVEYOR_API_BASE_URL = "http://localhost:9999/Surveyor_details"
class SurveyorService {
    getSurveyors() {
        return axios.get(SURVEYOR_API_BASE_URL + '/surveyors');
    }
    createSurveyor(surveyor) {
        return axios.post(SURVEYOR_API_BASE_URL +"/", surveyor);
    }
    deleteSurveyor(id) {
        return axios.delete(SURVEYOR_API_BASE_URL + '/DeleteSurveyor/' + id);
    }
    getSurveyorById(id)
    {
        return axios.get(SURVEYOR_API_BASE_URL + '/surveyors/' +id);
    }
    updateSurveyor(surveyor, id){
        return axios.put(SURVEYOR_API_BASE_URL + '/surveyors/' + id,surveyor);

    }

}
export default new SurveyorService()
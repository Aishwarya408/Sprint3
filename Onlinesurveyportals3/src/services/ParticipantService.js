import axios from 'axios';
const PARTICIPANT_API_BASE_URL = "http://localhost:5555/Participant_details/";
class ParticipantService{
    getParticipants()
    {
        return axios.get(PARTICIPANT_API_BASE_URL + 'participants');
    }

    createParticipant(participant)
    {
        return axios.post(PARTICIPANT_API_BASE_URL,participant);
    }
    getParticipantById(participantid)
    {
        return axios.get(PARTICIPANT_API_BASE_URL + '/' +participantid);
    }
    updateParticipant(participant,participantid)
    {
        return axios.put(PARTICIPANT_API_BASE_URL + 'Update/' + participantid , participant);
    }
    deleteParticipant(participantid)
    {
        return axios.delete(PARTICIPANT_API_BASE_URL + '/' +participantid);
    }
}
export default new ParticipantService()
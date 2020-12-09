import axios from 'axios';
const apiUrl ="http://localhost:9999/feedback/"
class FeedbackService {
    getAllFeedback()
    {
        return axios.get(apiUrl);
    }
    createFeedback(feedback)
    {
        return axios.post(apiUrl,feedback);
    }
}
export default new FeedbackService()
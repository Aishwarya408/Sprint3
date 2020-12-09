import axios from 'axios';
const apiUrl ="http://localhost:9999/Answer_details/"
class AnswerService{
    getAllAnswers()
    {
        return axios.get(apiUrl);
    }
    createAnswer(answer)
    {
        return axios.post(apiUrl,answer);
    }
}
export default new AnswerService()
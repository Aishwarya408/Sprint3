import axios from 'axios';
const apiUrl ="http://localhost:9999/Question_details/"
class QuestionService{
    getQuestions()
    {
        return axios.get(apiUrl);
    }
    createQuestion(question)
    {
        return axios.post(apiUrl,question);
    }
    getQuestionById(questionid)
    {
        return axios.get(apiUrl + questionid);
    }
    updateQuestion(question,questionid)
    {
        return axios.put(apiUrl + questionid , question);
    }
    deleteQuestion(questionid)
    {
        return axios.delete(apiUrl  + questionid);
    }



}
export default new QuestionService()
import axios from 'axios';
const TOPIC_API_BASE_URL ="http://localhost:9999/topic/"
class TopicService{
    getTopics()
    {
        return axios.get(TOPIC_API_BASE_URL);
    }
    createTopic(topic)
    {
        return axios.post(TOPIC_API_BASE_URL,topic);
    }
    getTopicById(topicid)
    {
        return axios.get(TOPIC_API_BASE_URL + topicid);
    }
    updateTopic(topic,topicid)
    {
        return axios.put(TOPIC_API_BASE_URL + topicid , topic);
    }
    deleteTopic(topicid)
    {
        return axios.delete(TOPIC_API_BASE_URL  + topicid);
    }


}
export default new TopicService()
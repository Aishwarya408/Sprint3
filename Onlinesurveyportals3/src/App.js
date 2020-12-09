import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import TopicsComponent from './components/TopicsComponent';
import AddTopicComponent from './components/AddTopicComponent';

import SurveyComponent from './components/SurveyComponent';
import ParticipantsComponent from './components/ParticipantsComponent';
import QuestionsComponent from './components/QuestionsComponent';
import AllParticipantsComponent from './components/AllParticipantsComponent';
import AddQuestionsComponent from './components/AddQuestionsComponent';
import RegistationComponent from './components/RegistationComponent';
import FeedbackComponent from './components/FeedbackComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/home" exact component={HomeComponent}></Route>
            <Route path="/register" exact component={RegistationComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/surveyor" component={SurveyComponent}></Route>
            <Route path="/allparticipants" component={AllParticipantsComponent}></Route>
            
            <Route path="/alltopics" component={TopicsComponent}></Route>
            <Route path="/newtopic" component={AddTopicComponent}></Route>
            <Route path="/edittopic/:topicid" component={AddTopicComponent}></Route>

            <Route path="/allquestions" component={QuestionsComponent}></Route>
            <Route path="/addquestion" component={AddQuestionsComponent}></Route>
            <Route path="/editquestion/:questionId" component={AddQuestionsComponent}></Route>
            <Route path="/feedback" component={FeedbackComponent}></Route>

            <Route path="/participant" component={ParticipantsComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
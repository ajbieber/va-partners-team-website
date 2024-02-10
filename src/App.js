import './App.css';
import TeamMember from './components/TeamMember/TeamMember';
import blank from './images/blank.png';
import abieber from './images/abieber.jpeg';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState("description");

  return (
    <div className="App">
      <header className="App-header">
        Vision Aid Partners - Spring 2024
      </header>
      <div>
        <ul>
          <li 
            onClick={() => setSelectedTab("description")}
            className={(selectedTab === "description" ? 'li-selected' : 'li-not-selected')}
          >Description</li>
          <li
            onClick={() => setSelectedTab("team")}
            className={(selectedTab === "team" ? 'li-selected' : 'li-not-selected')}
          >Team Members</li>
          <li
            onClick={() => setSelectedTab("goals")}
            className={(selectedTab === "goals" ? 'li-selected' : 'li-not-selected')}
          >Goals</li>
          <li
            onClick={() => setSelectedTab("lighthouse")}
            className={(selectedTab === "lighthouse" ? 'li-selected' : 'li-not-selected')}
          >Lighthouse Scores</li>
        </ul>

        <div id="body">
          <div id="desc" className={(selectedTab === "description" ? 'selected' : 'not-selected')}>
            <p>
              The VA Partners team is dedicated to improving the partners application for the Vision
              Aid organization. This application is currently being used in production by the Vision
              Aid organization and its partners in hospitals around India.
            </p>
            <p>
              The application we will be improving allows for hospitals and partner organizations to track disbursement of
              devices used to by the visually impaired, in a variety of situations.
            </p>            
          </div>
          <div className={(selectedTab === "team" ? 'selected' : 'not-selected')}>
            <TeamMember imagePath={blank} name="Amber Molina" role="Team Lead" />
            <TeamMember imagePath={abieber} name="Austin Bieber" role="Tech Lead" />
            <TeamMember imagePath={blank} name="Christin Lin" role="Frontend" />
            <TeamMember imagePath={blank} name="Nasa Quba" role="Backend" />
          </div>
          <div id="goals" className={(selectedTab === "goals" ? 'selected' : 'not-selected')}>
            <p>Our goals for this semeter are as follows:</p>
            <p></p>
            <p></p>
            <ol>
              <li>Rewrite authentication system to be more seamless</li>
              <li>Integrate authorization into the authentication system</li>
              <li>Design a customizable landing page that doesn't require dev assistance</li>
              <li>Upgrade the UI to meet accessability standards</li>
              <li>Implement a feedback form for users to report issues and bugs</li>
              <li>Add a footer to all pages</li>
              <li>Implement any new changes specified by stakeholders</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
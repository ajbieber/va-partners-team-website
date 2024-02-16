import './App.css';
import TeamMember from './components/TeamMember/TeamMember';
import abieber from './images/abieber.jpeg';
import amolina from './images/amolina.jpg';
import chris from './images/chris.jpg';
import nasa from './images/nasa.png';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState("description");

  return (
    <div className="App">
      <header className="App-header">
        Vision-Aid Partners - Spring 2024
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
          <li
            onClick={() => setSelectedTab("video")}
            className={(selectedTab === "video" ? 'li-selected' : 'li-not-selected')}
          >Video</li>
        </ul>

        <div id="body">
          <div id="desc" className={(selectedTab === "description" ? 'selected' : 'not-selected')}>
            <p>
              The VA Partners team is dedicated to improving the partners application for the Vision
              Aid organization. This application is currently being used in production by the Vision
              Aid organization and its partners in hospitals around India.
            </p>
            <p>
              The application we will be improving is a web-based portal that helps coordinate all hospitals partnering with Vision Aid
              for providing diagnosis, counseling, training and optical devises for the visually impaired. It also provides aggregate
              customizable reports for each hospital and overall.
            </p>            
          </div>
          <div className={(selectedTab === "team" ? 'selected' : 'not-selected')}>
            <TeamMember imagePath={amolina} name="Amber Molina" role="Team Lead" />
            <TeamMember imagePath={abieber} name="Austin Bieber" role="Tech Lead" />
            <TeamMember imagePath={chris} name="Christin Lin" role="Frontend" />
            <TeamMember imagePath={nasa} name="Nasa Quba" role="Backend" />
          </div>
          <div id="goals" className={(selectedTab === "goals" ? 'selected' : 'not-selected')}>
            <p>Our goals for this semeter are as follows:</p>
            <p></p>
            <p></p>
            <ol>
              <li>Rewrite authentication system to be more seamless</li>
              <li>Integrate authorization into the authentication system</li>
              <li>Design a customizable landing page that doesn't require dev assistance</li>
              <li>Upgrade the UI to meet accessibility standards</li>
              <li>Implement a feedback form for users to report issues and bugs</li>
              <li>Add a footer to all pages</li>
              <li>Implement any new changes specified by stakeholders</li>
            </ol>
          </div>
          <div id="lighthouse" className={(selectedTab === "lighthouse" ? 'selected' : 'not-selected')}>
            <ol>
              <li>Performance: 100</li>
              <li>Accessability: 100</li>
              <li>Best Practices: 100</li>
              <li>SEO: 100</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

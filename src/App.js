import './App.css';
import TeamMember from './components/TeamMember/TeamMember';
import blank from './images/blank.png';
import abieber from './images/abieber.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Vision Aid Partners - Spring 2024
      </header>
      <div>
        <ul>
          <li>Description</li>
          <li>Team Members</li>
          <li>Goals</li>
          <li>Lighthouse Scores</li>
        </ul>

        <div id="body">
          <div id="team-members-page">
            <TeamMember imagePath={blank} name="Amber Molina" role="Team Lead" />
            <TeamMember imagePath={abieber} name="Austin Bieber" role="Tech Lead" />
            <TeamMember imagePath={blank} name="Chrisin Lin" role="Frontend" />
            <TeamMember imagePath={blank} name="Nasa Quba" role="Backend" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

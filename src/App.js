import React from 'react';
import { Weather } from './components/weather';
import Notes from './components/notes/Notes';
import Pomodoro from './components/pomodoro/Pomodoro';
import Reminder from './components/reminders/Reminder';
import ImageList from './components/images/ImageList';
import StatsComponent from './components/stats/StatsComponent';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <div className="left-column">
        <Notes />
        <Weather />
        <Reminder />
      </div>
      <div className="right-column">
        <ImageList />
        <Pomodoro />
        <StatsComponent />
      </div>
    </div>
  );
}

export default App;
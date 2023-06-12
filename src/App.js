import React from 'react';
import { Weather } from './components/weather';
import Notes from './components/notes/Notes';
import Pomodoro from './components/pomodoro/Pomodoro';
import Reminder from './components/reminders/Reminder';
import ImageList from './components/images/ImageList';
import StatsComponent from './components/stats/StatsComponent';
import './App.css'; // Import the CSS file

import BitcoinPriceTracker from './components/bitcoin/BitcoinPriceTracker';
import BitcoinPriceBoard from './components/bitcoin/BitcoinPriceBoard';
import VoiceCommandHandler from './components/voice/VoiceCommandHandler';
import FlashcardApp from './components/flashcards/FlashcardApp';
import ItalianPhrasePractice from './components/italian/ItalianPhrasePractice';
function App() {
  return (
    <div className="App">
      <BitcoinPriceBoard />
      <div className="content-container">
        <div className="left-column">
          <FlashcardApp />
        </div>
        <div className="right-column">
          <Notes />
          <Reminder />
          

        </div>
      </div>
    </div>
  );
}

export default App;
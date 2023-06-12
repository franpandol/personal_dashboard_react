import React, { useState } from 'react';
import './FlashcardApp.css';
const FlashcardApp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showItalian, setShowItalian] = useState(true);

  const flashcards = [
    { term: 'Ciao', definition: 'Hello' },
    { term: 'Grazie', definition: 'Thank you' },
    { term: 'Buongiorno', definition: 'Good morning' },
    { term: 'Prego', definition: "You're welcome" },
    // Add more flashcards as needed
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  const handleToggleLanguage = () => {
    setShowItalian((prevShowItalian) => !prevShowItalian);
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="flashcard-app">
      <h1>Italian Flashcards</h1>
      <div className="flashcard">
        {showItalian ? (
          <p className="flashcard-term">{currentCard.term}</p>
        ) : (
          <p className="flashcard-definition">{currentCard.definition}</p>
        )}
        <button className="toggle-button" onClick={handleToggleLanguage}>
          {showItalian ? 'Show Definition' : 'Show Italian'}
        </button>
      </div>
      <div className="button-group">
        <button
          className="previous-button"
          onClick={handlePreviousCard}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>
        <button
          className="next-button"
          onClick={handleNextCard}
          disabled={currentCardIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardApp;

import React, { useEffect, useState } from 'react';
import './Notes.css';
function Notes() {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const storedNotes = localStorage.getItem('pomodoroNotes');
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const handleNotesChange = event => {
    const updatedNotes = event.target.value;
    setNotes(updatedNotes);
    localStorage.setItem('pomodoroNotes', updatedNotes);
  };

  return (
    <div>
      <h1>Notes</h1>
      <textarea
        id="notes-textarea"
        value={notes}
        onChange={handleNotesChange}
        placeholder="Notes"
      />
    </div>
  );
}

export default Notes;

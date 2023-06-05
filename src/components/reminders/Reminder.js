import React, { useState, useEffect } from 'react';

const Reminder = () => {
  const [reminderText, setReminderText] = useState('');
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders && JSON.parse(storedReminders).length > 0) {
      setReminders(JSON.parse(storedReminders));
    }
  }, []);

  const handleAddReminder = () => {
    if (reminderText.trim() !== '') {
      const newReminder = {
        id: new Date().getTime(), // Assign a unique ID to each reminder
        text: reminderText
      };
      setReminders([...reminders, newReminder]);
      setReminderText('');
    }
  };

  const handleDeleteReminder = (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
  };

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  return (
    <div className="Reminder">
      <h2>Reminders</h2>
      <div className="Reminder-form">
        <input
          type="text"
          placeholder="Enter a reminder"
          value={reminderText}
          onChange={(e) => setReminderText(e.target.value)}
        />
        <button onClick={handleAddReminder}>Add Reminder</button>
      </div>
      <ul className="Reminder-list">
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            {reminder.text}
            <button onClick={() => handleDeleteReminder(reminder.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminder;

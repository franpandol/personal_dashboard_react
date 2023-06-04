import React, { useState, useEffect } from 'react';
import './Pomodoro.css';

function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(900);
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const audio = new Audio(process.env.PUBLIC_URL + 'sound.wav');

  useEffect(() => {
    return () => {
      clearInterval(timerIntervalId);
    };
  }, [timerIntervalId]);

  const formatTime = timeInSeconds => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const updateTimer = () => {
    setTimeLeft(prevTimeLeft => {
      if (prevTimeLeft === 0) {
        clearInterval(timerIntervalId);
        audio.play();
        setTimeout(() => {
          audio.pause();
        }, 2000);
        return prevTimeLeft;
      }
      return prevTimeLeft - 1;
    });
  };

  const startTimer = () => {
    if (!timerIntervalId) {
      setTimerIntervalId(setInterval(updateTimer, 1000));
    }
  };

  const stopTimer = () => {
    clearInterval(timerIntervalId);
    setTimerIntervalId(null);
    setTimeLeft(900);
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p id="timer">{formatTime(timeLeft)}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Pomodoro;

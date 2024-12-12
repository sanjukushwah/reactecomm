// import react from 'react';

import { useState } from "react";
import "./CounterTimer.css";

function CounterTimer() {
  const [time, setTime] = useState();
  const handleInput = (event) => {
    setTime(parseInt(event.target.value * 60));
  };
  return (
    <>
      <div className="countdown-timer">
        <h1>Countdown Timer</h1>
        <div className="timer-display">
          <input
            type="number"
            placeholder="Enter time in minutes"
            onChange={handleInput}
          >
            <div>00:00</div>
          </input>
        </div>
        <div className="timer-control">
          <button type="button">Start</button>
          <button type="button">Pause</button>
          <button type="button">Stop</button>
          <button type="button">Reset</button>
        </div>
      </div>
    </>
  );
}
export default CounterTimer;

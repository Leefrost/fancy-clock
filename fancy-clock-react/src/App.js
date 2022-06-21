import './App.css';
import { useEffect } from 'react';
import { useTime } from 'react-timer-hook';
import React from 'react';

function App() {

  const styleHours = { "--clr": "#ff2972" };
  const styleMin = { "--clr": "#fee800" };
  const styleSec = { "--clr": "#04fc43" };

  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour' });

  useEffect(() => {
    let interval = setInterval(() => {
      let h = hours;
      let m = minutes;
      let s = seconds;


      if (h > 12) h = h - 12;

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      //   hh.style.strokeDashoffset = 440 - (440 * h) / 12;
      //   mm.style.strokeDashoffset = 440 - (440 * m) / 60;
      //   ss.style.strokeDashoffset = 440 - (440 * s) / 60;

      //   hr_dot.style.transform = `rotate(${h * 30}deg)`;
      //   min_dot.style.transform = `rotate(${m * 6}deg)`;
      //   sec_dot.style.transform = `rotate(${s * 6}deg)`;
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [hours, minutes, seconds, ampm])

  return (
    <div id="time">
      <div className="circle" style={styleHours}>
        <div className="dots hour_dot" style={{ 'transform': `rotate(${hours * 30}deg)` }}></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle id="hh" cx="70" cy="70" r="70" style={{ 'strokeDashoffset': 440 - (440 * hours) / 12 }}></circle>
        </svg>
        <div id="hours">{hours}<br /><span>Hours</span></div>
      </div>
      <div className="circle" style={styleMin}>
        <div className="dots min_dot" style={{ 'transform': `rotate(${minutes * 6}deg)` }}></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle id="mm" cx="70" cy="70" r="70" style={{ 'strokeDashoffset': 440 - (440 * minutes) / 60 }}></circle>
        </svg>
        <div id="minutes">{hours}<br /><span>Minutes</span></div>
      </div>
      <div className="circle" style={styleSec}>
        <div className="dots sec_dot" style={{ 'transform': `rotate(${seconds * 6}deg)` }}></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle id="ss" cx="70" cy="70" r="70" style={{ 'strokeDashoffset': 440 - (440 * seconds) / 60 }}></circle>
        </svg>
        <div id="seconds">{seconds}<br /><span>Seconds</span></div>
      </div>
      <div className="ap">
        <div id="ampm">{ampm}</div>
      </div>
    </div>
  );
}

export default App;

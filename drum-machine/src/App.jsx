// App.js
import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad';

const drumPads = [
  { keyTrigger: 'Q', soundUrl: 'assets/sounds/kick.wav' },
  { keyTrigger: 'W', soundUrl: 'assets/sounds/snare.wav' },
  { keyTrigger: 'E', soundUrl: 'assets/sounds/hi-hat.wav' },
  // Add more sounds here
];

const App = () => {
  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div className="drum-pads">
        {drumPads.map((pad, index) => (
          <DrumPad key={index} keyTrigger={pad.keyTrigger} soundUrl={pad.soundUrl} />
        ))}
      </div>
    </div>
  );
};

export default App;

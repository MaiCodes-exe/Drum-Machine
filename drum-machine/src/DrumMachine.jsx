import React from 'react';
import styles from './App.css'; 

const DrumMachine = () => {
  const handlePlaySound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div>
      <h1>Drum Machine</h1>
      <div id="pad">
        <button id="but" className='one' onClick={() => handlePlaySound('path-to-kick-sound.wav')}>Kick</button>
        <button id="but" className='two'></button>
        <button id="but" className='three' onClick={() => handlePlaySound('path-to-snare-sound.wav')}>Snare</button>
        <button id="but" className='four'></button>
        <button id="but"  className='five'onClick={() => handlePlaySound('./sounds/hi-hat.wav')}>Hi-Hat</button>
        <button id="but" className='six'></button>
      </div>
    </div>
  );
};

export default DrumMachine;

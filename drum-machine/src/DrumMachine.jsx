import React from 'react';

const DrumMachine = () => {
  const handlePlaySound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div>
      <h1>Drum Machine</h1>
      <div>
        <button onClick={() => handlePlaySound('path-to-kick-sound.wav')}>Kick</button>
        <button onClick={() => handlePlaySound('path-to-snare-sound.wav')}>Snare</button>
        <button onClick={() => handlePlaySound('path-to-hihat-sound.wav')}>Hi-Hat</button>
      </div>
    </div>
  );
};

export default DrumMachine;

// DrumPad.js
import React from 'react';

const DrumPad = ({ keyTrigger, soundUrl }) => {
  const handlePlaySound = () => {
    const sound = new Audio(soundUrl);
    sound.play();
  };

  return (
    <button className="drum-pad" onClick={handlePlaySound}>
      {keyTrigger}
    </button>
  );
};

export default DrumPad;

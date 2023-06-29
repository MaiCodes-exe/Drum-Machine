import React from 'react';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const padsData = [
    // Define an array of drum pad data (key trigger and sound URL)
  ];

  return (
    <div id="drum-machine">
      <div id="display">
        {padsData.map((pad) => (
          <DrumPad key={pad.keyTrigger} keyTrigger={pad.keyTrigger} soundUrl={pad.soundUrl} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;

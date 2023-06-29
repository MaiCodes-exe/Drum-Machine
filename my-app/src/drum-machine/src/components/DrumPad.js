import React from 'react';

const DrumPad = ({ keyTrigger, soundUrl }) => {
  const handlePadClick = () => {
    // Play the sound associated with the pad
  };

  return (
    <div className="drum-pad" onClick={handlePadClick}>
      {keyTrigger}
      <audio src={soundUrl} className="clip" id={keyTrigger} />
    </div>
  );
};

export default DrumPad;

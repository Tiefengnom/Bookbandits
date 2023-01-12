import React from 'react';
import './Switch.css';

const Switch = (isOn, handleToggle) => {
  return (
    <>
    <label
        className="react-switch-label"
        htmlFor="react-switch-new"
        style={{ background: isOn && '#06D6A0' }}
              >
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      
        <span className="react-switch-button" />
      </label>
    </>
  );
};

export default Switch;
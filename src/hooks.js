import { useState } from 'react';

function useFlip(initialVal = false) {
  // call useState, "reserve piece of state"
  const [isFacingUp, setIsFacingUp] = useState(initialVal);
  const toggle = () => {
    setIsFacingUp((oldValue) => !oldValue);
  };

  // return piece of state AND a function to toggle it
  return [isFacingUp, toggle];
}

export { useFlip };

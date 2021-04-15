import { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

function useFlip(initialVal = false) {
  // call useState, "reserve piece of state"
  const [isFacingUp, setIsFacingUp] = useState(initialVal);
  const toggle = () => {
    setIsFacingUp((oldValue) => !oldValue);
  };

  // return piece of state AND a function to toggle it
  return [isFacingUp, toggle];
}

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async () => {
    const res = await axios.get(url);
    setData((oldData) => [...oldData, { ...res.data, id: uuid() }]);
  };

  return [data, addData];
};

export { useFlip, useAxios };

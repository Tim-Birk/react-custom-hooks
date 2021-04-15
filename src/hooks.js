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

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  const addData = async (baseUrl, restOfUrl) => {
    const res = await axios.get(restOfUrl ? `${baseUrl}${restOfUrl}` : baseUrl);
    setData((oldData) => [...oldData, { ...res.data, id: uuid() }]);
  };

  return [data, addData];
};

export { useFlip, useAxios };

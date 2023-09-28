import React, { createContext, useContext, useState } from 'react';

const TextInputContext = createContext();

export const useTextInput = () => {
  return useContext(TextInputContext);
};

export const TextInputProvider = ({ children }) => {
  const [lbs, setLbs] = useState('');
  const [ft, setFt] = useState('');
  const [inches, setInches] = useState('');

  const updateLbs = (text) => {
    setLbs(text);
  };

  const updateFt = (text) => {
    setFt(text);
  };

  const updateInches = (text) => {
    setInches(text);
  };

  const convertLbsToKgs = () => {
    // Convert lbs to kgs here (1 lb = 0.453592 kgs)
    const kgs = (parseFloat(lbs) * 0.453592).toFixed(2);
    return kgs.toString();
  };

  const convertFtToMeters = () => {
    // Convert ft and inches to meters here (1 ft = 0.3048 meters, 1 inch = 0.0254 meters)
    const meters = ((parseFloat(ft) * 0.3048) + (parseFloat(inches) * 0.0254)).toFixed(2);
    return meters.toString();
  };

  return (
    <TextInputContext.Provider
      value={{
        lbs,
        updateLbs,
        ft,
        updateFt,
        inches,
        updateInches,
        convertLbsToKgs,
        convertFtToMeters,
      }}
    >
      {children}
    </TextInputContext.Provider>
  );
};

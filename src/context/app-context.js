import React, { useState, useEffect, useRef } from 'react';

const AppContext = React.createContext({
  isActive: false,
  setIsActive: () => {},
  inputText: '',
  setInputText: () => {},
  updateInputHandler: () => {},
  inputRef: '',
});

export const AppContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputText]);

  const toggleContainer = event => {
    event.preventDefault();
    setIsActive(prevState => !prevState);
  };

  const updateInputHandler = emoji => {
    setInputText(prevInput => prevInput + emoji);
  };

  const contextValue = {
    isActive,
    toggle: toggleContainer,
    inputText,
    setInputText,
    updateInputHandler,
    inputRef,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;

import React, { useState, useEffect } from 'react';

const ChatContext = React.createContext({
  messages: '',
  setMessages: () => {},
});

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const latestMessage = document.getElementById('latest');

    latestMessage.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const contextValue = {
    messages,
    setMessages,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContext;

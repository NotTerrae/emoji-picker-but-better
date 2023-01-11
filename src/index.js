import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/app-context';
import { ContainerContextProvider } from './context/container-context';
import { ChatContextProvider } from './context/chat-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatContextProvider>
    <ContainerContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ContainerContextProvider>
  </ChatContextProvider>
);

import { useContext } from 'react';
import EmojiInput from './components/EmojiInput/EmojiInput';
import EmojiContainer from './components/EmojiContainer/EmojiContainer';
import ChatContainer from './components/ChatContainer/ChatContainer';
import ChatContext from './context/chat-context';
import AppContext from './context/app-context';
import ContainerContext from './context/container-context';

import classes from './App.module.css';

function App() {
  const { isActive, toggle, inputText, setInputText, inputRef } =
    useContext(AppContext);
  const { setSearch, setActiveCategory } = useContext(ContainerContext);
  const { messages } = useContext(ChatContext);

  const resetUi = event => {
    toggle(event);
    setSearch('');
    setActiveCategory('');
  };

  return (
    <div className={classes.container}>
      <ChatContainer messages={messages} />
      <EmojiInput
        onRef={inputRef}
        onUpdate={setInputText}
        onValue={inputText}
        onToggle={resetUi}
      />
      {isActive && <EmojiContainer />}
    </div>
  );
}

export default App;

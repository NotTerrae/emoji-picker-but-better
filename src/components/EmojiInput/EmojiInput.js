import { useContext } from 'react';
import ChatContext from '../../context/chat-context';
import AppContext from '../../context/app-context';
import btns from '../../assets/btn-str';

import classes from './EmojiInput.module.css';

const EmojiInput = ({ onRef, onUpdate, onValue, onToggle }) => {
  const { setMessages } = useContext(ChatContext);
  const { inputText, setInputText } = useContext(AppContext);

  const setMessageHandler = event => {
    event.preventDefault();

    if (inputText.trim() !== '') {
      setMessages(prevState =>
        prevState.concat({
          message: inputText,
          time:
            new Date(Date.now()).getHours() +
            ':' +
            String(new Date(Date.now()).getMinutes()).padStart(2, '0'),
        })
      );
    }

    setInputText('');
  };

  return (
    <form className={classes.form}>
      <input
        ref={onRef}
        onChange={event => onUpdate(event.target.value)}
        value={onValue}
        className={classes.input}
        type="text"
      />
      <button onClick={setMessageHandler} className={classes.button}>
        {btns.send}
      </button>
      <button onClick={onToggle} className={classes.button}>
        {btns.smile}
      </button>
    </form>
  );
};

export default EmojiInput;

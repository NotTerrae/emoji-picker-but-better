import classes from './ChatContainer.module.css';

const ChatContainer = ({ messages }) => {
  return (
    <div className={classes.container}>
      <div className={classes.messages}>
        {messages.map(mess => {
          return (
            <div className={classes.messageBox} key={Math.random()}>
              <div className={classes.messageIndividual}>{mess.message}</div>
              <div>{mess.time}</div>
            </div>
          );
        })}
        <div id="latest"></div>
      </div>
    </div>
  );
};

export default ChatContainer;

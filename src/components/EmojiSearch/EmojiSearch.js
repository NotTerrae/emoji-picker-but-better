import classes from './EmojiSearch.module.css';

const EmojiSearch = ({ onSearch }) => {
  return (
    <input
      onChange={event => onSearch(event.target.value)}
      className={classes.search}
      placeholder="Search Emoji Here!"
      type="text"
    />
  );
};

export default EmojiSearch;

import classes from './EmojiCategoryBar.module.css';

const EmojiCategoryBar = ({ content, onCategory }) => {
  return (
    <div className={classes.categories}>
      <div onClick={() => onCategory('')} className={classes.categoryIcon}>
        💯
      </div>
      {Object.keys(content).map(group => {
        return (
          <div
            className={classes.categoryIcon}
            key={Math.random()}
            onClick={() => onCategory(group)}
          >
            {content[group].map(emoji => emoji.character)[0]}
          </div>
        );
      })}
    </div>
  );
};

export default EmojiCategoryBar;

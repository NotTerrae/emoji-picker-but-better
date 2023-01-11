import classes from './EmojiCategoryBar.module.css';
import btns from '../../assets/btn-str';

const EmojiCategoryBar = ({ content, onCategory }) => {
  return (
    <div className={classes.categories}>
      <div onClick={() => onCategory('')} className={classes.categoryIcon}>
        {btns.sign100}
      </div>
      {Object.keys(content).map((group, index) => {
        return (
          <div
            className={classes.categoryIcon}
            key={group + index}
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

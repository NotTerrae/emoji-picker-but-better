import classes from './Emojis.module.css';

const EmojisByCategory = ({
  content,
  onUpdate,
  category,
  onFilter,
  onNonEmpty,
}) => {
  return (
    <div className={classes.categoryContainer}>
      {Object.keys(content)
        .filter(group => group === category)
        .map((group, index) => {
          const emojiInGroup = content[group];
          return (
            onNonEmpty(emojiInGroup) && (
              <div className={classes.categoryIndividual} key={group + index}>
                <h4 className={classes.categoryTitle}>{group}</h4>
                <div className={classes.emojis}>
                  {onFilter(emojiInGroup).map((emoji, index) => (
                    <div
                      onClick={() => onUpdate(emoji.character)}
                      className={classes.categoryIcon}
                      key={emoji.unicodeName + index}
                    >
                      {emoji.character}
                    </div>
                  ))}
                </div>
              </div>
            )
          );
        })}
    </div>
  );
};

export default EmojisByCategory;

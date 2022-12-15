import classes from './Emojis.module.css';

const AllEmojis = ({ content, onUpdata, onFilter, onNonEmpty }) => {
  return (
    <div className={classes.categoryContainer}>
      {Object.keys(content).map(group => {
        const emojiInGroup = content[group];
        return (
          onNonEmpty(emojiInGroup) && (
            <div className={classes.categoryIndividual} key={Math.random()}>
              <h4 className={classes.categoryTitle}>{group}</h4>

              <div className={classes.emojis}>
                {onFilter(emojiInGroup).map(emoji => {
                  return (
                    <div
                      onClick={() => onUpdata(emoji.character)}
                      className={classes.categoryIcon}
                      key={Math.random()}
                    >
                      {emoji.character}
                    </div>
                  );
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default AllEmojis;

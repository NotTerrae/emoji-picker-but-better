import { useContext } from 'react';
import AppContext from '../../context/app-context';
import ContainerContext from '../../context/container-context';
import EmojiCategoryBar from '../EmojiCategoryBar/EmojiCategoryBar';
import EmojiSearch from '../EmojiSearch/EmojiSearch';
import AllEmojis from '../Emojis/AllEmojis';
import EmojisByCategory from '../Emojis/EmojisByCategory';
import btns from '../../assets/btn-str';

import classes from './EmojiContainer.module.css';

const EmojiContainer = () => {
  const { updateInputHandler } = useContext(AppContext);
  const {
    emojiCategories,
    activeCategory,
    setActiveCategory,
    setSearch,
    filterBySearch,
    hasFilteredCategoty,
    scrollToTop,
  } = useContext(ContainerContext);

  return (
    <>
      <div className={classes.container}>
        <div id="top" />
        <h1 className={classes.categoryTitle}>Categories</h1>
        <EmojiCategoryBar
          onCategory={setActiveCategory}
          content={emojiCategories}
        />
        <EmojiSearch onSearch={setSearch} />
        {!activeCategory ? (
          <AllEmojis
            onUpdata={updateInputHandler}
            content={emojiCategories}
            onFilter={filterBySearch}
            onNonEmpty={hasFilteredCategoty}
          />
        ) : (
          <EmojisByCategory
            onUpdate={updateInputHandler}
            content={emojiCategories}
            category={activeCategory}
            onFilter={filterBySearch}
            onNonEmpty={hasFilteredCategoty}
          />
        )}
      </div>
      <button onClick={scrollToTop} className={classes.button}>
        {btns.top}
      </button>
    </>
  );
};

export default EmojiContainer;

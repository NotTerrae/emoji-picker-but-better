import React, { useState, useEffect } from 'react';

const ContainerContext = React.createContext({
  emojiCategories: {},
  activeCategory: '',
  setActiveCategory: () => {},
  setSearch: () => {},
  filterBySearch: emoji => {},
  hasFilteredCategoty: emojis => {},
  scrollToTop: () => {},
});

let storedEmojiData = null;

export const ContainerContextProvider = ({ children }) => {
  const [emojiCategories, setEmojiCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const emojiRequest = async () => {
      const response = await fetch(
        'https://emoji-api.com/emojis?access_key=7d9e0371ca6319b91f8d3cdb54ae8b07ba079c21'
      );

      const emojiData = await response.json();

      const emojiCategs = emojiData.map(emoji => emoji.group);

      const groups = {};

      for (let emojiCateg of emojiCategs) {
        groups[emojiCateg] = [];
      }

      for (let emoji of emojiData) {
        groups[emoji.group].push(emoji);
      }

      storedEmojiData = groups;
      setEmojiCategories(groups);
    };
    if (!storedEmojiData) {
      emojiRequest();
    } else {
      setEmojiCategories(storedEmojiData);
    }
  }, []);

  const filterBySearch = emojis => {
    if (search === '') {
      return emojis;
    }

    return emojis.filter(emoji =>
      emoji.unicodeName.toLowerCase().includes(search.toLowerCase())
    );
  };

  const hasFilteredCategoty = emojis => {
    return filterBySearch(emojis).length > 0;
  };

  const scrollToTop = () => {
    const topElement = document.getElementById('top');

    topElement.scrollIntoView({ behavior: 'smooth' });
  };

  const contextValue = {
    emojiCategories,
    activeCategory,
    setActiveCategory,
    setSearch,
    filterBySearch,
    hasFilteredCategoty,
    scrollToTop,
  };

  return (
    <ContainerContext.Provider value={contextValue}>
      {children}
    </ContainerContext.Provider>
  );
};

export default ContainerContext;

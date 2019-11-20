import React from 'react';

const Tabs = ({ postList, setCategory }) => {

  const filterCategory = (categoryId) => {
    setCategory(
      postList.filter((post) => post.CategoryId === categoryId)
    )
  }

  return (
    <div className="tabs">
      <div className="tab tab-current" onClick={() => filterCategory(2)}>韓國旅遊</div>
      <div className="tab" onClick={() => filterCategory(1)}>日本旅遊</div>
    </div>
  );
};

export default Tabs;
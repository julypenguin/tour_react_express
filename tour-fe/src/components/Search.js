import React from 'react';

const Search = ({ onChange }) => {
  return (
    <div>
      <form className="search-form">
        <input 
          className="search-form__input" 
          onChange={onChange}
        >
        </input>
        <button className="search-form__submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
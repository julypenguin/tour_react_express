import React, { useState, useEffect } from 'react';

const Page = ({ category, setPostLimit }) => {
  const [pageCurrent, setPageCurrent] = useState([])
  const offset = 6;

  const handlePage = (page) => {
    setPostLimit(
      category.filter((post, index) => index < offset * (page) && index >= offset * (page-1))
    )
    pageCurrent.fill(0)
    pageCurrent[page-1] = 1

  }
  
  useEffect(()=> {
    setPostLimit(category.filter((post, index) => index < offset * 1))
    const pages = new Array(Math.ceil(category.length / 6)).fill(0)
    pages[0] = 1
    setPageCurrent(pages)
  }, [category, setPostLimit])

  return (
    <div className="page-numbers">
      { pageCurrent.map((current, index) => (
        <div 
          className={!current? "page-number" : "page-number page-current"}
          key={index}
          onClick={() => handlePage(index+1)}>{index + 1}
        </div>
      ))}
      </div>
      );
    };
    
    export default Page;

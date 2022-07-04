import React from 'react';

const Categories = ({filterItems}) => {
  return <div className='btn-container'>
    <button className='filter-btn' onClick={() => filterItems("breakfast")}>
      breakfast
    </button>
    <button className='filter-btn' onClick={() => filterItems("shakes")}>
      shakes
    </button>
    <button className='filter-btn' onClick={() => filterItems("lunch")}>
      lunch
    </button>
  </div>;
};

export default Categories;

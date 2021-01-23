import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

const FilterBestPosts = React.forwardRef(({ props }, filterBestPosts) => {
  const history = useHistory();

  const bestPostsClickHandler = () => {
    filterBestPosts.current.checked
      ? history.push('/posts/best')
      : history.push('/');
  };

  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-desc" htmlFor="best-post">
        Show best posts:
      </label>
      <label className="switch">
        <input
          ref={filterBestPosts}
          className="post-checkbox"
          type="checkbox"
          onClick={bestPostsClickHandler}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
});

export default FilterBestPosts;

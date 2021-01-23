import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './index.css';

export default function FilterBestPosts() {
  const history = useHistory();

  const bestPostsFilter = useRef();

  const bestPostsClickHandler = () => {
    bestPostsFilter.current.checked
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
          ref={bestPostsFilter}
          className="post-checkbox"
          type="checkbox"
          onClick={bestPostsClickHandler}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

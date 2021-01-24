import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

export default function FilterBestPosts({ checked }) {
  const history = useHistory();

  const onChangeHandler = () => {
    !checked ? history.push('/posts/best') : history.push('/');
  };

  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-desc" htmlFor="best-post">
        Show best posts:
      </label>
      <label className="switch">
        <input
          className="post-checkbox"
          type="checkbox"
          checked={checked ? 'checked' : ''}
          onChange={onChangeHandler}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

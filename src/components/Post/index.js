import React from 'react';

import './index.css';

import { Link } from 'react-router-dom';

export default function Post({ post, username }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post-image-wrapper">
        <img className="post-image" src={post.image} alt="" />
        <div className="overlay">
          <p className="post-image-desc-title">{post.title}</p>
          <p className="post-image-desc">By: {username}</p>
        </div>
      </div>
    </Link>
  );
}

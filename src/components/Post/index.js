import React from 'react';

import { Link } from 'react-router-dom';

export default function Post({ post, username }) {
  return post && username ? (
    <Link to={`/posts/${post.sys.id}`}>
      <div className="post-image-wrapper">
        <img className="post-image" src={post.fields.image} alt="" />
        <div className="overlay">
          <p className="post-image-desc-title">{post.fields.title}</p>
          <p className="post-image-desc">By: {username}</p>
        </div>
      </div>
    </Link>
  ) : null;
}

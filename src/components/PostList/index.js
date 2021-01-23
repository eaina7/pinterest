import React from 'react';

import './index.css';
import Post from '../Post';

export default function PostList({ posts }) {
  return (
    <div className="images-wrapper">
      {posts.map(post => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

import React from 'react';

import './index.css';
import Post from '../Post';

export default function PostList({ posts, users }) {
  return (
    <div className="images-wrapper">
      {posts.map(post => {
        const userName = users.filter(user => {
          return post.fields.userref.sys.id === user.sys.id;
        })[0];
        return (
          <Post
            key={post.sys.id}
            post={post}
            username={userName ? userName.fields.username : null}
          />
        );
      })}
    </div>
  );
}

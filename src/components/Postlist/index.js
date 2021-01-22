import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import './index.css';
import Post from '../Post';

export default function Postlist({ posts, users }) {
  const [postList, setPostList] = useState();
  const [userList, setUserList] = useState();

  const { userId } = useParams();

  useEffect(() => {
    userId
      ? setPostList(posts.filter(post => post.fields.userref.sys.id === userId))
      : setPostList(posts);
  }, [posts, userId]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  return postList ? (
    <div className="images-wrapper">
      {postList.map(post => {
        const userName = userList.filter(user => {
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
  ) : null;
}

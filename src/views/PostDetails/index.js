import React from 'react';
import { useParams } from 'react-router-dom';

import PostDetailed from '../../components/Posts/PostDetailed';

export default function PostDetails({ posts }) {
  const { postId } = useParams();

  const getPost = id => {
    const post = posts.filter(post => post.id === id)[0];
    return post;
  };

  return <PostDetailed post={getPost(postId)} />;
}

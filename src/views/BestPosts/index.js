import React from 'react';
import PostList from '../../components/Posts/PostList';

export default function BestPosts({ posts }) {
  const getBestPosts = posts => {
    return posts.filter(post => post.rating === 5);
  };

  return <PostList posts={getBestPosts(posts)} />;
}

import React from 'react';
import PostList from '../../components/PostList';

export default function AllPosts({ posts, users }) {
  return <PostList posts={posts} users={users} />;
}

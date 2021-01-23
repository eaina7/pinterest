import React from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../../components/PostList';

export default function UserPosts({ posts, users }) {
  const { userId } = useParams();

  const filterPostsByUser = userId => {
    return posts.filter(post => post.fields.userref.sys.id === userId);
  };

  return <PostList posts={filterPostsByUser(userId)} users={users} />;
}

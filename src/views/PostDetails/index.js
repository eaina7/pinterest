import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PostDetailed from '../../components/PostDetailed';

function PostDetails({ posts }) {
  const { postId } = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    const getPost = id => {
      const post = posts.filter(post => post.id === id)[0];
      return post;
    };

    setPost(getPost(postId));
  }, [posts, postId]);

  return <PostDetailed post={post} />;
}

export default PostDetails;

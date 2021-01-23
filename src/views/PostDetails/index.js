import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PostDetailed from '../../components/PostDetailed';

function PostDetails({ posts, users }) {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState('');

  useEffect(() => {
    const getPost = id => {
      const post = posts.filter(post => post.sys.id === id)[0].fields;
      return post;
    };

    setPostDetails(getPost(postId));
  }, [posts, postId]);

  return <PostDetailed post={postDetails} />;
}

export default PostDetails;

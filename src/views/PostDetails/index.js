import React from 'react';
import { useParams } from 'react-router-dom';

import PostDetailed from '.src/components/PostDetailed';

import './index.css';

function PostDetails() {
  const postId = useParam();

  return <PostDetailed postId={postId} />;
}

export default PostDetails;

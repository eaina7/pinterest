import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PostDetailed from '../../components/PostDetailed';

function PostDetails({ posts, users }) {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState('');

  useEffect(() => {
    const formatDate = strDate => {
      return strDate.substring(0, 10);
    };

    const getPostInfo = id => {
      const post = posts.filter(post => post.sys.id === id)[0].fields;
      post.date = formatDate(post.date);

      return post;
    };

    setPostDetails(getPostInfo(postId));
  }, [posts, postId]);

  return <PostDetailed post={postDetails} />;
}

export default PostDetails;

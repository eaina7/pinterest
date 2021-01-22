import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GoHomeButton from '../GoHomeButton';

import './index.css';

function PostDetailed({ posts }) {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState('');

  const getPostInfo = id => {
    const post = posts.filter(post => post.sys.id === id)[0].fields;
    return post;
  };

  useEffect(() => {
    setPostDetails(getPostInfo(postId));
  }, [posts, postId]);

  const formatDate = strDate => {
    return strDate.substring(0, 10);
  };

  return postDetails ? (
    <article className="post-entry">
      <div className="post-entry__left-wrapper">
        <h3 className="post-entry__title">{postDetails.title}</h3>
        <img
          className="post-entry__image"
          src="https://picsum.photos/seed/picsum/700/500"
          alt=""
        />
      </div>
      <div className="post-entry__right-wrapper">
        <GoHomeButton className="post-entry__home-btn" caption="back" />
        <div className="post-entry__content">
          <div className="post-entry__date">{formatDate(postDetails.date)}</div>
          <div className="post-entry__description">
            {postDetails.description}
          </div>
          <div className="post-entry__rating">
            <strong>Rating: </strong>
            {postDetails.rating}
          </div>
        </div>
        <a className="post-entry__user">User 1</a>
      </div>
    </article>
  ) : null;
}

export default PostDetailed;

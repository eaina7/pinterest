import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

  return postDetails ? (
    <article className="post-entry">
      <div className="post-entry__left-wrapper">
        <h3 className="post-entry__title">{postDetails.title}</h3>
        <img
          className="post-entry__image"
          src="https://picsum.photos/seed/picsum/700/500"
        />
      </div>
      <div className="post-entry__right-wrapper">
        <button className="post-entry__home-btn">Back</button>
        <div className="post-entry__content">
          <div className="post-entry__date">{postDetails.date}</div>
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

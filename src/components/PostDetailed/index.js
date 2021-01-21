import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

function PostDetailed({ getPostInfo }) {
  const { postId } = useParams();

  const [postDetails, setPostDetails] = useState(getPostInfo(postId));

  return postDetails ? (
    <article class="post-entry">
      <div class="post-entry__left-wrapper">
        <h3 class="post-entry__title">{postDetails.fields.title}</h3>
        <img
          class="post-entry__image"
          src="https://picsum.photos/seed/picsum/700/500"
        />
      </div>
      <div class="post-entry__right-wrapper">
        <button class="post-entry__home-btn">Back</button>
        <div class="post-entry__content">
          <div class="post-entry__date">{postDetails.fields.date}</div>
          <div class="post-entry__description">
            {postDetails.fields.description}
          </div>
          <div class="post-entry__rating">
            <strong>Rating: </strong>
            {postDetails.fields.rating}
          </div>
        </div>
        <a class="post-entry__user">User 1</a>
      </div>
    </article>
  ) : null;
}

export default PostDetailed;

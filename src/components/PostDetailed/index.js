import GoHomeButton from '../GoHomeButton';

import './index.css';

function PostDetailed({ post }) {
  return (
    <article className="post-entry">
      <div className="post-entry__left-wrapper">
        <h3 className="post-entry__title">{post.title}</h3>
        <img className="post-entry__image" src={post.image} alt="" />
      </div>
      <div className="post-entry__right-wrapper">
        <GoHomeButton className="post-entry__home-btn" caption="back" />
        <div className="post-entry__content">
          <div className="post-entry__date">{post.date}</div>
          <div class="post-entry__line"></div>
          <div className="post-entry__description">{post.description}</div>
          <div class="post-entry__line"></div>
          <div className="post-entry__rating">
            <strong>Rating: </strong>
            {post.rating}
          </div>
          <a className="post-entry__user">{post.userName}</a>
        </div>
      </div>
    </article>
  );
}

export default PostDetailed;

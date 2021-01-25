import { Link } from 'react-router-dom';

import GoBackButton from '../../GoBackButton';

import './index.css';

export default function PostDetailed({ post }) {
  return (
    <article className="post-entry">
      <div className="post-entry__left-wrapper">
        <h3 className="post-entry__title">{post.title}</h3>
        <img className="post-entry__image" src={post.image} alt="" />
      </div>
      <div className="post-entry__right-wrapper">
        <GoBackButton
          className="post-entry__home-btn"
          caption="back"
          home="no"
        />
        <div className="post-entry__content">
          <div className="post-entry__date">{post.date}</div>
          <div className="post-entry__line"></div>
          <div className="post-entry__description">{post.description}</div>
          <div className="post-entry__line"></div>
          <div className="post-entry__rating">
            <strong>Rating: </strong>
            {post.rating}
          </div>
          by{' '}
          <Link className="post-entry__user" to={`/posts/user/${post.userId}`}>
            {`${post.userName} (${post.firstName} ${post.lastName})`}
          </Link>
        </div>
      </div>
    </article>
  );
}

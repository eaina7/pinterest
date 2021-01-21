import React from 'react';

import './index.css';



export default function Post({post, username}) {
    return (
        <div className='post-image-wrapper'>
            <img className='post-image' src={post.fields.image} />
            <div className='overlay'>
              <p className='post-image-desc-title'>{post.fields.title}</p>
              <p className='post-image-desc'>By: {username.fields.username}</p>
            </div>
        </div>
    );
}
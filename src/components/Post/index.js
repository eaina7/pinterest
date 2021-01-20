import React from 'react';

import './index.css';


export default function Post({post}) {
    return (
        <div className='post-image-wrapper'>
            <img className='post-image' src={post.fields.image} />
            <div className='overlay'>
              <p className='post-image-desc'><strong>Title:</strong> {post.fields.title}</p>
              <p className='post-image-desc'><strong>User:</strong> {post.fields.userref.sys.id}</p>
            </div>
        </div>
    );
}
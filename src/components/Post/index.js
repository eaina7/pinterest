import React from 'react';
import './index.css';

export default function Post({array}) {

    return (
        <div class='post-image-wrapper'>
            <img class='post-image' src={array[id].image} />
            <div class='overlay'>
              <p class='post-image-desc'>Title: {array[id].title}</p>
              <p class='post-image-desc'>User: {array[id].userName}</p>
            </div>
          </div>
    );
}
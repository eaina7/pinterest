import React from 'react';
import './App.css';

export default function Post({array}) {

    return (
        <div class='post-image-wrapper'>
            <img class='post-image' src={array.image} />
            <div class='overlay'>
              <p class='post-image-desc'>Title: {array.title}</p>
              <p class='post-image-desc'>User: {array.userName}</p>
            </div>
          </div>
    );
}
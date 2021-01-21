import React from 'react';

import './index.css';
import Post from '../Post';

export default function Postlist({ array }) {
    return (
    <div className="images-wrapper">
            <Post post={array} />
    </div>
  );
}

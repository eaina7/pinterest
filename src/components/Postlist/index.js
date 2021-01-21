import React from 'react';

import './index.css';
import Post from '../Post';

export default function Postlist({ array, userArray }) {

  return (
    <div className="images-wrapper">
      {array.map(entry => {
        let userName = userArray.filter((user) => {
          return entry.fields.userref.sys.id === user.sys.id;
        })
        return <Post post={entry} username={userName[0]}/>;
      })}
    </div>
  );
}

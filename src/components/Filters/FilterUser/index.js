import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function FilterUser({ users }) {
  return (
    <div name="users" id="users">
      {users.map(user => {
        return (
          <Link
            className="user-option"
            key={user.id}
            to={`/posts/user/${user.id}`}
          >
            {user.userName}
          </Link>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function FilterUser({ users, resetFilters }) {
  return (
    <div name="users" id="users">
      {users.map(user => {
        return (
          <Link
            className="user-option"
            key={user.id}
            id={user.id}
            to={`/posts/user/${user.id}`}
            onClick={() => resetFilters()}
          >
            {user.userName}
          </Link>
        );
      })}
    </div>
  );
}

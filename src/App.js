import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import AllPosts from './views/AllPosts';
import UserPosts from './views/UserPosts';
import PostDetailed from './components/PostDetailed';
import GoHomeButton from './components/GoHomeButton';
import Footer from './components/Footer';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=post&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );
      return response.data.items;
    };

    getPosts().then(response => {
      setPosts(response);
    });
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=user&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );
      return response.data.items;
    };

    getUsers().then(response => {
      setUsers(response);
    });
  }, []);

  return posts.length && users.length ? (
    <div>
      {/*Header*/}
      <header>
        <h1 className="header-heading">Pinterest(ing)</h1>
        <div className="search-wrapper">
          <input className="header-search" type="text" />
          <button className="search-button" type="submit" value="Search">
            Search
          </button>
        </div>
      </header>
      <main>
        {/*Buttons/filtering section*/}
        <div className="buttons-wrapper">
          <GoHomeButton className="home-button" caption="Home" />
          <div className="line"></div>
          <form className="user-selection">
            <label htmlFor="users">Choose a user:</label>
            <div name="users" id="users">
              {users.map(user => {
                return (
                  <Link
                    className="user-option"
                    key={user.sys.id}
                    id={user.sys.id}
                    to={`/posts/user/${user.sys.id}`}
                  >
                    {user.fields.username}
                  </Link>
                );
              })}
            </div>
          </form>
          <div className="line"></div>
          <div className="checkbox-wrapper">
            <label className="checkbox-desc" htmlFor="best-post">
              Show best posts:
            </label>
            <input className="post-checkbox" type="checkbox" />
          </div>
        </div>
        <Switch>
          <Route path="/posts/user/:userId">
            {posts.length && users.length ? (
              <UserPosts posts={posts} users={users} />
            ) : null}
          </Route>
          <Route path="/posts/:postId">
            {posts.length ? <PostDetailed posts={posts} /> : null}
          </Route>
          <Route path={['/', '/posts']}>
            {posts.length && users.length ? (
              <AllPosts posts={posts} users={users} />
            ) : null}
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  ) : null;
}

export default App;

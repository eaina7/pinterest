import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FilterUser from './components/Filters/FilterUser';
import FilterBestPosts from './components/Filters/FilterBestPosts';

import AllPosts from './views/AllPosts';
import UserPosts from './views/UserPosts';
import BestPosts from './views/BestPosts';
import PostDetails from './views/PostDetails';

import GoBackButton from './components/GoBackButton';
import Footer from './components/Footer';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const formatDate = strDate => {
    return strDate.substring(0, 10);
  };

  useEffect(() => {
    const doRequests = async () => {
      const postsResponse = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=post&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );
      const usersResponse = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=user&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );

      let posts = postsResponse.data.items;
      let users = usersResponse.data.items;

      // Cleaning up posts
      posts = posts.map(({ sys, fields }) => ({
        id: sys.id,
        date: formatDate(fields.date),
        title: fields.title,
        description: fields.description,
        image: fields.image,
        rating: fields.rating,
        userId: fields.userref.sys.id
      }));

      // Cleaning up users
      users = users.map(({ sys, fields }) => ({
        id: sys.id,
        userName: fields.username,
        firstName: fields.firstname,
        lastName: fields.lastname
      }));

      /*
      Adding user info to posts, so that the user array does not need to be passed
      to post components
      */
      users.forEach(user => {
        const userPosts = posts.filter(post => user.id === post.userId);

        userPosts.forEach(userPost => {
          userPost.userName = user.userName;
          userPost.firstName = user.firstName;
          userPost.lastName = user.lastName;
        });
      });

      setPosts(posts);
      setUsers(users);
    };

    doRequests();
  }, []);

  return (
    <div>
      <header>
        <h1 className="header-heading">Pinterest(ing)</h1>
        <div className="buttons-wrapper">
          <GoBackButton className="home-button" caption="Home" home="yes" />
          <div className="line"></div>
          <form className="user-selection">
            <label htmlFor="users">Choose a user:</label>
            {users.length ? <FilterUser users={users} /> : null}
          </form>
          <div className="line"></div>
          <Switch>
            <Route path="/posts/best">
              <FilterBestPosts checked={true} />
            </Route>
            <Route path={['/', '/posts']}>
              <FilterBestPosts checked={false} />
            </Route>
          </Switch>
        </div>
      </header>
      <main>
        {posts.length ? (
          <Switch>
            <Route path="/posts/best">
              <BestPosts posts={posts} />
            </Route>
            <Route path="/posts/user/:userId">
              <UserPosts posts={posts} />
            </Route>
            <Route path="/posts/:postId">
              <PostDetails posts={posts} />
            </Route>
            <Route path={['/', '/posts']}>
              <AllPosts posts={posts} />
            </Route>
          </Switch>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';
import './App.css';

import Postlist from './components/Postlist';
import PostDetailed from './components/PostDetailed';
import Footer from './components/Footer';

function App() {
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    const getPostArray = async () => {
      const response = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?content_type=post&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );
      return response.data.items;
    };
    getPostArray().then(response => {
      setPostsArray(response);
    });
  }, []);

  const getPostInfo = id => {
    const post = postsArray.filter(post => post.sys.id === id)[0];
    return post;
  };

  //console.log(postsArray);
  return (
    <>
      {/*Header*/}
      <header>
        <h1 class="header-heading">Pinterest(ing)</h1>
        <div class="search-wrapper">
          <input class="header-search" />
          <input class="search-button" type="submit" value="Search" />
        </div>
      </header>
      <main>
        {/*Buttons/filtering section*/}
        <div class="buttons-wrapper">
          <button class="home-button">Home</button>
          <div class="line"></div>
          <form class="user-selection">
            <label for="users">Choose a user:</label>
            <select name="users" id="users">
              <option class="user-option" value="u1">
                User 1
              </option>
              <option class="user-option" value="u2">
                User 2
              </option>
              <option class="user-option" value="u3">
                User 3
              </option>
              <option class="user-option" value="u4">
                User 4
              </option>
            </select>
            <input class="user-search-button" type="submit" value="Show" />
          </form>
          <div class="line"></div>
          <div class="checkbox-wrapper">
            <label class="checkbox-desc" for="best-post">
              Show best posts:
            </label>
            <input class="post-checkbox" type="checkbox" />
          </div>
        </div>

        <Switch>
          <Route path="/posts/:postId">
            <PostDetailed getPostInfo={getPostInfo} />
          </Route>
          <Route path="/">
            <Postlist array={postsArray} />
          </Route>
        </Switch>
      </main>

      <Footer />
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Postlist from './components/Postlist';
import PostDetailed from './components/PostDetailed';
import Footer from './components/Footer';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [userArray, setUserArray] = useState([]);
  let [updatedArray, setUpdatedArray] = useState([]);
  let [userChosen, setUserChosen] = useState('');

  useEffect(() => {
    const getPostArray = async () => {
      const response = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=fields&content_type=post&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );
      return response.data.items;
    };

    const getUserArray = async () => {
      const response = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=user&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );
      return response.data;
    };
    getPostArray().then(response => {
      setAllPosts(response);
      setUpdatedArray(response);
    });

    getUserArray().then(response => {
      //console.log(response.items);
      setUserArray(response.items);
    });
  }, []);

  const getPostInfo = id => {
    const post = postsArray.filter(post => post.sys.id === id)[0];
    return post;
  };

  const filterPosts = id => {
    const filteredArray = allPosts.filter(post => {
      return post.fields.userref.sys.id === id;
    });
    console.log(filteredArray);
    return filteredArray;
  };

  return userArray && allPosts ? (
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
          <button className="home-button">Home</button>
          <div className="line"></div>
          <form className="user-selection">
            <label for="users">Choose a user:</label>
            <div
              name="users"
              id="users"
              onClick={e => {
                setUserChosen(e.target.id);
                //console.log(userChosen);
                setUpdatedArray(filterPosts(e.target.id));
              }}
            >
              {userArray.map(user => {
                return (
                  <Link
                    className="user-option"
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
            <label className="checkbox-desc" for="best-post">
              Show best posts:
            </label>
            <input className="post-checkbox" type="checkbox" />
          </div>
        </div>
        <Switch>
          <Route path="/">
            <Postlist array={updatedArray} userArray={userArray} />
          </Route>
          <Route path={`/posts/user/${userChosen}`}>
            <Postlist array={updatedArray} userArray={userArray} />
          </Route>
          <Route path="/posts/:postId">
            <PostDetailed getPostInfo={getPostInfo} />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  ) : null;
}

export default App;

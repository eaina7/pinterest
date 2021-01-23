import React, { useState, useEffect, useRef } from 'react';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import AllPosts from './views/AllPosts';
import UserPosts from './views/UserPosts';
import BestPosts from './views/BestPosts';
import PostDetails from './views/PostDetails';

import GoHomeButton from './components/GoHomeButton';
import Footer from './components/Footer';

function App() {
  const history = useHistory();

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const bestPostsFilter = useRef();

  const formatDate = strDate => {
    return strDate.substring(0, 10);
  };

  useEffect(() => {
    const doRequests = async () => {
      let postsResponse = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=post&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );
      let usersResponse = await axios.get(
        'https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=user&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c'
      );

      postsResponse = postsResponse.data.items;
      usersResponse = usersResponse.data.items;

      const posts = postsResponse.map(({ sys, fields }) => ({
        id: sys.id,
        date: formatDate(fields.date),
        title: fields.title,
        description: fields.description,
        image: fields.image,
        rating: fields.rating,
        userId: fields.userref.sys.id
      }));

      posts.map(
        post =>
          (post.userName = usersResponse.filter(
            user => user.sys.id === post.userId
          )[0].fields.username)
      );

      setPosts(posts);
      setUsers(usersResponse);
    };

    doRequests();
  }, []);

  const bestPostsClickHandler = () => {
    bestPostsFilter.current.checked
      ? history.push('/posts/best')
      : history.push('/');
  };

  return posts.length && users.length ? (
    <div>
      {/*Header*/}
      <header>
        <h1 className="header-heading">Pinterest(ing)</h1>
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
            <label className="switch">
              <input
                ref={bestPostsFilter}
                className="post-checkbox"
                type="checkbox"
                onClick={bestPostsClickHandler}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/posts/best">
            {posts.length ? <BestPosts posts={posts} /> : null}
          </Route>
          <Route path="/posts/user/:userId">
            {posts.length ? <UserPosts posts={posts} /> : null}
          </Route>
          <Route path="/posts/:postId">
            {posts.length ? <PostDetails posts={posts} /> : null}
          </Route>
          <Route path={['/', '/posts']}>
            {posts.length ? <AllPosts posts={posts} /> : null}
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  ) : null;
}

export default App;

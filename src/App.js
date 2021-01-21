import React, {useState, useEffect} from 'react';
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import './App.css';

import Postlist from './components/Postlist';
import Footer from './components/Footer';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [userPosts , setUserPosts] = useState([]);
  const [currentArray, setCurrentArray] = useState([]);
  const [userArray, setUserArray] = useState([]);
  const [userChosen, setUserChosen] = useState("");

  useEffect(() => {
    const getPostArray = async() => {
      const response = await axios
      .get("https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=fields&content_type=post&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c")
      return response.data.items;
    };

    const getUserArray = async() => {
      const response = await axios
      .get("https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=sys.id,fields&content_type=user&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c")
      return response.data;
    }
    getPostArray().then(response => {
      setAllPosts(response)
      setCurrentArray(response)
    });

    getUserArray().then(response =>{
      //console.log(response.items);
      setUserArray(response.items);
    })
  }, []);


  const postFilter = () => {
    const filteredPosts = allPosts.filter((post) => {
        return post.fields.userref.sys.id === userChosen;
    })
    console.log(filteredPosts)
    setUserPosts(filteredPosts);
    setCurrentArray(userPosts);
  }
  return (
    <div>
      {/*Header*/}
      <header>
        <h1 className='header-heading'>Pinterest(ing)</h1>
        <div className='search-wrapper'>
          <input className='header-search' type="text"/>
          <button className='search-button' type='submit' value='Search'>Search</button>
        </div>
      </header>
      <main>
        {/*Buttons/filtering section*/}
        <div className='buttons-wrapper'>
          <button className='home-button'>Home</button>
          <div className='line'></div>
          <form className='user-selection' onSubmit={
            (e) => {
              e.preventDefault();
              postFilter();
            }
          } >
              <label for='users'>Choose a user:</label>
              <select name='users' id='users' onChange={(e) => {
                setUserChosen(e.target.value)
                console.log(userChosen)
              }}>
                  {userArray.map((user) => {
                    console.log(user);
                    return <option className="user-option" value={user.sys.id}>{user.fields.username}</option>
                  })}
              </select>
              <button className='user-search-button' type='submit'>Show</button>
          </form>
          <div className='line'></div>
          <div className='checkbox-wrapper'>
              <label className='checkbox-desc'for='best-post'>Show best posts:</label>
              <input className='post-checkbox' type='checkbox' />
          </div>
        </div>
            
      </main>
      <Footer />
    </div>
  );
}

export default App;

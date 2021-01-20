import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

import Postlist from './components/Postlist';
import Footer from './components/Footer';

function App() {
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    const getPostArray = async() => {
      const response = await axios
      .get("https://cdn.contentful.com/spaces/kq9f5euhdm7x/environments/master/entries/?select=fields&content_type=post&access_token=2x9QLBM2YqXGk3Pv4AKeEXF4AqqMVW0BuGsd144eP1c")
      return response.data.items;
    };
    getPostArray().then(response => {
      console.log(response[0].fields.image)
      setPostsArray(response)
    });
  }, []);

  //console.log(postsArray);
  return (
    <div>
      {/*Header*/}
      <header>
        <h1 className='header-heading'>Pinterest(ing)</h1>
        <div className='search-wrapper'>
          <input className='header-search' />
          <input className='search-button' type='submit' value='Search' />
        </div>
      </header>
      <main>
        {/*Buttons/filtering section*/}
        <div className='buttons-wrapper'>
          <button className='home-button'>Home</button>
          <div className='line'></div>
          <form className='user-selection'>
              <label for='users'>Choose a user:</label>
              <select name='users' id='users'>
                  <option className='user-option' value='u1'>User 1</option>
                  <option className='user-option' value='u2'>User 2</option>
                  <option className='user-option' value='u3'>User 3</option>
                  <option className='user-option' value='u4'>User 4</option>
              </select>
              <input className='user-search-button' type='submit' value='Show' />
          </form>
          <div className='line'></div>
          <div className='checkbox-wrapper'>
              <label className='checkbox-desc'for='best-post'>Show best posts:</label>
              <input className='post-checkbox' type='checkbox' />
          </div>
        </div>
        <Postlist array={postsArray} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

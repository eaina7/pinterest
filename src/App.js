import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
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
      console.log(response)
      setPostsArray(response)
    });
  }, []);

  //console.log(postsArray);
  return (
    <div>
      {/*Header*/}
      <header>
        <h1 class='header-heading'>Pinterest(ing)</h1>
        <div class='search-wrapper'>
          <input class='header-search' />
          <input class='search-button' type='submit' value='Search' />
        </div>
      </header>
      <main>
        {/*Buttons/filtering section*/}
        <div class='buttons-wrapper'>
          <button class='home-button'>Home</button>
          <div class='line'></div>
          <form class='user-selection'>
              <label for='users'>Choose a user:</label>
              <select name='users' id='users'>
                  <option class='user-option' value='u1'>User 1</option>
                  <option class='user-option' value='u2'>User 2</option>
                  <option class='user-option' value='u3'>User 3</option>
                  <option class='user-option' value='u4'>User 4</option>
              </select>
              <input class='user-search-button' type='submit' value='Show' />
          </form>
          <div class='line'></div>
          <div class='checkbox-wrapper'>
              <label class='checkbox-desc'for='best-post'>Show best posts:</label>
              <input class='post-checkbox' type='checkbox' />
          </div>
        </div>
        {/*Image Wrapper*/}
        <div className='images-wrapper'>
          {/*Image Itself*/}
          <div class='post-image-wrapper'>
            <img class='post-image' src='https://picsum.photos/seed/picsum/700/500' />
            <div class='overlay'>
              <p class='post-image-desc'><strong>Title: </strong>Mountains</p>
              <p class='post-image-desc'><strong>User: </strong>UzumakiNaruto</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

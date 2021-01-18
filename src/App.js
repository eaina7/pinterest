import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
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
                  <option class="user-option" value="u1">User 1</option>
                  <option class="user-option" value="u2">User 2</option>
                  <option class="user-option" value="u3">User 3</option>
                  <option class="user-option" value="u4">User 4</option>
              </select>
              <input class="user-search-button" type="submit" value="Show" />
          </form>
          <div class="line"></div>
          <div class="checkbox-wrapper">
              <label class="checkbox-desc"for="best-post">Show best posts:</label>
              <input class="post-checkbox" type="checkbox" />
          </div>
        </div>
        {/*Image Wrapper*/}
        <div className="images-wrapper">
          <div class="post-image-wrapper">
            <img class="post-image" src="https://picsum.photos/seed/picsum/700/500" />
            <div class="overlay">
              <p class="post-image-desc">Name</p>
              <p class="post-image-desc">Title</p>
              <p class="post-image-desc">Date</p>
              <p class="post-image-desc">Rating</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

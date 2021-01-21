import React from 'react';
import { useParams } from "react-router-dom";

import './index.css';
import Post from '../Post';

export default function Postlist({array}) {
    let { userId } = useParams();
  console.log(array)
  console.log(userId)
    const postFilter = (id) => {
      if(id === undefined) {
          array.map((entry) => {
            console.log(entry)
            return(
                <Post post={entry} />
            )
          })
      } else {
        const filteredPosts = array.filter((post) => {
          return post.fields.userref.sys.id === id;
        })
        filteredPosts.map((entry) => {
          console.log(entry)
          return(
              <Post post={entry} />
          )
        })
      }
      
    }

    return (
    <div className="images-wrapper">
      {
      postFilter(userId)
      }
    </div>
  );
}

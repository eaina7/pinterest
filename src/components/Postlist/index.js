import React from 'react';
import './index.css';

import Post from "../Post";

export default function Postlist({array}) {
    return (
        array.map((entry, iteration) => {
            <Post array={array} />
        })
    );
}
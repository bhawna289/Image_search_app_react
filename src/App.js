import React from 'react';
import './App.css';
import {LoadImages} from './components/api'
import SearchPhotos from "./searchphotos"
import Image from './components/image'

function App() {
  const data = LoadImages();
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Search Photos</h1>
        <SearchPhotos />
        <Image/>
      </div>
    </div>
  );
}

export default App;

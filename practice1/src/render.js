import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.querySelector('#root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};
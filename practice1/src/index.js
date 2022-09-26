import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Alex'},
  {id: 2, name: 'Masha'},
  {id: 3, name: 'Ignat'},
  {id: 4, name: 'Gora'},
  {id: 5, name: 'Edik'},
  {id: 6, name: 'Billy'}
];

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
];

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'It is my first post', likesCount: 11},
  {id: 1, message: 'Bla', likesCount: 11},
  {id: 2, message: 'Da', likesCount: 11}
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

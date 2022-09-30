let rerenderEntireTree = () => {
  console.log('State   changed');
}

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It is my first post', likesCount: 11},
      {id: 1, message: 'Bla', likesCount: 11},
      {id: 2, message: 'Da', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Ignat'},
      {id: 4, name: 'Gora'},
      {id: 5, name: 'Edik'},
      {id: 6, name: 'Billy'}
    ],
    messages: [
      {id: 1, message: 'Hi', align: 'left'},
      {id: 2, message: 'How are you?', align: 'right'},
      {id: 3, message: 'Yo', align: 'left'},
      {id: 4, message: 'Yo', align: 'right'},
      {id: 5, message: 'Yo', align: 'left'}
    ],
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Ignat'}
    ]
  }
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;

// test
let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It is my first post', likesCount: 11},
      {id: 1, message: 'Bla', likesCount: 11},
      {id: 2, message: 'Da', likesCount: 11}
    ]
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
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'Yo'},
      {id: 5, message: 'Yo'},
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

export default state;
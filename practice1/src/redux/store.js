import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
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
      newMessageBody: ''
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Ignat'}
      ]
    }
  },
  _callSubscriber()  {
    console.log('State   changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

window.state = store;

export default store;

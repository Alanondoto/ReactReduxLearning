const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state};
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      let body = state.newMessageBody;
      stateCopy.messages.push({id: 6, message: body, align: 'right'});
      stateCopy.newMessageBody = '';
      return stateCopy;
    }
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
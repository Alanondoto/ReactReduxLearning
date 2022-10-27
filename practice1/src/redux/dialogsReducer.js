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
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return  {
        ...state,
        messages: [...state.messages, {id: 6, message: body, align: 'right'}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
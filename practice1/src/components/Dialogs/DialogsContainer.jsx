// import s from './Dialogs.module.css';
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";
import {connect} from "react-redux";

const DialogsContainer = () => {

  return <StoreContext.Consumer>
    { store => {
      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      }
      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
      }
      return  <Dialogs updateNewMessageBody={onNewMessageChange}
                       sendMessage={onSendMessageClick}
                       dialogsPage={store.getState().dialogsPage}/>
      }
    }
  </StoreContext.Consumer>
}

let f1 = () => {

}

const SuperDialogsContainer = connect()(Dialogs);

export default DialogsContainer;
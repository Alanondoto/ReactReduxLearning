import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100)

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

  let messagesElements = state.messages.map(m => <Message align={m.align} message={m.message} key={m.id} />);

  let  onNewMessageChange = (values) => {
    props.sendMessage(values.newMessageBody)
  };

  if (!props.isAuth) return <Navigate to='/login'/>

  const MessageForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
              <div>
                <Field component={Textarea} validate={[required, maxLength100]} name='newMessageBody' placeholder='Enter your message' />
              </div>
              <div>
                <button>Send message</button>
              </div>
            </form>
    )
}

  const MessageReduxForm = reduxForm({form: 'DialogsMessageForm'})(MessageForm)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <MessageReduxForm onSubmit={onNewMessageChange} />  
      </div>
    </div>
  )
}

export default Dialogs;

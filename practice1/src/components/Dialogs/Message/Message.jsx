import s from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={s.message} style={{textAlign: props.align}}>{props.message}</div>
  )
}

export default Message;
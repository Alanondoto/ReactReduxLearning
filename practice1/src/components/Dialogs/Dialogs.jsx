import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Alex
        </div>
        <div className={s.dialog}>
          Masha
        </div>
        <div className={s.dialog}>
          Ignat
        </div>
        <div className={s.dialog}>
          Gora
        </div>
        <div className={s.dialog}>
          Edik
        </div>
        <div className={s.dialog}>
          Billy
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs;
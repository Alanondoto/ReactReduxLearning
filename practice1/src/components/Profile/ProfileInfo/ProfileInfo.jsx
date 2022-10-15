import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='https://html5css.ru/css/img_lights.jpg' alt='background' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        {props.profile.aboutMe}
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
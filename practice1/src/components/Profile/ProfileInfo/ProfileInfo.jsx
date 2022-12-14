import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src='https://html5css.ru/css/img_lights.jpg' alt='background' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt={'img'}/>
        {props.profile.aboutMe}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;
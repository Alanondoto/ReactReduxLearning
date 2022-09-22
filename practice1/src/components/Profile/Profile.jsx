import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src='https://html5css.ru/css/img_lights.jpg' alt='background' />
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;
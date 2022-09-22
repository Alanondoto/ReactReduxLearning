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
        <div>
          My posts
          <div>
            New post
          </div>
          <div className={s.post}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;
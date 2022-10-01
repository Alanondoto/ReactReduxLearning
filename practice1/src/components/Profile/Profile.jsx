import MyPosts from './MyPosts/MyPosts';
// import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const   Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts dispatch={props.dispatch} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} />
      </div>
    )
}

export default Profile;
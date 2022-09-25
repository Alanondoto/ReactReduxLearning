import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It is my first post', likesCount: 23}
  ];
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post likesCount={postData[0].likesCount} message={postData[0].message} />
        <Post likesCount={postData[1].likesCount} message={postData[1].message} />
      </div>
    </div>
  )
}

export default MyPosts;
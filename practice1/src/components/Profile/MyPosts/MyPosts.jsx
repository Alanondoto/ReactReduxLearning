import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.post}>
        <Post likeCounter='15' message='Hi, how are you?' />
        <Post likeCounter='20' message='It is my first post' />
      </div>
    </div>
  )
}

export default MyPosts;
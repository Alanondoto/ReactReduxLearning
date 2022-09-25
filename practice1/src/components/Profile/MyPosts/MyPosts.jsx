import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 11},
    {id: 1, message: 'Bla', likesCount: 11},
    {id: 2, message: 'Da', likesCount: 11}
  ];

  let postsElements = posts.map(p => <Post likesCount={p.likesCount} message={p.message} />);

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
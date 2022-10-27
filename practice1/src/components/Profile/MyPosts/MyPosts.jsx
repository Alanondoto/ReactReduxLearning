import s from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";
import {Field, reduxForm} from 'redux-form'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post likesCount={p.likesCount} message={p.message} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  const PostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
              <div>
                <Field component={'textarea'} name='newPostText' />
              </div>
              <div>
                <button>Add post</button>
              </div>
            </form>
    )
}

  const PostReduxForm = reduxForm({form: 'ProfilePostForm'})(PostForm)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <PostReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
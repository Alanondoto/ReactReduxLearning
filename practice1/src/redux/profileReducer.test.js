import profileReducer, {addPostActionCreator, deletePost} from './profileReducer';

let state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It is my first post', likesCount: 11},
      {id: 1, message: 'Bla', likesCount: 11},
      {id: 2, message: 'Da', likesCount: 11}
    ]
  };

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('hihihi');
    // 2. action  
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('hihihi');
    // 2. action  
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].message).toBe('hihihi');
});

it('after deleting length of messages shpuld be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action  
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length should not be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action  
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
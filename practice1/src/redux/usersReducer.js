const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {id: 1, followed: false, fullName: 'Alex', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'} },
    {id: 1, followed: true, fullName: 'Masha', status: 'Hey all!', location: {city: 'Saint Petersburg', country: 'Russia'} },
    {id: 1, followed: false, fullName: 'Abdulah', status: 'Hello my friends', location: {city: 'Abudabi', country: 'OAE'} }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const followAC = () => ({type: FOLLOW })

export const unfollowAC = () => ({type: UNFOLLOW })

export default usersReducer;
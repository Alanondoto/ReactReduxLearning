import { headerAPI } from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
};

export const setAuthUserData = (email, userId, login) => ({type: SET_USER_DATA, data: {userId, email, login }})

export const authMe = () => {
  return (dispatch) => {
    headerAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(email, id, login));
      }
    });
  }
}

export default authReducer;
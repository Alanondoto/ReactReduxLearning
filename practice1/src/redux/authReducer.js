import { headerAPI } from "../API/API";
import { stopSubmit } from 'redux-form'

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
        ...action.payload 
      }
    default:
      return state;
  }
};

export const setAuthUserData = (email, userId, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const authMe = () => {
  return (dispatch) => {
    headerAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
    });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    headerAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(authMe())
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
      }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    headerAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    });
  }
}

export default authReducer;
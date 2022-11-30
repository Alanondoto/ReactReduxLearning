import { headerAPI } from "../API/API";
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

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

export const authMe = () => async (dispatch) => {
  let data = await headerAPI.authMe();
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
  }

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await headerAPI.login(email, password, rememberMe);
      if (data.resultCode === 0) {
        dispatch(authMe())
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
      }
  }

export const logout = () => async (dispatch) => {
    let data = await headerAPI.logout();
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
  }

export default authReducer;
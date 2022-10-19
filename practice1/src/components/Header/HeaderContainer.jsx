import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {usersAPI as usuersAPI} from "../../API/API";

class HeaderContainer extends React.Component{
  componentDidMount() {
    usuersAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        this.props.setAuthUserData(email, id, login);
      }
    });
  }
  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
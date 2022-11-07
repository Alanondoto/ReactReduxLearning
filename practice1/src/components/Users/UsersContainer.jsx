import {connect} from "react-redux";
import {
  followUser,
  setCurrentPage,
  toggleFollowingInProgress,
  unfollowUser,
  getUsers
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getPageSize, getUser, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectotrs";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render () {
    return <>
      {this.props.isFetching ? <Preloader /> : null}

      <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  followUser={this.props.followUser}
                  unfollowUser={this.props.unfollowUser}
                  followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, 
    {followUser, unfollowUser, setCurrentPage, toggleFollowingInProgress, getUsers} ),
  withAuthRedirect
)(UsersContainer)

// test
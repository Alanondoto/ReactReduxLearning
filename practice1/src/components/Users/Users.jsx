import React from "react";
import styles from './users.module.css';

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers(
      [
        {id: 1, photoUrl: 'https://ru-static.z-dn.net/files/de0/142eff7b96bdc0f5d211ff7ad7be2ab1.jpeg', followed: false, fullName: 'Alex', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'} },
        {id: 2, photoUrl: 'https://ru-static.z-dn.net/files/de0/142eff7b96bdc0f5d211ff7ad7be2ab1.jpeg', followed: true, fullName: 'Masha', status: 'Hey all!', location: {city: 'Saint Petersburg', country: 'Russia'} },
        {id: 3, photoUrl: 'https://ru-static.z-dn.net/files/de0/142eff7b96bdc0f5d211ff7ad7be2ab1.jpeg', followed: false, fullName: 'Abdulah', status: 'Hello my friends', location: {city: 'Abudabi', country: 'OAE'} }
      ]
    )
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt="ava" className={styles.userPhoto} />
          </div>
          <div>
            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
};

export default Users;
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={({ isActive }) =>
            isActive ? s.active : undefined
          }>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={({ isActive }) =>
            isActive ? s.active : undefined
          }>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className={({ isActive }) =>
            isActive ? s.active : undefined
          }>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={({ isActive }) =>
            isActive ? s.active : undefined
          }>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={({ isActive }) =>
            isActive ? s.active : undefined
          }>Settings</NavLink>
        </div>
        <Sidebar friends={props.state.friends}/>
      </nav>
    )
}

export default Navbar;
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
      <header className={s.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo' />

        <div className={s.loginBlock}>
          {props.isAuth
            ? <div>{props.login}</div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    )
}

export default Header;
import s from './../Navbar.module.css';
import Friend from "./Friend";

const Sidebar = (props) => {

  let sidebarElements = props.friends.map(f => <Friend name={f.name}/>);

  return (
      <div className={s.sidebar}>
        <div className={s.title}>Friends</div>
        <div className={s.wrapper}>
          {sidebarElements}
        </div>
      </div>
  )
}

export default Sidebar;
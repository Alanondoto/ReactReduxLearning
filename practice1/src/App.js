import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#s'>Profile</a>
        </div>
        <div>
          <a href='#s'>Messages</a>
        </div>
        <div>
          <a href='#s'>News</a>
        </div>
        <div>
          <a href='#s'>Music</a>
        </div>
        <div>
          <a href='#s'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://html5css.ru/css/img_lights.jpg' alt='background' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


const Friend = (props) => {
  return (
        <div className="item">
          <img src='https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3' alt='avatar'/>
          <div className="name">{props.name}</div>
        </div>
  )
}

export default Friend;
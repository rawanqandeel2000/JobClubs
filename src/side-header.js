import MyImage from './img/team.jpg';


const HeaderTitle = () => {
  const link = 'https://www.google.com/';
  return (
    <div className="header-side">
      <div className="row">
        <div className="col-sm-6 title-details">
          <h4>Good morning,
            <b>Saeed!🖐️</b>
          </h4>
        </div>
        <div className="col-sm-4 img-details">
          <ul>
            <li>
              <a href={link}>
                <span className="material-symbols-outlined">home</span>
              </a>
            </li>
            <li>
              <a href={link}>
                <span className="material-symbols-outlined">near_me_disabled</span>
              </a>
            </li>
            <li>
              <a href={link}>
                <span className="material-symbols-outlined">notifications</span>
              </a>
            </li>
            <li>
              <a href={link}>
                <span className="material-symbols-outlined">mark_email_unread</span>
              </a>
            </li>
            <li>
              <span className="vl"></span>
            </li>
          </ul>
        </div>
        <div className="col-sm-2 user-name">
          <p>Saeed
            <span><br/>UI Designer</span>
          </p>
          <img src={MyImage} alt=""/>
        </div>
      </div>
    </div>
  );
}
export default HeaderTitle;
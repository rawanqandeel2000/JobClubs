import MyImage from './img/team.jpg';


const StoresSide = () => {
  return (
    <div className="team-members">
      <div className="row">
        <div className="col-sm-6 title-box">
          <h6>
            <b>For you</b>
          </h6>
        </div>
        <div className="col-sm-6 icon-details">
          <i className="material-symbols-outlined">discover_tune</i>
        </div>
        <div className="table-store">
          <ul id="menu">
            <li>
              <div>
                <img src={MyImage} alt="" id="img-det"/>
                <p>Sina</p>
              </div>
            </li>
            <li>
              <div>
                <img src={MyImage} alt="" id="img-det"/>
                <p>Marjan</p>
              </div>
            </li>
            <li>
              <div>
                <img src={MyImage} alt="" id="img-det"/>
                <p>Masoud</p>
              </div>
            </li>
            <li>
              <div>
                <img src={MyImage} alt="" id="img-det"/>
                <p>Ashkan</p>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default StoresSide;
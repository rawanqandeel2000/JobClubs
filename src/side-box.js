import MyImage from './img/team.jpg';
const BoxSide = () => {
  return (
    <div className="box-side text-center">
      <span className="dot"></span>
      <div className="inner-box">
        <img className='img-fluid' src={MyImage} alt=""/>
        <div>Saeed</div>
        <p>UI Designer</p>
      </div>
    </div>
  );
}
export default BoxSide;
import MyImage from './img/team.jpg';

const ProductSide = () => {
  return (
    <div className="product-side">
      <div className="row products">
        <div className="col-sm-6 title-details">
          <p>Product Designers</p>
          <span>Number of members</span>
        </div>
        <div className="col-sm-6 img-details">
          <ul>
            <li><img src={MyImage} alt="" height="30px" width="30px"/></li>
            <li><img src={MyImage} alt="" height="30px" width="30px"/></li>
            <li><img src={MyImage} alt="" height="30px" width="30px"/></li>
            <li><img src={MyImage} alt="" height="30px" width="30px"/></li>
          </ul>
        </div>
      </div>
      <div className="w3-container">
        <div className="w3-grey w3-round w3-xlarge">
          <div
            className="w3-container w3-green w3-round"
            style={{
            width: "75%"
          }}></div>
        </div>
      </div>
    </div>
  );
}
export default ProductSide;
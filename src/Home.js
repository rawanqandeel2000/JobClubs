import JobClubs from './job-clubs';
import MessageSection from './message-section.js';
import BoxSide from './side-box';
import ChartSide from './side-chart';
import HeaderTitle from './side-header.js';
import SideIcon from './side-nav-icon';
import ProductSide from './side-product';
import StoresSide from './side-stores';

const Home = () => {
  return (
    <div className="all-page">
      <div className="container">
        <HeaderTitle/>
        <div className="row">
          <div className="col-sm-5">
            <JobClubs/>
            <ChartSide/>
          </div>
          <div className="col-sm-5">
            <MessageSection/>
            <div className="row sections-inner">
              <div className="col-sm-10">
                <StoresSide/>
                <ProductSide/>
              </div>
              <div className="col-sm-2">
                <SideIcon/>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <BoxSide/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
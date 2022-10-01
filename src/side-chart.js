const ChartSide = () => {
  return (
    <div className="chart-page">
      <div className="row">
        <div className="col-sm-6 chart-det">
          <a href>
            <span className="material-symbols-outlined">indeterminate_check_box</span>
          </a><br/>
          <h6>$478,95</h6>
          <p>Weekly income</p>
        </div>
        <div className="col-sm-6 chart-line ">
          <a href>
            <span className="material-symbols-outlined">more_vert</span>
          </a><br/><br/>
          <i className="material-symbols-outlined">process_chart</i>
        </div>
      </div>
    </div>
  );
}
export default ChartSide;
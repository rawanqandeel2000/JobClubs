const JobClubs = () => {
  return (
    <div className="Job-clubs">
      <h4>Job Clubs</h4>
      <label class="checkbox">
        <div className="check-box job_clubs_selected">
          <div className='checkbox_dev'>
            <input type="checkbox" class="checkbox__input"/>
            <span className="checkbox__inner"></span>
          </div>
          <div className="job_clubs_box">
            <p className="job_clubs_title">IIIustrations team</p>
            <p className="job_clubs_body">Here you can challenge your color 🎨</p>
          </div>
        </div>
      </label>
      <label class="checkbox">
        <div className="check-box">
          <div className='checkbox_dev'>
            <input type="checkbox" class="checkbox__input"/>
            <span class="checkbox__inner"></span>
          </div>

          <div className="job_clubs_box">
            <p className="job_clubs_title">User experience club</p>
            <p className="job_clubs_body">lets work with different designers 📐</p>
          </div>
        </div>
      </label>
      <label class="checkbox">
        <div className="check-box">
          <div className='checkbox_dev'>
            <input type="checkbox" class="checkbox__input"/>
            <span className="checkbox__inner"></span>
          </div>
          <div className="job_clubs_box">
            <p className="job_clubs_title">User Interface Zone</p>
            <p className="job_clubs_body">Here you find some cool and wierd guys 🚀</p>
          </div>
        </div>
      </label>
      <div className="button-sub">
        <i className="material-symbols-outlined">navigate_before</i>
        <input type="submit" value="Next" id="sub-input"/>
      </div>
    </div>
  );
}
export default JobClubs;
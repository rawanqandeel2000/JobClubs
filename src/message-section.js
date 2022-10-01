import MyImage from './img/team.jpg';

const MessageSection = () => {
  return (
    <div className="message-section">
      <div className="message-title">
        <h4>Message</h4>
        <span className="material-symbols-outlined">cancel</span>
      </div>
      <div className="comments">
        <div className="prg-inner">
          <p>
            l can't believe you missed it! 😑😑
          </p>
        </div>
        <div className="img-inner">
          <img src={MyImage} alt=""/>
          <p>
            They were getting crushed out here 🔥 but turned it around in the lost quarter.
          </p>
          <h6>Today ,6:21 AM</h6>
        </div>
      </div>
    </div>
  );
}
export default MessageSection;
import "./rightbar.css";
import gift from "../../assets/gift.png";
import ad from "../../assets/ad.png";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt="" />
          <span className="birthdayText">
            <strong>Pola Foster</strong> and <strong> 3 other friends </strong>
            have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src={ad} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

import "./rightbar.css";
import gift from "../../assets/gift.png";
import ad from "../../assets/ad.png";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={"/src/assets/person/1.jpeg"}
              alt="rightbarfollowingimage"
            />
            <span className="rightbarFollowingNmae">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={"/src/assets/person/2.jpeg"}
              alt="rightbarfollowingimage"
            />
            <span className="rightbarFollowingNmae">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/src/assets/person/3.jpeg"
              alt="rightbarfollowingimage"
            />
            <span className="rightbarFollowingNmae">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/src/assets/person/4.jpeg"
              alt="rightbarfollowingimage"
            />
            <span className="rightbarFollowingNmae">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/src/assets/person/5.jpeg"
              alt="rightbarfollowingimage"
            />
            <span className="rightbarFollowingNmae">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/src/assets/person/6.jpeg"
              alt="rightbarfollowingimage"
            />
            <span className="rightbarFollowingNmae">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

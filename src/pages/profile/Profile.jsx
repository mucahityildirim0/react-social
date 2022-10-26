import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import photo3 from "../../assets/post/3.jpeg";
import person7 from "../../assets/person/7.jpeg";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={photo3} alt="" />
              <img className="profileUserImg" src={person7} alt="" />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Mücahit Yildirim</h4>
            <span className="profileInfoName">Hello my friends!</span>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

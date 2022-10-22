import "./post.css";
import person1 from "../../assets/person/1.jpeg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import textImage from "../../assets/post/1.jpeg";
import heart from "../../assets/heart.png";
import like from "../../assets/like.png";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        {/* bu wrapper i yapma amacım post divi içine padding vermek */}
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={person1} alt="profileImage" />
            <span className="postUsername">Mücahit Yildirim</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post :)</span>
          <img src={textImage} alt="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={heart} alt="" />
            <img className="likeIcon" src={like} alt="" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

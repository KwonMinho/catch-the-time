import React from "react";
import StarIcon from "@mui/icons-material/Star";
import RecommendIcon from "@mui/icons-material/Recommend";
//tmp
import user from "../assets/user.jpeg";

{
  /* <div className="preview-container">
  <div className="preview-title"></div>
  <div className="preview-content">
    <div className="posts">
      <div className="post">
        <div className="post-title">
        <div className="post-meta">
      </div>
    </div>
  </div>
</div> */
}

function Home() {
  return (
    <div>
      <div className="preview-title">
        <StarIcon className="preview-title-icon" />
        <h3>주간 베스트</h3>
      </div>
      <div className="preview-posts">
        <div className="post">
          <div className="post-title">
            <h6>이번주 회고합니다.</h6>
            <div>[303]</div>
          </div>
          <div className="post-meta">
            <img className="avatar" src={user} />
            <p>minho</p>
            <RecommendIcon />
            <div>3</div>
            <div>1시간 전</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

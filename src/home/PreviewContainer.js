import React from "react";
import StarIcon from "@mui/icons-material/Star";
/**
 * prview content
 *
 * title
 * - icon
 * - title
 * content
 * - post.post-title AND post.post-meta
 */

import List from "@mui/material/List";
import PreviewContent from "./PreviewContent";

function PreviewContainer({ title, icon }) {
  return (
    <div className="preview-container">
      <div className="preview-container-title">
        <div className="preview-title-icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <List className="preview-content-list" disablePadding>
        <PreviewContent />
        <PreviewContent />
      </List>
    </div>
  );
}

export default PreviewContainer;

{
  /* <div>
<div className="preview-container">
  <div className="preview-title">
    <StarIcon className="preview-title-icon" />
    <h3>주간 베스트</h3>
  </div>
  <div className="preview-content">
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
</div> */
}

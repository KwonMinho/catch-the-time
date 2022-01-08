import React from "react";
import StarIcon from "@mui/icons-material/Star";
import RecommendIcon from "@mui/icons-material/Recommend";
import user from "../assets/user.jpeg";
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
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function PreviewContainer() {
  return (
    <div className="preview-container">
      <div className="preview-title">
        <StarIcon className="preview-title-icon" />
        <h3>주간 베스트</h3>
      </div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
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

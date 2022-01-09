import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Avatar from "@mui/material/Avatar";

function PreviewContent() {
  const clickContent = () => {
    alert("enter!");
  };
  return (
    <div className="preview-content">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          onClick={clickContent}
          className="content"
          primary="여기에는 제목이 들어갑니다.."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                3일 전
              </Typography>
              {" — I'll be in your neighborhood doing e this… [77]"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </div>
  );
}

export default PreviewContent;

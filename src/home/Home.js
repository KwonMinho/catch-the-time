import React from "react";
import Grid from "@mui/material/Grid";
import PreviewContainer from "./PreviewContainer";
import { PreviewListData } from "./PreviewListData";

function Home() {
  return (
    <div className="home">
      <Grid container spacing={4} columns={16}>
        {PreviewListData.map((val, id) => {
          return (
            <Grid key={id} item xs={8} md={8}>
              <PreviewContainer title={val.title} icon={val.icon} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;

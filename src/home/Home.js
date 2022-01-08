import React from "react";
import Grid from "@mui/material/Grid";
import PreviewContainer from "./PreviewContainer";

function Home() {
  return (
    <div className="home">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8} md={8}>
          <PreviewContainer>xs=6 md=8</PreviewContainer>
        </Grid>
        <Grid item xs={8} md={4}>
          <PreviewContainer>xs=6 md=4</PreviewContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

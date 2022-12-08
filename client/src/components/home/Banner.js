import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Lottiecar from "../../assets/images/Lottiecar.json";
import Blob from "../../assets/images/blob.svg";
import Style from "./Home.module.css";
import Lottie from "lottie-react";

const style = {
  height: 600,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 20],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [20, 135],
    },
  ],
};

export default function Banner() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img className={Style.blob} src={Blob} alt="décoration de titre" />
          <h1 className={Style.title}>Bienvenue chez car Cash</h1>
          <h2 className={Style.subtitle}>
            Elle est conçue juste pour vous séduire
          </h2>
        </Grid>
        <Grid item xs={6}>
          <Lottie
            animationData={Lottiecar}
            style={style}
            interactivity={interactivity}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

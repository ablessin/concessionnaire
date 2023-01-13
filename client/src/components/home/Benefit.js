import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Style from "./Home.module.css";
import Rapide from "../../assets/s/home/fast.png";
import Gratuit from "../../assets/s/home/free.png";
import SansEngagement from "../../assets/s/home/locker.png";

export default function Banner() {
  return (
    <Box sx={{ flexGrow: 1 }} className={Style.benefit}>
        <Grid container className={Style.benefitContainer}>
            <Grid item xs={12} md={4}>
              <img
                  src={Rapide}
                  alt="rapide"
              />
              <p>Rapide</p>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                  src={Gratuit}
                  alt="gratuit"
              />
              <p>Gratuit</p>   
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                  src={SansEngagement}
                  alt="sans engagement"
              />   
              <p>Sans engagement</p> 
            </Grid>   
      </Grid>
    </Box>
  );
}

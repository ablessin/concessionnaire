import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Style from "./Home.module.css";
import Rapide from "../../assets/images/home/fast.png";
import Gratuit from "../../assets/images/home/free.png";
import SansEngagement from "../../assets/images/home/locker.png";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function Banner() {
  return (
    <Box sx={{ flexGrow: 1 }} className={Style.benefit}>
        <Grid container className={Style.benefitContainer}>
            <Grid item xs={12} md={4}>
              <img
                  src={Rapide}
                  alt="image rapide"
              />
              <p>Rapide</p>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                  src={Gratuit}
                  alt="Image gratuit"
              />
              <p>Gratuit</p>   
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                  src={SansEngagement}
                  alt="Image sans engagement"
              />   
              <p>Sans engagement</p> 
            </Grid>   
      </Grid>
    </Box>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Style from "./Home.module.css";
import Achatimg from "../../assets/images/achatvoiture.jpg";

export default function VisiteAchat() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img
            className={Style.imgachat}
            src={Achatimg}
            alt="Image voiture achat"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

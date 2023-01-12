import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Style from "./Home.module.css";
import Button from '@mui/material/Button';




export default function Banner() {
  return (
    <Box className={Style.banner} padding={{xs:0, md:5}} >
      <Grid className={Style.title}>
      <Typography variant="h1" gutterBottom> 
      Car Cash : Achetez, vendez, estimez
      </Typography>
      </Grid>
      <Grid className={Style.textBanner}>
          <p>Car Cash est une entreprise qui a pour objectif de permettre a chaque utilisateur de pouvoir estimer sa voiture, la mettre en vente ou en acheter une nouvelle.
            L’objectif principale de Car Cash est de faciliter les transactions entre vendeur et acheteur pour des offres automobiles.</p>
      </Grid>
      <Box  padding={{xs:2, md:0}}>
        <Button className={Style.buttonBanner} variant="contained">Estimer sa voiture</Button>
      </Box>
    </Box>
  );
}

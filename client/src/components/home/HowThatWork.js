import React from "react";
import Typography from '@mui/material/Typography';
import Style from "./Home.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Choice from "../../assets/s/home/choice.png";
import Calendar from "../../assets/s/home/calendar.png";
import Fast from "../../assets/s/home/fast-estimation 2.png";
import ImmediateSale from "../../assets/s/home/immediate-sale.png";
import Ellipse from "../../assets/s/home/Ellipse.png";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function HowThatWork() {
  return (
    <>
        <Box sx={{ flexGrow: 1 }} className={[Style.containerDivider, Style.marginBottom]}>
            <Typography variant="h2" gutterBottom className={Style.title}> 
                    Comment ca marche ?
            </Typography>
            <div className={Style.divider}></div>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container className={Style.work}>
                <Grid item xs={12} className={Style.cardSpaces}>
                        <img
                            src={Ellipse}
                            alt="Ellipse symbole schema"
                            className={Style.ellipse}
                        />
                    <Item className={Style.workCard}>
                        <img
                            src={Choice}
                            alt="choice"
                        />
                        <p className={Style.textLeft}>
                            Demande d’estimation en ligne. 1 minute maxi !
                        </p>
                    </Item>
                </Grid>
                <Grid  item xs={12} className={Style.cardSpaces}>
                    <img
                        src={Ellipse}
                        alt="Ellipse symbole schema"
                        className={Style.ellipse}
                    />
                    <Item className={Style.workCard}>
                        <img
                            src={Calendar}
                            alt="calendar"
                        />
                        <p className={Style.textLeft}>
                            Rachats suivant la valeur proposées
                        </p>
                    </Item>  
                </Grid>
                <Grid item xs={12} className={Style.cardSpaces}>
                    <img
                        src={Ellipse}
                        alt="Ellipse symbole schema"
                        className={Style.ellipse}
                    />
                    <Item className={Style.workCard}>
                        <img
                            src={Fast}
                            alt="fast"
                        />
                        <p className={Style.textLeft}>
                            Intéressé ? Prise de RDV à votre domicile avec un expert (partout en France).
                            Vérification mécanique et esthétique de votre véhicule.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={12} className={Style.cardSpaces}>
                    <img
                        src={Ellipse}
                        alt="Ellipse symbole schema"
                        className={Style.ellipse}
                    />
                    <Item className={Style.workCard}>
                        <img
                            src={ImmediateSale}
                            alt="immediate sale"
                        />
                        <p className={Style.textLeft}>
                            Confirmation de la valeur. Prise en charge du véhicule. Vente.
                        </p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </>
    
  );
}

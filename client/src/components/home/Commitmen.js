import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Style from "./Home.module.css";
import Typography from '@mui/material/Typography';
import Safe from "../../assets/images/home/safe.png";
import Transparent from "../../assets/images/home/transparent.png";
import Respect from "../../assets/images/home/respect.png";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function Commitmen() {
  return (
    <>
        <Typography variant="h2" gutterBottom className={Style.title}> 
        Nos engagements
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container className={Style.commitContainer}>
                <Grid item xs={12} md={3}>
                    <Item  className={Style.homeCard}>
                        <div className={Style.textLeft}>
                            <img
                                src={Safe}
                                alt="image safe"
                            />
                            <Typography variant="h3" gutterBottom> 
                            Sécurité
                            </Typography>
                        </div>
                        <p className={Style.textLeft}>
                        Tous nos process sont parfaitement sécurisés. Une fois le véhicule confié, nous nous chargeons de tout : vous n’avez plus aucune démarche à faire !
                        Le paiement est garanti, vous êtes sûr d’être payé.
                        </p>
                    </Item>
                </Grid>
                <Grid  item xs={12} md={3}>
                    <Item  className={Style.homeCard}>
                    <div className={Style.textLeft}>
                        <img
                            src={Transparent}
                            alt="image transparent"
                        />
                        <Typography variant="h3" gutterBottom> 
                        Transparence
                        </Typography>
                    </div>
                    <p className={Style.textLeft}>
                    La composante principale de notre métier. Un prix conforme aux prix de marché pour un véhicule en état standard. L’expertise valide l’estimation proposée.
                    </p>
                    </Item>  
                </Grid>
                <Grid item xs={12} md={3}>
                    <Item  className={Style.homeCard}>
                    <div className={Style.textLeft}>
                        <img
                            src={Respect}
                            alt="image respect"
                        />
                        <Typography variant="h3" gutterBottom> 
                        Respect
                        </Typography>
                    </div>
                    <p className={Style.textLeft}>
                    Chez nous, pas de marketing agressif. Nous ne demandons que les informations nécessaires pour réaliser l’estimation.
                    Vous décidez d’aller plus loin ? Super ! Vous complétez votre demande en ligne et notre service clients prend le relais.
                    C’est la garantie d’un dossier bien préparé et d’une visite d’expertise réussie.
                    </p>
                    </Item>
                </Grid>   
          </Grid>
        </Box>
    </>
  );
}

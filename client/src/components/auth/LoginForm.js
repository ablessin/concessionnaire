import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Style from "./auth.module.css";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';


export default function FormPropsTextFields() {
  return (
    <>
      <Box className={Style.title}>
        <Typography variant="h2" gutterBottom> 
        Se connecter
      </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50%' },
        }}
        noValidate
        autoComplete="off"
        className={Style.formContainer}
      >
        <div className={Style.inputForm}>
            <TextField fullWidth
              required
              id="outlined-required"
              label="Required"
              type="email"
              defaultValue="Email"
              className={Style.fieldForm}
            />
        </div>
        <div className={Style.inputForm}>
            <TextField fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className={Style.fieldForm}

            />
        </div>
        <Button variant="contained" color="success">
            Valider
        </Button>
      </Box>
    </>
    
  );
}
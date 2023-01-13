import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Style from "./auth.module.css";
import Button from "@mui/material/Button";


export default function FormPropsTextFields() {
  return (
    <>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className={Style.formContainer}
    >
        <div>
            <TextField fullWidth
              required
              id="outlined-required"
              label="Required"
              type="email"
              defaultValue="Email"
            />
        </div>
        <div>
            <TextField fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
        </div>
        <Button variant="contained" color="success">
            Valider
        </Button>
      </Box>
    </>
    
  );
}
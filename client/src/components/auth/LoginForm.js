import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Connect from "../../assets/images/auth/connect.jpg";

export default function FormPropsTextFields() {
  return (
    <>
        <img src={Connect} alt={"Connect image"} />
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
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
    </Box>
    </>
    
  );
}
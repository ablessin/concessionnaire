import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Style from "./auth.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

export default function FormPropsTextFields() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {

    const credentials = {email, password};

    fetch('http://localhost:3001/api/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    
    })
  }

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
          "& .MuiTextField-root": { m: 1, width: "50%" },
        }}
        noValidate
        autoComplete="off"
        className={Style.formContainer}
      >
        <div className={Style.inputForm}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Required"
            type="email"
            className={Style.fieldForm}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={Style.inputForm}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            className={Style.fieldForm}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          onClick={() => login()}
          variant="contained"
          color="success"
        >
          Valider
        </Button>
        <br />
        <GoogleOAuthProvider clientId="935536422250-nnfrgfcuoe3pmd3mttmam41mcbhjeq1f.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </Box>
    </>
  );
}

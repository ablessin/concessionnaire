import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function LoginFormTextField() {
    return (
        <Stack
            component="form"
            sx={{
                width: '25ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="filled-required"
                    label="email"
                    defaultValue="email"
                    variant="filled"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="mot de passe"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
            </div>


        </Stack>
    );
}
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function CreateAccountFields() {
    return (
        <Stack
            component="form"
            sx={{
                width: '50%',
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
                    placeholder={"Saisir"}
                    variant="filled"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="mot de passe"
                    type="password"
                    placeholder={"Saisir"}
                    variant="filled"
                    autoComplete="current-password"
                />
            </div>
        </Stack>
    );
}
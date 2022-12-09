import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField(props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: props.width},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="filled-basic" label={props.label} variant={props.filled ? "filled" : "standard"} disabled={!!props.disabled} type={props.type}/>
        </Box>
    );
}
import { TextField } from '@mui/material'
import React from 'react'

export const Input = ({ register, label, name, ...props }: any) => {
    return (
        <TextField
            {...props}
            sx={{
                width: '95%',
                m: 1
            }}
            {...register(name)}
            label={label}
        />
    )
}

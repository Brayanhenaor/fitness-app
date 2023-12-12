import { MenuItem, TextField } from '@mui/material'

export const SelectInput = ({ register, label, name, options }: any) => {
    return (
        <TextField
            sx={{
                width: '95%',
                m:1
            }}
            {...register(name)}
            select
            label={label}
        >
            {options.map((option: any) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    )
}

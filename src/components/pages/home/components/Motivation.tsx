import { Box, Typography } from '@mui/material'
import skipping from '../../../../assets/skippping.png'

export const Motivation = () => {
    return (
        <article>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <img src={skipping} width='100%' />
                <Typography
                    variant='body1'
                    sx={{
                        textAlign: 'center',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                    “You will have everything you need to reach your personal fitness goals”
                </Typography>
            </Box>
        </article>
    )
}

import { Avatar, Box, Typography, TypographyProps, styled } from '@mui/material'
import avatar from '../../../../assets/avatar.png'

const HeaderTitle = styled((props: TypographyProps) => (
    <Typography
        variant='h2'
        {...props} />
))({
    fontSize: 30
})

const UsernameLabel = styled((props: TypographyProps) => (
    <Typography
        variant='h4'
        {...props} />
))({
    fontSize: 18,
    fontWeight: '500',
    fontFamily: "'Poppins', sans-serif"
})

export const Header = () => {
    return (
        <header>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <HeaderTitle>Fitness App</HeaderTitle>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                    <Avatar src={avatar} />
                    <UsernameLabel>Hello, Brayan Henao</UsernameLabel>
                </Box>
            </Box>
        </header>
    )
}

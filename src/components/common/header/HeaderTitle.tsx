import { Typography, TypographyProps, styled } from "@mui/material";

export const HeaderTitle = styled((props: TypographyProps) => (
    <Typography
        variant='h2'
        {...props} />
))({
    fontSize: 30
})
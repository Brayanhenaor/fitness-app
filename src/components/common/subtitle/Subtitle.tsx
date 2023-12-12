import { Typography, TypographyProps, styled } from "@mui/material";

export const Subtitle = styled((props: TypographyProps) => (
    <Typography
        variant='subtitle1'
        {...props} />
))({
    fontSize: 19
})
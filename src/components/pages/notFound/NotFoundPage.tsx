import { Link } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';
import notFound from '../../../assets/404.svg'

export const NotFoundPage = () => {
    return (
        <Container
            component="main"
            maxWidth="sm"
            sx={{ textAlign: 'center', marginTop: '50px' }}
        >
            <Box>
                <img src={notFound} />
                <Typography variant="h5" color="textSecondary" paragraph>
                    Página no encontrada
                </Typography>
                <Typography variant="body1" paragraph>
                    Lo sentimos, la página que estás buscando no existe o ha sido eliminada.
                </Typography>
                <Button variant="outlined" component={Link} to="/" color="primary">
                    Regresar a la página principal
                </Button>
            </Box>
        </Container>
    )
}

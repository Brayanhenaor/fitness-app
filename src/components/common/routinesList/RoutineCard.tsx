import { Box, Grid, IconButton, styled } from '@mui/material'
import { Routine } from '../../../domain/types/routines';
import DeleteIcon from '@mui/icons-material/Delete';

const RoutineCardItem = styled(Box)({
    height: 500,
    width: '100%',
    backgroundColor: "#fdf0e4",
    padding: 15,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    cursor: 'pointer',
    transition: 'all 0.5s',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '1px 4px 12px #c9d3cb',

    }
})

const RoutineImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
});

const CardGradient = styled(Box)({
    background: 'linear-gradient(to bottom, transparent 0%, black 100%)',
    position: 'absolute',
    top: 0,
    opacity: 0.9,
    height: '100%',
    width: '100%'
});

export const RoutineCard = ({
    routine,
    handleDelete,
    handleOpen
}: {
    routine: Routine,
    handleDelete: (id: string) => void,
    handleOpen: (id: string) => void
}) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
        >
            <RoutineCardItem>
                <RoutineImage src="https://picsum.photos/700/400" alt={routine.name}
                />
                <CardGradient onClick={() => handleOpen(routine.id)} />
                <span style={{
                    fontFamily: 'Poppins',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: 40,
                    color: 'white'
                }}>{routine.name}</span>
                <IconButton
                    sx={{
                        position: 'absolute',
                        color: 'white',
                        top: 10,
                        right: 0,
                        zIndex: 10
                    }}
                    onClick={() => handleDelete(routine.id)}>
                    <DeleteIcon />
                </IconButton>
            </RoutineCardItem>
        </Grid>
    )
}

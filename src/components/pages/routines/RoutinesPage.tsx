import { useState } from 'react'
import { Box, Container, Grid, styled } from '@mui/material'
import { useAppSelector } from '../../../hooks/hooks'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { HeaderTitle } from '../../common/header/HeaderTitle';
import { AddRoutine } from './components/AddRoutine';
import { RoutinesList } from '../../common/routinesList/RoutinesList';

const FloatingButton = styled(Box)({
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#6c5b7b',
    borderRadius: "50%",
    padding: 5,
    cursor: 'pointer',
    transition: 'all 0.5s',
    zIndex: 1000,
    '&:hover': {
        transform: 'scale(1.1)',
        zIndex: 10000
    }
})


export const RoutinesPage = () => {
    const { routines } = useAppSelector(state => state.routines);
    
    const [openModalAdd, setOpenModalAdd] = useState(false)

    const handleOpenAdd = () => {
        setOpenModalAdd(true)
    }
    
    return (

        <Container>
            <Grid
                container
                justifyContent={'center'}
                sx={{
                    marginTop: 2
                }}>
                <Grid item xs={12}>
                    <HeaderTitle>
                        Rutinas
                    </HeaderTitle>
                </Grid>
                <RoutinesList
                    routines={routines}/>

                <FloatingButton
                    onClick={handleOpenAdd}>
                    <AddOutlinedIcon
                        sx={{
                            color: "white",
                            fontSize: 50
                        }} />
                </FloatingButton>
            </Grid>

            <AddRoutine
                open={openModalAdd}
                setOpenModalAdd={setOpenModalAdd} />
        </Container>
    )
}

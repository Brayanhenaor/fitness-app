import { Routine } from '../../../domain/types/routines'
import { RoutineCard } from './RoutineCard';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hooks';
import { removeRoutine } from '../../../slices/routinesSlice';
import { Grid } from '@mui/material';

interface Props {
    routines: Routine[];
}

export const RoutinesList = ({ routines }: Props) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const handleOpenRoutine = (id: string) => {
        navigate(`/routines/${id}`)
    }

    const handleDelete = (id: string) => {
        dispatch(removeRoutine(id))
    }
    return (
        <Grid container spacing={2}>
            {
                routines.map((routine) => ((
                    <RoutineCard
                        key={routine.id}
                        routine={routine}
                        handleOpen={handleOpenRoutine}
                        handleDelete={handleDelete} />
                )))
            }
        </Grid>
    )
}

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  IconButton,
  Divider,
  Avatar,
  Stack,
  styled,
  alpha,
  Box,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useAppSelector } from '../../../hooks/hooks';
import { Routine, Exercise } from '../../../domain/types/routines';
import { HeaderTitle } from '../../common/header/HeaderTitle';
import EditIcon from '@mui/icons-material/Edit';
import { EditRoutine } from './components/EditRoutine';

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: `0px 4px 8px ${alpha(theme.palette.common.black, 0.1)}`,
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: `0px 8px 16px ${alpha(theme.palette.common.black, 0.2)}`,
  },
  marginBottom: 10
}));

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <CustomCard>
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ color: '#1976D2' }}>
            {exercise.name}
          </Typography>
          <Avatar sx={{ backgroundColor: '#1976D2', color: '#fff' }}>
            <FitnessCenterIcon />
          </Avatar>
        </Stack>
        <Typography variant="body1" color="textSecondary" paragraph>
          Duración: {exercise.duration} minutos
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Tipo: {exercise.type}
        </Typography>
        <Typography variant="body2">{exercise.instructions}</Typography>
        {exercise.videoUrl && (
          <IconButton
            color="primary"
            onClick={() => window.open(exercise.videoUrl, '_blank')}
            sx={{ marginTop: 1 }}
          >
            <PlayCircleOutlineIcon />
          </IconButton>
        )}
      </CardContent>
    </CustomCard>
  );
};

export const RoutineDetailPage = () => {
  const [routine, setRoutine] = useState<Routine | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { routines } = useAppSelector((state) => state.routines);
  const [openModalAdd, setOpenModalAdd] = useState(false)

  useEffect(() => {
    const routineData = routines.find((r) => r.id === id) || null;
    if (routineData === null) {
      navigate('/404', {
        replace: true,
      });
      return;
    }
    setRoutine(routineData);
  }, [id, routines, navigate]);

  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      {routine && (
        <>
          <Box
            sx={{
              display: 'flex'
            }}>
            <HeaderTitle>{routine.name}</HeaderTitle>
            <IconButton onClick={() => {
              setOpenModalAdd(true)
            }}>
              <EditIcon />
            </IconButton>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <CustomCard>
                <CardContent>
                  <Typography variant="h6" color="textSecondary">
                    Detalles de la Rutina
                  </Typography>
                  <Divider sx={{ marginBottom: 2 }} />
                  <Typography variant="body1" paragraph>
                    Categoría: {routine.category}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Duración Total: {routine.exercises.reduce((total, exercise) => total + exercise.duration, 0)} minutos
                  </Typography>
                  <Button variant="outlined" sx={{ color: '#1976D2' }} onClick={() => navigate('/routines')}>
                    Regresar a las Rutinas
                  </Button>
                </CardContent>
              </CustomCard>
            </Grid>

            <Grid item xs={12} md={6}>
              {routine.exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </Grid>
          </Grid>
        </>
      )}
      <EditRoutine
        open={openModalAdd}
        current={routine as Routine}
        setOpenModalAdd={setOpenModalAdd} />
    </Container>
  );
};

export default RoutineDetailPage;

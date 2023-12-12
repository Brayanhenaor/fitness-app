import { Box, Button, Fab, Grid, Typography, styled } from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { Input } from '../../../common/input/Input';
import { SelectInput } from '../../../common/select/Select';
import { Subtitle } from '../../../common/subtitle/Subtitle';
import { Routine } from '../../../../domain/types/routines';
import { useAppDispatch } from '../../../../hooks/hooks';
import { addRoutine, editRoutine } from '../../../../slices/routinesSlice';
import uniqid from 'uniqid';
import AddIcon from '@mui/icons-material/Add';
import { exercices, routines } from '../../../../utils/categories';
import { useEffect } from 'react';

const ModalContainer = styled(Box)({
    backgroundColor: '#fffff7',
    color: '#171430',
    fontFamily: 'Poppins',
    width: '50vw',
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 34,
})

export const EditRoutine = ({
    open,
    current,
    setOpenModalAdd
}: {
    open: boolean,
    current: Routine,
    setOpenModalAdd: (open: boolean) => void
}
) => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, control, reset } = useForm<Routine>()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'exercises'
    });

    const onSubmit = (data: Routine) => {
        console.log('nueva data')
        console.log(data)
        dispatch(editRoutine(data))
        setOpenModalAdd(false)
        reset()
    }

    const addExercise = () => {
        append({
            id: '',
            name: '',
            duration: 0,
            instructions: '',
            videoUrl: '',
            type: 'Cardio'
        });
    };

    useEffect(() => {
        reset(current)
    }, [reset, current])


    return (
        <Modal
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: 15,
                    boxShadow: '2px 2px 10px #524835',
                    maxHeight: '80vh',
                    overflowY: 'scroll',
                },
                overlay: {
                    backgroundColor: '#802b2726',

                }
            }}
            isOpen={open}
            onRequestClose={() => setOpenModalAdd(false)}>
            <ModalContainer>
                <form onSubmit={handleSubmit(onSubmit)} style={{
                    width: '100%'
                }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography
                                variant='h4'>
                                Editar rutina
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Input
                                label="Nombre"
                                name="name"
                                register={register}
                            />
                        </Grid>

                        <Grid xs={12} md={6}>
                            <SelectInput
                                label="Categoria"
                                name="category"
                                register={register}
                                options={routines} />
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Input
                                label="Duracion total (min)"
                                name="totalDuration"
                                type='number'
                                register={register}
                            />
                        </Grid>

                        <Grid xs={12} container>
                            <Subtitle>
                                Ejercicios
                            </Subtitle>
                            <Box
                                sx={{
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.3)',
                                    cursor: 'pointer',
                                    marginLeft: 1
                                }}
                                onClick={addExercise}>
                                <AddIcon />
                            </Box>
                        </Grid>

                        {
                            fields.map((field, index) => (
                                <Grid container key={field.id} sx={{ margin: 1 }}>
                                    <Grid xs={12}>
                                        <Subtitle>
                                            Ejercicio {index + 1}
                                        </Subtitle>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Input
                                            label={`Nombre`}
                                            name={`exercises[${index}].name`}
                                            register={register}
                                        />
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <Input
                                            label={`Duración (min)`}
                                            name={`exercises[${index}].duration`}
                                            type="number"
                                            register={register}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <Input
                                            label={`Instrucciones`}
                                            name={`exercises[${index}].instructions`}
                                            register={register}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <Input
                                            label={`URL del video`}
                                            name={`exercises[${index}].videoUrl`}
                                            register={register}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <SelectInput
                                            label={`Tipo`}
                                            name={`exercises[${index}].type`}
                                            register={register}
                                            options={exercices}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <Button color='error' type="button" onClick={() => remove(index)}>
                                            Eliminar Ejercicio
                                        </Button>
                                    </Grid>
                                </Grid>
                            )
                            )
                        }


                        <Grid xs={12} container justifyContent={'center'}>
                            <Button variant="outlined" type='submit'>
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </ModalContainer>
        </Modal >
    )
}

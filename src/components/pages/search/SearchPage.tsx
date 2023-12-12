import { Button, Container, Grid } from '@mui/material'
import { useState } from 'react'
import { HeaderTitle } from '../../common/header/HeaderTitle'
import { SelectInput } from '../../common/select/Select'
import { useForm } from 'react-hook-form'
import { Input } from '../../common/input/Input'
import { Routine, RoutineCategory } from '../../../domain/types/routines'
import { useAppSelector } from '../../../hooks/hooks'
import { RoutinesList } from '../../common/routinesList/RoutinesList'
import { routines as routinesCategories } from '../../../utils/categories'

interface Form {
  category: RoutineCategory;
  name: string;
}
export const SearchPage = () => {
  const { register, handleSubmit } = useForm<Form>()
  const { routines } = useAppSelector(state => state.routines)
  const [filteredRoutines, setFilteredRoutines] = useState<Routine[]>(routines)

  const onSubmit = (data: Form) => {
    filter(data)
    console.log('filtro')
  }

  const filter = (data: Form) => {
    console.log(data)
    setFilteredRoutines(routines.filter(routine => (data.name != null && data.name !== "" &&
      routine.name.toLowerCase().includes(data.name.toLocaleLowerCase())) ||
      (data.category != null && data.category !== "" as RoutineCategory && routine.category === data.category)))
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sx={{
          marginTop: 2
        }}>
          <HeaderTitle>
            Buscar rutinas
          </HeaderTitle>
        </Grid>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: '100%'
          }}>

          <Grid item xs={12}>
            <SelectInput
              register={register}
              options={routinesCategories}
              label="Categoria"
              name="category" />
          </Grid>
          <Grid item xs={12}>
            <Input
              register={register}
              label="Nombre"
              name="name" />
          </Grid>

          <Grid item xs={12}>
            <Button type='submit' variant='contained'>Buscar</Button>
          </Grid>
        </form>

        <Grid item xs={12} >
          <RoutinesList
            routines={filteredRoutines} />
        </Grid>
      </Grid>
    </Container>
  )
}

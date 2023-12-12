import { Box, Container, Grid, Typography } from '@mui/material'
import { Header } from './components/Header'
import { Motivation } from './components/Motivation'
import { Stadictics } from './components/Stadictics'

export const HomePage = () => {
  return (
    <main>
      <Container>
        <Box sx={{
          marginBottom: 3,
          marginTop:2
        }}>
          <Header />
        </Box>
        <section>
          <Grid container>
            <Grid item xs={5}>
              <Motivation />
            </Grid>
            <Grid item xs={7}>
              <Stadictics />
            </Grid>
          </Grid>
        </section>
      </Container>
    </main>
  )
}

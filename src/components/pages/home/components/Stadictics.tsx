import { Box } from '@mui/material'
import shoes from '../../../../assets/shoes.svg'

export const Stadictics = () => {
  return (
    <article
      style={{
        flexBasis: '60%'
      }}>
      <Box
        sx={{
          backgroundColor: '#f2f2f2',
          borderRadius: 3,
          overflow: 'hidden',
          p: 1,
          display: 'flex',
          alignItems:'center',
          justifyContent: 'space-between'
        }}>
        <Box>
          Ffsfdsfsdfdsfkfjsd
        </Box>
        <Box>
          Ffsfdsfsdfdjkfjsd
        </Box>
        <Box>
          <img src={shoes} alt="" />
        </Box>
      </Box>
    </article>
  )
}

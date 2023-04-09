import './style.css'
import { Layout } from './Layout'
import { CardsContainer } from './Components/Cards/Reward/Cards.container.reward'
import { Stack, Typography } from '@mui/material'
import { ActionsContainer } from './Components/Actions'

function App() {
  return (
    <Layout>

      <Stack sx={{
        width: '40rem',
        height: '16rem',
        position: 'absolute',
        mt: 16,
        zIndex: 2000,
      }}>

        <CardsContainer />
        <ActionsContainer
          height="16.2rem"
          width="1rem"
        />

        <Typography color='#9d9d9d' sx={{ position: 'absolute', top: '-2rem', right: '.8rem' }}>
          Pressione <strong>espaço</strong> para sair
        </Typography>
      </Stack>
    </Layout >
  )
}

export default App

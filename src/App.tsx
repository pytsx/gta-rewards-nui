import './style.css'
import { Layout } from './Layout'
import { CardsContainer } from './Components/Cards/Reward/Cards.container.reward'
import { Stack } from '@mui/material'
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
      </Stack>
    </Layout >
  )
}

export default App

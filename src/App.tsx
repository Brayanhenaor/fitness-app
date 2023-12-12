import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { useEffect } from 'react'
import { useAppSelector } from './hooks/hooks'


function App() {
  const { routines } = useAppSelector(state => state.routines)
  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines))
  }, [routines])

  return (
    <AppRouter />
  )
}

export default App

import { AppRouter } from 'AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalAppStyles } from 'styles/Global.styled'
import { theme } from 'themes/Theme'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalAppStyles />
       <AppRouter />
      </BrowserRouter>
      </ThemeProvider>
      </QueryClientProvider>
  )
}

export default App

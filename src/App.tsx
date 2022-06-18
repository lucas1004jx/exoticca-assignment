import { AppRouter } from 'AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalAppStyles } from 'styles/Global.styled'
import { theme } from 'themes/Theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalAppStyles />
       <AppRouter />
      </BrowserRouter>
      </ThemeProvider>
  )
}

export default App

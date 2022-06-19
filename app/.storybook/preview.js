
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/Theme'
import { GlobalAppStyles } from 'styles/Global.styled'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const queryClient = new QueryClient()

export const decorators = [
  Story => (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={ theme }>
    <BrowserRouter>
      <GlobalAppStyles />
      <Story />
      </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
  ),
];

import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/Theme'
import { GlobalAppStyles } from 'styles/Global.styled'
import { QueryClient, QueryClientProvider } from 'react-query'

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
      <GlobalAppStyles />
      <Story />
    </ThemeProvider>
    </QueryClientProvider>
  ),
];
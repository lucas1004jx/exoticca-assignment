import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'themes/Theme'
import { Typography } from './Typography'

describe('Typography', () => {
  test('renders content', () => {
    const typographyProps = {
      children: 'This is some text',
      testId: 'typography-test-id'
    }
    const component = render(<ThemeProvider theme={theme}><Typography {...typographyProps} /></ThemeProvider>)
    const typography = component.getByTestId(typographyProps.testId)
    expect(typography).toHaveTextContent(typographyProps.children)
  })

  test('have style', () => {
    const typographyProps = {
      children: 'This is some text',
      testId: 'typography-test-id',
      gutterBottom: 1
    }
    const component = render(<ThemeProvider theme={theme}><Typography {...typographyProps} /></ThemeProvider>)
    const typography = component.getByTestId(typographyProps.testId)
    expect(typography).toHaveStyle('margin-bottom: 0.5rem')
  })
})

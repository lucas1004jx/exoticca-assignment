import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'themes/Theme'
import { Button } from './Button'

describe('Button', () => {
  test('renders content', () => {
    const buttonProps = {
      text: 'This is a button',
      testId: 'button-test-id'
    }
    const component = render(<ThemeProvider theme={theme}><Button {...buttonProps} /></ThemeProvider>)
    const button = component.getByTestId(buttonProps.testId)
    expect(button).toHaveTextContent(buttonProps.text)
  })

  test('click button', () => {
    const buttonProps = {
      text: 'This is a button',
      testId: 'button-test-id',
      onClick: jest.fn()
    }
    const component = render(<ThemeProvider theme={theme}><Button {...buttonProps} /></ThemeProvider>)
    const button = component.getByTestId(buttonProps.testId)
    fireEvent.click(button)
    expect(buttonProps.onClick).toHaveBeenCalled()
  })
})

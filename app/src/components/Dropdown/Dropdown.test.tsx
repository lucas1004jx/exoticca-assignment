import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'themes/Theme'
import { Dropdown } from './Dropdown'

describe('Button', () => {
  test('renders content', () => {
    const dropdownProps = {
      items: [],
      testId: 'dropdown-test-id',
      withicon: true
    }

    const component = render(<ThemeProvider theme={theme}><Dropdown {...dropdownProps} /></ThemeProvider>)
    const dropdown = component.getByTestId(dropdownProps.testId)
    const dropdownList = component.queryByTestId('dropdown-list')
    expect(dropdown).toBeInTheDocument()
    expect(dropdownList).not.toBeInTheDocument()
  })
})

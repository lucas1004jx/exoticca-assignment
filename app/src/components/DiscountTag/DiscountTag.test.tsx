import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'themes/Theme'
import { DiscountTag } from './DiscountTag'
import { Props } from './DiscountTag.model'

describe('Button', () => {
  test('renders content', () => {
    const props:Props = {
      testId: 'discountTage-test-id',
      discount: 10
    }
    const component = render(<ThemeProvider theme={theme}><DiscountTag {...props} /></ThemeProvider>)
    const button = component.getByTestId(props.testId!)
    expect(button).toHaveTextContent(String(props.discount))
  })
})

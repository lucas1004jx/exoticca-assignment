import {
  css,
  Theme,
  createGlobalStyle
} from 'styled-components'
import { normalize } from 'styled-normalize'

interface Props {
  theme: Theme
}
const GlobalStylesCss = css`
  html {
    font-size: ${({ theme }: Props) => theme.font.size.body};
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }: Props) => theme.palette.semantic.background.light};
    font-family: ${({ theme }: Props) => theme.font.family.main};
    font-size: inherit;
    font-weight: ${({ theme }: Props) => theme.font.weight.regular};
    color: ${({ theme }: Props) => theme.palette.semantic.text.base};
  }

  * {
    line-height: 1.5 ;
  }

`

export const GlobalAppStyles = createGlobalStyle`
  ${normalize}
  ${GlobalStylesCss}
`

import { Theme } from 'styled-components/macro'

export interface ComponentPropsBase {
  className?: string
  testId?: string
  children?: React.ReactNode
}

export interface StyledPropsBase {
  theme: Theme
}

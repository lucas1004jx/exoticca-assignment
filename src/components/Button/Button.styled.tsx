import styled, { ButtonSize, css, Theme } from 'styled-components'
import { getColor } from 'util/styles/styles'
import { StyledProps } from './Button.model'
import { withAlphaHex } from 'with-alpha-hex'
import { flexCenter } from 'util/styles'
import { SvgIcon } from 'components/SvgIcon'

export const getButtonPaddingBySize = (
  theme: Theme,
  size: ButtonSize | undefined = 'm'
) => {
  const spaces: Record<ButtonSize, number[]> = {
    s: [1, 3],
    m: [1.5, 3.5],
    l: [1.8, 4],
    xl: [2, 4.5]
  }

  const space = spaces[size]

  return theme.spacing(...space)
}

export const StyledButton = styled.button<StyledProps>`
 cursor: pointer;
 padding:${({ theme, size }:StyledProps) => getButtonPaddingBySize(theme, size)};
 border:none;
 border-radius:${({ theme }) => theme.borderRadius.xs};
 ${flexCenter()}
 &:hover {
    box-shadow: inset 0px 250px 0px ${({ theme }:StyledProps) => withAlphaHex(theme.palette.semantic.shadow.base, 0.3)};
  };

  ${({ theme, variant, color }:StyledProps) => variant === 'contained' && css`
  color: ${theme.palette.semantic.text.light};
  background-color: ${color ? getColor(theme, color) : theme.palette.brand.primary.base};
`}

  ${({ theme, variant, color }:StyledProps) => variant === 'outlined' && css`
    color: ${color ? getColor(theme, color) : theme.palette.semantic.text.base};
    background:transparent;
    border: 1px solid currentColor;
  `}

  ${({ theme, variant, color }:StyledProps) => variant === 'text' && css`
  color: ${color ? getColor(theme, color) : theme.palette.semantic.text.base};
  background:transparent;
`}
`

export const StyledIcon = styled(SvgIcon)`
  margin-left: ${({ theme }) => theme.spacing(0.5)};
`

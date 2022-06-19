import styled from 'styled-components'
import { calcRem } from 'util/styles/styles'
import { StyledProps } from './Input.model'
import { withAlphaHex } from 'with-alpha-hex'

export const StyledInputContainer = styled.div<StyledProps>`
  position: relative;
  z-index: 0;
  width:100%;
  display: flex;
  align-items: center;
  padding: ${({ theme }:StyledProps) => theme.spacing(0, 2)};
  height:${calcRem(36)} ;
`
export const StyledInput = styled.input<StyledProps>`
  width:100%;
  height: 100%;
  outline: 0;
  border: 0;
  background: none;
`

export const StyledBorder = styled.div<StyledProps>`
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index: -1;
  background: ${({ theme }:StyledProps) => theme.palette.semantic.background.light};
  border-radius: ${({ theme }:StyledProps) => theme.borderRadius.xs};
  pointer-events: none;
  border:2px solid ${({ theme }: StyledProps) => theme.palette.semantic.border.dark && withAlphaHex(theme.palette.semantic.border.dark, 0.3)};
`

export const StyledEndIcon = styled.div<StyledProps>`
  display:flex ;
  align-items:center ;
  gap: ${({ theme }:StyledProps) => theme.spacing(1)};
  cursor: pointer;
  background:${({ theme }:StyledProps) => theme.palette.semantic.background.dark} ;
  height:calc(100% - ${calcRem(4)});
  margin-right:${calcRem(-14)};
  padding:${({ theme }:StyledProps) => theme.spacing(0, 2)};
  white-space: nowrap;
`

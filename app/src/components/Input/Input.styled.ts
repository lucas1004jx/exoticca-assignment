import styled from 'styled-components'
import { calcRem } from 'util/styles/styles'
import { StyledProps } from './Input.model'

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
`

export const StyledEndIcon = styled.div<StyledProps>`
  display:flex ;
  height:100% ;
  align-items:center ;
  gap: ${({ theme }:StyledProps) => theme.spacing(1)};
  cursor: pointer;
  color:${({ theme }:StyledProps) => theme.palette.semantic.text.light};
  background:${({ theme }:StyledProps) => theme.palette.brand.primary.base};
  margin-right:${({ theme }:StyledProps) => theme.spacing(-2)};
  padding:${({ theme }:StyledProps) => theme.spacing(0, 2)};
  white-space: nowrap;
`

import { SvgIcon } from 'components/SvgIcon'
import styled from 'styled-components'
import { getColor } from 'util/styles'
import { StyledProps } from './Tag.model'

export const StyledTag = styled.div<StyledProps>`
background:${({ theme, backgroundColor = 'background', backgroundColorShade = 'base' }:StyledProps) => getColor(theme, backgroundColor, backgroundColorShade)};
border-radius:${({ theme }:StyledProps) => theme.borderRadius.xs};
display:inline-flex ;
align-items:center;
justify-content:center ;
gap:${({ theme }:StyledProps) => theme.spacing(0.5)};
padding:${({ theme }:StyledProps) => theme.spacing(1)} ;
`

export const StyledIcon = styled(SvgIcon)<StyledProps>`
cursor: pointer;
`

import * as CSS from 'csstype'
import { css, Theme } from 'styled-components'

export const gap = (spacing = 1) => css` gap:${({ theme }: {theme: Theme}) => theme.spacing(spacing)};`

export const flex = (dir: CSS.Property.FlexDirection = 'row', spacing = 1) => css`
    display:flex;
    flex-direction: ${dir};
   ${gap(spacing)}
`
export const flexCenter = (dir: CSS.Property.FlexDirection = 'row', spacing = 1) => css`
    ${flex(dir, spacing)}
    justify-content: center;
    align-items: center;  
`

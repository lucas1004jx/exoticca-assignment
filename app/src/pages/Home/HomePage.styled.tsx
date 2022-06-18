import { StyledPropsBase } from 'model/propsBase'
import styled from 'styled-components'
import { flex } from 'util/styles'

export const StyledHomePageWrapper = styled.div<StyledPropsBase>`
    padding: ${({ theme }) => theme.spacing(0, 2)};
`

export const StyledCaruselHeader = styled.div`
    ${flex()}
`

export const StyledCaruselButtonSection = styled.div`
    flex-shrink:0;
`

import { StyledPropsBase } from 'model/propsBase'
import styled from 'styled-components'
import { calcRem, flex, flexCenter } from 'util/styles'
import bcg from 'assets/images/barcelona.jpg'
import { Dropdown } from 'components/Dropdown'

export const StyledHomePageWrapper = styled.div<StyledPropsBase>`
    padding: ${({ theme }) => theme.spacing(0, 2)};
`

export const StyledCaruselHeader = styled.div`
    ${flex()}
`

export const StyledCaruselButtonSection = styled.div`
    flex-shrink:0;
`

export const StyledHeroImgWrapper = styled.div<StyledPropsBase>`
    height:${calcRem(350)};
    background: url(${bcg}) no-repeat center center;
    background-size:cover ;
    margin: ${({ theme }:StyledPropsBase) => theme.spacing(0, -2, 5, -2)};
    ${flexCenter()}
`

export const StyledDropdown = styled(Dropdown)`
    width:${calcRem(450)} ;

`

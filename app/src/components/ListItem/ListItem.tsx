import { FC } from 'react'
import { StyledListItemContainer } from './ListItem.styled'
import { Props } from './ListItem.model'

export const ListItem: FC<Props> = ({
  children,
  testId,
  ...props
}) => {
  return (
    <StyledListItemContainer
    {...props}
    data-testid={testId}
    >
     {children}
    </StyledListItemContainer>
  )
}

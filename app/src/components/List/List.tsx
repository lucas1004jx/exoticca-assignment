import { ListItem } from 'components/ListItem'
import { FC } from 'react'
import { Props } from './List.model'
import { StyledDropdownListWrapper, StyledListContainer } from './List.styled'
import { Option } from 'model/common'

export const List:FC<Props> = ({
  testId,
  className,
  items,
  onSelect,
  separator = true
}) => {
  const handleSelect = (option: Option): void => {
    onSelect?.(option)
  }

  return (
    <StyledDropdownListWrapper data-testid={testId} className={className}>
     <StyledListContainer separator={separator}>
      {
       items.length !== 0
         ? items.map(({ id, name }) =>
        <ListItem
        key={id}
        onClick={() => handleSelect({ id, name })}
        >
          {name}
        </ListItem>
         )
         : <ListItem>No items</ListItem>
      }
    </StyledListContainer>
    </StyledDropdownListWrapper>
  )
}

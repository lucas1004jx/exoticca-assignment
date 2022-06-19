
import { Input } from 'components/Input'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { Option } from 'model/common'
import { FC, useEffect, useRef, useState } from 'react'
import { isMatch } from 'util/functions/isMatch'
import { Props } from './Dropdown.model'
import { StyledDropdownInputArea, StyledDropDownList, StyledDropdownWrapper } from './Dropdown.styled'

export const Dropdown:FC<Props> = ({
  className,
  testId,
  items,
  defaultSelectedOption,
  listOption = {},
  iconDescription,
  withIcon = true,
  onInputChange,
  onSetSelectedItem,
  ...inputProps
}) => {
  const [dropdownListOpen, setDropdownListOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Option>()
  const [searchValue, setSearchValue] = useState('')

  const selectRef = useRef(null)

  const toggleDropDownList = () => {
    setDropdownListOpen(open => !open)
  }

  const openDropDownList = () => setDropdownListOpen(true)
  const closeDropDownList = () => setDropdownListOpen(false)

  useOnClickOutside(selectRef, closeDropDownList)

  useEffect(() => {
    setSelectedItem(defaultSelectedOption)
    onSetSelectedItem?.(defaultSelectedOption)
  }, [defaultSelectedOption?.id])

  useEffect(() => {
    onSetSelectedItem?.(selectedItem)
  }, [selectedItem?.id])

  useEffect(() => {
    if (searchValue && searchValue !== '') {
      openDropDownList()
    } else {
      closeDropDownList()
    }
  }, [searchValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setSearchValue(value)
    onInputChange?.(value)
  }

  const handleSelect = (option: Option): void => {
    setSelectedItem(option)
    closeDropDownList()
  }

  const filteredItems = (searchValue && searchValue !== '')
    ? items.filter((option) => isMatch(searchValue, option.name))
    : items

  return (
      <StyledDropdownWrapper data-testid={testId} ref={selectRef} className={className}>
      <StyledDropdownInputArea>
        <Input
          {...inputProps}
          onChange={handleChange}
          defaultValue={selectedItem?.name}
          type='search'
          endIcon={withIcon
            ? {
                name: 'arrowDown',
                description: iconDescription,
                actionHandler: toggleDropDownList
              }
            : undefined

          }
        />
      </StyledDropdownInputArea>

      {dropdownListOpen && (
        <StyledDropDownList
          items={filteredItems}
          onSelect={handleSelect}
          keyword={searchValue}
          listOption={listOption}
          testId='dropdown-list'
          />
      )}

    </StyledDropdownWrapper>
  )
}

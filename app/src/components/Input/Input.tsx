import { SvgIcon } from 'components/SvgIcon'
import { Typography } from 'components/Typography'
import {
  useState,
  useEffect,
  FC
} from 'react'
import { Props } from './Input.model'
import {
  StyledBorder,
  StyledEndIcon,
  StyledInput,
  StyledInputContainer
} from './Input.styled'

export const Input:FC<Props> = ({
  className = '',
  id,
  placeholder = 'Placeholder',
  onChange,
  testId,
  value = '',
  defaultValue,
  endIcon,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(defaultValue ?? value)

  useEffect(() => {
    setInputValue(defaultValue ?? value)
  }, [defaultValue, value])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setInputValue(newValue)
    onChange?.(e)
  }

  return (
    <StyledInputContainer className={className}>
      <StyledInput
        {...otherProps}
        data-testid={`${testId}-input`}
        id={id}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
       {endIcon && (
        <StyledEndIcon onClick={endIcon.actionHandler} data-testid='end-icon-button'>
          {endIcon.description && <Typography>{endIcon.description}</Typography>}
          <SvgIcon icon={endIcon.name} color={endIcon.color} />
        </StyledEndIcon>
       )}
      <StyledBorder />
    </StyledInputContainer>
  )
}

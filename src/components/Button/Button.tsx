import { SvgIcon } from 'components/SvgIcon'
import { Typography } from 'components/Typography'
import { MouseEventHandler } from 'react'
import { ButtonSize, TypographyVariant } from 'styled-components'
import { Props } from './Button.model'
import { StyledButton } from './Button.styled'

export const Button: React.FC<Props> = ({
  children,
  size = 'm',
  variant = 'contained',
  testId,
  disabled,
  type = 'button',
  text,
  startIcon,
  endIcon,
  onClick,
  ...otherProps
}) => {
  const buttonSizeToFontSize:Record<ButtonSize, TypographyVariant> = {
    s: 'bodyS',
    m: 'body',
    l: 'bodyL',
    xl: 'bodyL'
  }
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    onClick?.(e)
  }

  return (
      <StyledButton
        {...otherProps}
        size={size}
        variant={variant}
        data-testid={testId}
        disabled={disabled}
        type={type}
        onClick={handleOnClick}
      >
         {startIcon && (
          <SvgIcon icon={startIcon} />
         )}
        <Typography
        variant={buttonSizeToFontSize[size]}
        >
          {text}
        </Typography>
        {endIcon && (
          <SvgIcon icon={endIcon} />
        )}
      </StyledButton>
  )
}

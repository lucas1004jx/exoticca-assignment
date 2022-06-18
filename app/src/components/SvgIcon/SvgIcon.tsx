import { FC } from 'react'
import { icons } from './icons'
import { Props } from './SvgIcon.model'
import { StyledIconWrapper } from './SvgIcon.styled'

export const SvgIcon:FC<Props> = ({
  icon,
  className,
  testId,
  color,
  colorShade = 'base',
  size = 's',
  ...props
}) => {
  const IconComponent = icons[icon]

  return (
    <StyledIconWrapper
     className={className}
      data-testid={testId}
       color={color}
       colorShade={colorShade}
       size={size}
       >
    <IconComponent {...props}/>
  </StyledIconWrapper>)
}

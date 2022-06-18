import { Typography } from 'components/Typography'
import { FC } from 'react'
import { Props } from './Tag.model'
import { StyledTag } from './Tag.styled'

export const Tag:FC<Props> = ({
  children,
  testId,
  color = 'highlight',
  colorShade,
  ...props
}) => {
  return (
      <StyledTag data-testid={testId} {...props}>
    <Typography color={color} colorShade={colorShade} fontWeight='bold'>
        {children}
    </Typography>
    </StyledTag>
  )
}

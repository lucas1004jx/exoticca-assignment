import { FC } from 'react'
import { StyledTypographyContainer } from './Typography.styled'
import { Props } from './Typography.model'
import { TypographyVariant } from 'styled-components'

const getTagByVariant = (variant: TypographyVariant) => {
  const tags: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    bodyL: 'p',
    body: 'p',
    bodyS: 'span',
    bodyXS: 'span'
  }

  return tags[variant]
}

export const Typography: FC<Props> = ({
  className = '',
  children,
  variant = 'body',
  align = 'left',
  gutterBottom = 0,
  testId,
  ...props
}) => {
  const tag = getTagByVariant(variant)

  return (
    <StyledTypographyContainer
      className={className}
      data-testid={testId}
      variant={variant}
      align={align}
      gutterBottom={gutterBottom}
      as={tag}
      {...props}
    >
      {children}
    </StyledTypographyContainer>
  )
}

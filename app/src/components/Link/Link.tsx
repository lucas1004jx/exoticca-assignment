import { FC } from 'react'
import { Props } from './Link.model'
import { StyledLink } from './Link.styled'

export const Link: FC<Props> = ({
  className = '',
  testId,
  children,
  underline = true,
  newTab,
  ...linkProps
}) => {
  return (
      <StyledLink
        $underline={underline}
        className={className}
        data-testid={testId}
        target={newTab ? '_blank' : undefined}
        {...linkProps}
      >
        {children}
      </StyledLink>
  )
}

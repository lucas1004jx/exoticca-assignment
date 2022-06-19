import { FC } from 'react'
import { StyledMark } from './Highlighted.styled'
import { Props } from './Highlighted.model'
import { Typography } from 'components/Typography'

export const Highlighted: FC<Props> = ({ text = '', highlight = '', testId, ...props }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>
  }
  const regex = new RegExp(`(${highlight})`, 'gi')
  const textArray: string[] = text.split(regex)

  return (
    <Typography {...props}>
      {textArray.filter(part => part)
        .map((part, i) => regex.test(part)
          ? <StyledMark key={i} data-testid={testId}>{part}</StyledMark>
          : <span key={i}>{part}</span>)}
    </Typography>
  )
}

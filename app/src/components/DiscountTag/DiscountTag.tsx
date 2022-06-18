import { FC } from 'react'
import { Props } from './DiscountTag.model'
import { Tag } from 'components/Tag'
import { displayPercentage } from 'util/functions/displayUnit'

export const DiscountTag: FC<Props> = ({
  className = '',
  testId,
  discount = 0
}) => {
  return (
    <Tag className={className} data-testid={testId}>
     {`-${displayPercentage(discount)}`}
    </Tag>
  )
}

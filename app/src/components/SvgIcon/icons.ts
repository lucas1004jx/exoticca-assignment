
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg'
import { ReactComponent as ArrowRightIcon2 } from 'assets/icons/arrow-right-2.svg'
import { ElementType } from 'react'

import { IconName } from './SvgIcon.model'

export const icons: Record<IconName, ElementType > = {
  arrowRight: ArrowRightIcon,
  arrowRight2: ArrowRightIcon2
}

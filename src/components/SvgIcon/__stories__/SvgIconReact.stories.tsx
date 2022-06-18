import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { icons } from '../icons'
import { SvgIcon } from '../SvgIcon'
import { IconName } from '../SvgIcon.model'

export default {
  title: 'Components/Icons',
  component: SvgIcon,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'text'],
      control: { type: 'radio' }
    },
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof SvgIcon>

export const Template: ComponentStory<typeof SvgIcon> = args => {
  return (
        <div>
            {
                (Object.keys(icons) as IconName[]).map(icon => <SvgIcon key={icon} {...args} icon={icon}/>)
            }
        </div>
  )
}

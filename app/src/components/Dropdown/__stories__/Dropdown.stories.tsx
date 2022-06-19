import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { Dropdown } from '../Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const items = [
  {
    id: '1',
    name: 'item 1'
  },
  {
    id: '2',
    name: 'item 2'
  },
  {
    id: '3',
    name: 'item 3'
  },
  {
    id: '4',
    name: 'item 4'
  }
]

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} placeholder='Dropdown placeholder' />

export const Default = Template.bind({})

Default.args = {
  items
}

export const WithIconDescription = Template.bind({})

WithIconDescription.args = {
  items,
  iconDescription: 'Icon description'
}

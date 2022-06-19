import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { ListItem } from '../ListItem'

export default {
  title: 'Components/ListItem',
  component: ListItem
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = args => <ListItem {...args}>list item</ListItem>

export const Base = Template.bind({})

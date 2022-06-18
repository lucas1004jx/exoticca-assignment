import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { Tag } from '../Tag'

export default {
  title: 'Components/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args}>Tag</Tag>

export const Base = Template.bind({})

Base.args = {
  color: 'highlight',
  backgroundColor: 'background'
}

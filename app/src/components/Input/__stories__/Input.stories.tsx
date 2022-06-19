import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { Input } from 'components/Input'

export default {
  title: 'Components/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} name='input-name' id='input-id' />

export const Default = Template.bind({})

export const WithEndIcon = Template.bind({})

WithEndIcon.args = {
  endIcon: {
    name: 'arrowDown',
    description: 'Select market'
  }
}

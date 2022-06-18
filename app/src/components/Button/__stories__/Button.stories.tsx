import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { Button } from 'components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
      defaultValue: 'contained'
    },
    size: {
      options: ['s', 'm', 'l', 'xl'],
      control: { type: 'radio' },
      defaultValue: 'm'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  text: 'Default Button'
}

export const WithEndIcon = Template.bind({})

WithEndIcon.args = {
  text: 'Button',
  endIcon: 'arrowRight'
}

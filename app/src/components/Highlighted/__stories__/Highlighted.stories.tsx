import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { Highlighted } from '../Highlighted'

export default {
  title: 'Components/Highlighted',
  component: Highlighted
} as ComponentMeta<typeof Highlighted>

const Template: ComponentStory<typeof Highlighted> = args => <Highlighted {...args} />

export const Base = Template.bind({})

Base.args = {
  text: '123787sd309424hj',
  highlight: '7sd'
}

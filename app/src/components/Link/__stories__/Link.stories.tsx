import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react'
import { Link } from 'components/Link'

export default {
  title: 'Components/Link',
  component: Link
} as ComponentMeta<typeof Link>

export const Base: ComponentStory<typeof Link> = args => (
  <Link {...args}>
    link text
  </Link>
)

Base.args = { to: '/' }

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card } from 'components/Card'

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Base = Template.bind({})

Base.args = {
  imgSrc: 'https://d24l7zeiclq6su.cloudfront.net/img/p/13319/c284051.jpg',
  testId: '123'
}

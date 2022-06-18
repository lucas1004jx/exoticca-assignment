import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Carousel } from 'components/Carousel'

export default {
  title: 'Components/Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>

export const Template: ComponentStory<typeof Carousel> = args => <Carousel {...args} />

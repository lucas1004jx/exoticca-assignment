import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DiscountTag } from 'components/DiscountTag'

export default {
  title: 'Components/DiscountTag',
  component: DiscountTag
} as ComponentMeta<typeof DiscountTag>

export const Base: ComponentStory<typeof DiscountTag> = args => <DiscountTag {...args} />

Base.args = {
  discount: 55
}

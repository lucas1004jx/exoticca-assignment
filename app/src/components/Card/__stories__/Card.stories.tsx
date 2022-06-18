import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card } from 'components/Card'
import { DiscountTag } from 'components/DiscountTag'

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const WithDiscount = Template.bind({})

WithDiscount.args = {
  imgAreaProps: {
    imgSrc: 'https://d24l7zeiclq6su.cloudfront.net/img/p/13319/c284051.jpg',
    tagComponent: <DiscountTag discount={55} />,
    imgTitle: 'Costa Rica, Guatemala & Mexico',
    imgDescription: '17 days'
  },
  textAreaProps: {
    description: 'Secrets of Central America & Riviera Maya',
    originalPrice: 5399,
    discountedPrice: 3199
  }
}

export const WithoutDiscount = Template.bind({})

WithoutDiscount.args = {
  imgAreaProps: {
    imgSrc: 'https://d24l7zeiclq6su.cloudfront.net/img/p/13319/c284051.jpg',
    imgTitle: 'Costa Rica, Guatemala & Mexico',
    imgDescription: '17 days'
  },
  textAreaProps: {
    description: 'Secrets of Central America & Riviera Maya',
    originalPrice: 5399
  }
}

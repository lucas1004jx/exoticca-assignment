import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card } from 'components/Card'

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const WithDiscount = Template.bind({})

WithDiscount.args = {
  imgAreaProps: {
    imgSrc: 'https://d19lhji18zvyho.cloudfront.net/img/p/12438/c266991.jpg',
    imgTitle: 'French Polynesia',
    imgDescription: '10 days',
    discountPercentage: 10
  },
  textAreaProps: {
    description: 'Enchanting Tahiti & Magical Moorea',
    originalPrice: 3999,
    discountedPrice: 2999
  }
}

export const WithoutDiscount = Template.bind({})

WithoutDiscount.args = {
  imgAreaProps: {
    imgSrc: 'https://d24l7zeiclq6su.cloudfront.net/img/p/13319/c284051.jpg',
    imgTitle: 'Costa Rica, Guatemala & Mexico',
    imgDescription: '17 days',
    discountPercentage: 0
  },
  textAreaProps: {
    description: 'Secrets of Central America & Riviera Maya',
    originalPrice: 5399,
    discountedPrice: 5399
  }
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Typography } from 'components/Typography'
import { TypographyVariant } from 'styled-components'

export default {
  title: 'Components/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>

const variantes: Record<TypographyVariant, string> = {
  header: '48px',
  h1: '32px',
  h2: '28px',
  h3: '26px',
  h4: '22px',
  h5: '20px',
  h6: '18px',
  bodyL: '18px',
  body: '16px',
  bodyS: '14px',
  bodyXS: '12px'
}

export const Base: ComponentStory<typeof Typography> = args => {
  const varianteArray = Object.keys(variantes) as TypographyVariant[]

  return (
    <>
      {varianteArray.map((variant) => (
        <div key={variant}>
          <Typography {...args} variant={variant}>
            {`${variant}: ${variantes[variant]}`}
          </Typography>
        </div>
      ))}
    </>
  )
}

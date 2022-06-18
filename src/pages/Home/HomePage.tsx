import { Carousel } from 'components/Carousel'
import { FC } from 'react'
import { Cards } from 'components/Carousel/__stories__/data'

export const HomePage:FC = () => {
  return (
        <div>
            <Carousel cards={Cards}/>
        </div>
  )
}

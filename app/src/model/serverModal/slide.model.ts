import { Card } from './card.model'

export interface Slide {
    name: string
    description: string
    slug:string
    type: string
    title: string
    icon: string
    background: string
    cards: Card[]
}

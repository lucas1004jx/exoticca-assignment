import { Hero } from './hero.model'
import { Slide } from './slide.model'
import { TopSales } from './topSales.model'

export interface Product {
    hero: Hero
    slides:Slide[]
    topSales:TopSales
}

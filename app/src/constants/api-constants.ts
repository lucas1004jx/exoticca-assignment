import { ApiParams } from 'model/common'
import { Product } from 'model/serverModal/product.model'

export const BASE_URL = ' http://localhost:3001'

export const ES_MARKET:ApiParams<Product> = {
  queryKey: 'esMarket',
  url: '/products/es'
}

export const UK_MARKET:ApiParams<Product> = {
  queryKey: 'ukMarket',
  url: '/products/uk'
}

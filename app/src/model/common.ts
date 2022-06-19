import { UseQueryOptions } from 'react-query'

export interface ApiParams<Data = unknown>{
  queryKey:string
  url:string
  options?:Omit<UseQueryOptions<Data>, 'queryKey' | 'queryFn'>
}
export interface Option {
    id: string
    name: string
}

export interface ListOption {
  separator?: boolean
}

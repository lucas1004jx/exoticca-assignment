
import axios from 'axios'
import { useQuery } from 'react-query'

const fetcher = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error: any) {
    console.error('Error', error.message)
    throw error.toJSON()
  }
}

export const useReactQuery = <Data>(queryName:string, url:string) => {
  const queryResults = useQuery<Data>(queryName, () => fetcher(url))
  return queryResults
}

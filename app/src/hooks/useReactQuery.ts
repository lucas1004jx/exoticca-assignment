
import axios from 'axios'
import { BASE_URL } from 'constants/api-constants'
import { ApiParams } from 'model/common'
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

export const useReactQuery = <Data>({ queryKey, url, options }:ApiParams<Data>) => {
  const completedUrl = `${BASE_URL}${url}`
  const queryResults = useQuery<Data>(queryKey, () => fetcher(completedUrl), options)
  return queryResults
}

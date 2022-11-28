import { useState, useEffect } from 'react'
import { SliderProps } from '@components/atoms/Slider/Slider'
import { helpHttp } from 'helpers/helpHttp'
import { API_URL } from 'services/endpoint'

const api = helpHttp()

const useFetch = (url: string) => {
  const [data, setData] = useState<SliderProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState<Boolean | null>(false)

  useEffect(() => {
    setIsLoading(true)
    api.get(`${API_URL}/${url}`).then((res) => {
      if (!res.err) {
        setData(res)
        setShowError(null)
      } else {
        setData([])
        setShowError(true)
      }
      setIsLoading(false)
    })
  }, [url])

  return { data, isLoading, showError }
}

export default useFetch

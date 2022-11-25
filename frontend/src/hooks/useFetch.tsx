import { useState, useEffect } from 'react'
import { SliderProps } from '@components/atoms/Slider/Slider'
import { shirtService } from 'services/shirtService'

const useFetch = () => {
  const [data, setData] = useState<SliderProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await shirtService()
      setData(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading }
}

export default useFetch

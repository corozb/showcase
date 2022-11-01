import { useState, useEffect } from 'react'

import Slider, { SliderProps } from 'components/atoms/Slider/Slider'
import { shirtService } from 'services/shirtService'

function Carousel() {
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

  return (
    <>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        data.map((item) => <Slider key={item.id} image={item.image} category={item.category} />)
      )}
    </>
  )
}

export default Carousel

import { useState, useEffect } from 'react'

// Components
import Slider, { SliderProps } from 'components/atoms/Slider/Slider'
import { shirtService } from 'services/shirtService'
import Arrows from 'components/atoms/Arrows/Arrows'
import './Carousel.scss'

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

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === data.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(data.length)
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
        <section className='slider_container'>
          <>
            {data.map((item, index) => {
              const isActive = slideIndex === index + 1

              return <Slider isActive={isActive} key={item.id} image={item.image} category={item.category} />
            })}
            <Arrows moveSlide={prevSlide} />
            <Arrows direction='next' moveSlide={nextSlide} />
          </>
        </section>
      )}
    </>
  )
}

export default Carousel

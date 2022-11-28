import { useState } from 'react'

// Components
import Slider from 'components/atoms/Slider/Slider'
import Arrows from 'components/atoms/Arrows/Arrows'
import './Carousel.scss'
import useFetch from 'hooks/useFetch'
import Loader from 'components/atoms/Loader/Loader'

interface CarouselProp {
  garment: string
}

function Carousel({ garment }: CarouselProp) {
  const { data, isLoading } = useFetch(garment)
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== data?.length) {
      setSlideIndex((prevState) => prevState + 1)
    } else if (slideIndex === data.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(data!.length)
    }
  }

  if (isLoading) {
    return <Loader />
  }
  console.log(data)

  return (
    <>
      <section className='slider_container'>
        {data.length > 0 ? (
          <>
            {data?.map((item, index) => {
              const isActive = slideIndex === index + 1

              return <Slider isActive={isActive} key={item.id} image={item.image} category={item.category} />
            })}
            <Arrows moveSlide={prevSlide} />
            <Arrows direction='next' moveSlide={nextSlide} />
          </>
        ) : (
          <h1 className='slide__no-data'>No data</h1>
        )}
      </section>
    </>
  )
}

export default Carousel

import { useMemo } from 'react'
import classNames from 'classnames'
export interface SliderProps {
  id?: number
  category: string
  image: string
  isActive?: boolean
}

const Slider = (item: SliderProps) => {
  const { category, image, isActive } = item

  const classNameSlider = useMemo(
    () =>
      classNames('slide', {
        'active-anim': isActive,
      }),
    [isActive]
  )

  return (
    <section className={classNameSlider}>
      <img src={image} alt={category} />
    </section>
  )
}

export default Slider

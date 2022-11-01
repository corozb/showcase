import './Slider.scss'

export interface SliderProps {
  id?: number
  category: string
  image: string
}

const Slider = (item: SliderProps) => {
  const { category, image } = item
  return <section className='slider'>{<img src={image} alt={category} />}</section>
}

export default Slider

import Carousel from 'components/molecules/Carousel'
import './App.scss'

function App() {
  return (
    <div className='app__container'>
      <Carousel garment='shirt' />
      <Carousel garment='pants' />
      <Carousel garment='shoes' />
    </div>
  )
}

export default App

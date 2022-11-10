interface ArrowProps {
  direction?: string
  moveSlide: () => void
}

function Arrows({ direction, moveSlide }: ArrowProps) {
  return (
    <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      <span>{direction === 'next' ? '❱' : '❰'}</span>
    </button>
  )
}

export default Arrows

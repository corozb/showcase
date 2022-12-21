import { useEffect, useState } from 'react'
import Carousel from 'components/molecules/Carousel'
import './App.scss'

function App() {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false)
  const [eventState, setEventState] = useState<any>()

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault()
      console.log('👍', 'beforeinstallprompt', event)
      // Stash the event so it can be triggered later.
      // window.deferredPrompt = event
      setEventState(event)
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true)
    })
  }, [])

  async function downloadApp() {
    console.log('👍', 'butInstall-clicked')
    // const promptEvent = window.deferredPrompt;
    if (!eventState) {
      // The deferred prompt isn't available.
      console.log('oops, no prompt event guardado en window')
      return
    }
    // Show the install prompt.
    eventState.prompt()
    // Log the result
    const result = await eventState.userChoice
    console.log('👍', 'userChoice', result)
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    // window.deferredPrompt = null;
    setEventState(null)
    // Hide the install button.
    setIsReadyForInstall(false)
  }

  return (
    <div className='app__container'>
      {isReadyForInstall && <button onClick={downloadApp}>Download</button>}
      <Carousel garment='shirt' />
      <Carousel garment='pants' />
      <Carousel garment='shoes' />
    </div>
  )
}

export default App

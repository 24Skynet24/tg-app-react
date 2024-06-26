import {useEffect} from "react";

// @ts-ignore
const tg = window.Telegram.WebApp

function App() {
    useEffect(() => {
        tg.ready()
    }, [])

    const handleClose = () => {
        tg.close()
    }

  return (
    <>
        <button onClick={handleClose}>
            Close
        </button>
    </>
  )
}

export default App

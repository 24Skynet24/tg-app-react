import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/index";
import DefaultButton from "./UI/DefaultButton/index";


function App() {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [])

  return (
    <>
        <Header/>
        <DefaultButton onClick={onToggleButton()}/>
    </>
  )
}

export default App

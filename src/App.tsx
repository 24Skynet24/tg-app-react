import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/index";
import MenCmp from "./components/MenCmp/index";


function App() {
    const {tg} = useTelegram()
    useEffect(() => { tg.ready() }, [])

  return (
    <>
        <Header/>
        <main>
            <MenCmp/>
        </main>
    </>
  )
}

export default App

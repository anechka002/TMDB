import s from './App.module.css'
import {Footer, Header} from "@/widgets";
import {Routing} from "@/app/routing";
import {ToastContainer} from "react-toastify";
import {LinearProgress} from "@/shared";
import {
  useGlobalLoading,
  useSyncFavoritesWithStorage,
  useTheme
} from "@/shared/hooks";

function App() {
  const isGlobalLoading = useGlobalLoading()

  useSyncFavoritesWithStorage()
  useTheme()

  return (
    <div className={s.app}>
      <Header />
      {isGlobalLoading &&  <LinearProgress/>}
      <div className={s.layout}>
        <Routing/>
      </div>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}

export default App

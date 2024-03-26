import { Routes , Route } from "react-router-dom"
import Main from "./Commponent/Content/HeroSection/Main"
import Mobile from "./Commponent/Content/pages/Mobile"
import { Navbar } from "./Commponent/Navbar/Navbar"
import useAuth from "./Context/Auth"

function App() {

  const {show} = useAuth()

  return (
  <>

    <Navbar />

   <Routes>
      <Route path = '/' element = {<Main />}/>
      <Route path = '/product' element = {<Mobile />}/>
   </Routes>

    

  </>
  )
}

export default App

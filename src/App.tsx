/* PAGES */
import Welcome from './Pages/Welcome'
import Builder from './Pages/Builder'
/* STYLE */
import '../src/assets/styles/App.css'
/* ROUTES */
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/builder' element={<Builder/>}/>
    </Routes>
  )
}

export default App

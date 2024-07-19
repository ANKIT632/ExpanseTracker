import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.page'
import NavBar from './components/NavBar.Component'
function App() {
  return (
    <div >
    <NavBar/>
         <Routes>
          <Route path="/" element={<Home />} />
         </Routes>
    </div>
  )
}

export default App
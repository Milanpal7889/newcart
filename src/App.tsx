import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from "./components/Navbar.tsx"
import { ShoppingCartprovider } from './context/ShoppingCartContext.tsx'


function App() {

  return (
    <ShoppingCartprovider>
    <div className='container m-4'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    </ShoppingCartprovider>
  )
}

export default App

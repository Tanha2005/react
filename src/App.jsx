import React from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './componet/Navbar'
import User from './pages/User'
import Dynamic_user from './pages/dynamic_user'
import Nav from './componet/Nav'


const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/user/:slug' element={<Dynamic_user/>} />
{/* dynamic routing */}

        </Routes>
      </Router>
    </>
  )
}

export default App

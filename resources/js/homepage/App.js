import React from 'react'
// import './App.css'
import Registration from './component/Registration'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import Navba from './component/Navba'
import About from './component/About'
import Contact from './component/Contact'
import Ourvalues from './component/Ourvalues'
import Userpage from './component/Userpage'
import Footer from './component/Footer'
import Adds from './component/Adds'
import Czech from './component/Czech'
import German from './component/German'



function App() {
    
  return (
  <>
    <Navba/>
    
    
    
    <Router>
        <Routes>
            
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<Registration/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/value' element={<Ourvalues/>}/>
            <Route exact path='/userpage' element={<Userpage/>}/>
            <Route exact path='/adds' element={<Adds/>}/>
            <Route exact path='/czech' element={<Czech/>}/>
            <Route exact path='/german' element={<German/>}/>
           
            
        </Routes>
    </Router>
    <Footer/>

    
  </>
  )
}

export default App

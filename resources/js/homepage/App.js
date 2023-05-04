import React from 'react'
// import './App.css'
import Registration from './component/Registration'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'


function App() {
    
  return (
  <div>
    <h1>App</h1>
    
    
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<Registration/>}/>
            <Route exact path='/login' element={<Login/>}/>
            
        </Routes>
    </Router>

    
  </div>
  )
}

export default App

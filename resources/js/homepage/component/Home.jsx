import React from 'react'
import { Link } from 'react-router-dom'
import Homecontent from './Homecontent'
import { Services } from './Services'
import { Team } from './Team'
import { Features } from './Features'


function Home() {
  return (
    <div className=' h-full p-10'>
    <Homecontent/>
    <Services/>
    <Team/>
    <Features/>
 
    

    
      
      
    </div>
  )
}

export default Home

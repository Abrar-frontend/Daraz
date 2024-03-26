import React from 'react'
import SideBar from '../SideBarMenu/SideBar'
import Hero from './Hero'
import Image from '../SideBarMenu/Image'


function Main() {
  return (
<>
    <div className="flex gap-5">
     
       <SideBar />
       <Hero />
      
    </div>

    <Image />
    
</>

  )
}

export default Main
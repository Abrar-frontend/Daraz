import React from 'react';

function Navbar() {
  const bgStyle = {
  backgroundColor : '#F85606'
  }

  return (
    <>
    
<div className='w-screen flex items-center  h-24 pl-60 pr-52 pt-5 text-white' style={bgStyle}>

     <div className='flex items-center justify-center gap-20 w-full text-white'>

      <img src = '//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png' alt="" className='w-28 '/>

     <div className='border rounded-lg w-7/12 h-8 flex bg-white '>
     <input type="text"  placeholder = 'Search' className='w-full h-full overflow-hidden border rounded-lg outline-none'   />
     <i className="fa-solid fa-magnifying-glass w-8 text-lg text-orange-900 bg-gray-200 rounded-lg cursor-pointer"></i>
     </div>

     <div className = 'text-white flex items-center content-between gap-4'>
     <i className="fa-solid fa-user "></i>
     <p className='cursor-pointer'>Login</p>
     <p> | </p> 
     <p className='cursor-pointer text-center w-16'> Sign Up</p>
     <i className="fa-solid fa-cart-shopping"></i>
     </div>

     </div>

</div>

    </>
  )
}

export {Navbar}
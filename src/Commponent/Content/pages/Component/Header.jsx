import React from 'react'
import useAuth from '../../../../Context/Auth'

function Header() {

  const { products}  =  useAuth()


  return (

    <div className='w-full flex flex-row items-center justify-between mb-5 '>
    <p className='text-gray-500 text-sm'> {products.length} items found For <span className='text-orange-500'>Apple</span></p>

    <div className='text-sm flex flex-row justify-center items-center gap-6'>
    <p> Sort By:</p>
    <select className='outline-none w-52 h-8 border border-black rounded-lg cursor-pointer'>
      <option value="March">March</option>
    </select>
    <div className='text-sm flex flex-row gap-2 '>
      <p>Veiw:</p>
      <i className="fa-brands fa-windows text-lg cursor-pointer"></i>
    </div>
  </div>
    
    </div>



  )
}

export default Header
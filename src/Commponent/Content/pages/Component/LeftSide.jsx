import React from 'react'

function LeftSide() {
  return (
    
    <div className='flex flex-col gap-5  w-52 pt-10'>
     <h2 className='font-bold text-xl'>Filter</h2>

     <div className='w-64 h-full'>

     <h3 className='font-semibold text-lg text-gray-500'>Promotion & Services</h3>

     <p className='text-sm text-gray-500 border hover:border-orange-500 cursor-pointer w-auto inline-block p-1 px-3 my-3 mt-8'>free Delevery</p>
     <p className='text-sm text-gray-500 border hover:border-orange-500 cursor-pointer w-auto inline-block p-1 px-3 my-3'>Best Prices Gruanteed</p>
     <p className='text-sm text-gray-500 border hover:border-orange-500 cursor-pointer w-auto inline-block p-1 px-3 my-3'>Authentict Brand     <span className='text-white'>khan</span></p>

     <p className='text-sm text-gray-500 border hover:border-orange-500 cursor-pointer w-auto inline-block p-1 px-3 my-3'>Daraz Verified</p>

     <h3 className='font-semibold text-lg text-gray-500'>Brand</h3>

     <p className='text-sm text-gray-500 mt-3 p-1 px-3 '><input type="checkbox" className='outline-none cursor-pointer'/> Iphones </p>

     <p className='text-sm text-gray-500  p-1 px-3 '><input type="checkbox" className='outline-none cursor-pointer'/> Q-mobile </p>

     <p className='text-sm text-gray-500  p-1 px-3 '><input type="checkbox" className='outline-none cursor-pointer'/> Smart Phones </p>

     <p className='text-sm text-gray-500  p-1 px-3 '><input type="checkbox" className='outline-none cursor-pointer'/> Metrola </p>

    <p className='text-sm text-gray-500  p-1 px-3 '><input type="checkbox" className='outline-none cursor-pointer'/> Techno </p>

    <p className='text-sm text-gray-500  p-1 px-3 '><input type="checkbox" className='outline-none cursor-pointer'/> Apple  </p>


     </div>

    </div>
  )
}

export default LeftSide
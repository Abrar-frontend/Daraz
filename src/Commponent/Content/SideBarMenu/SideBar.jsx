import React from 'react'
import useAuth from '../../../Context/Auth';
import {
SideBarItems,
 
healthBeautyNames,mobileNames,laptopNames,electronicDevices,clothes,sportsEquipment,

skinCareProducts,makeupProducts,hairCareProducts,bathBodyProducts,beautyToolsProducts,
huaweiP40Products,onePlus9Products,googlePixel6Products,iPhone13Products,samsungGalaxyS21Products,
}  from './index';

import { useNavigate } from 'react-router-dom';

function SideBar() {

    const {arr , setArr , arr1 , setArr1 } = useAuth()

    function showIcon(e) {
        const icon = e.target.querySelector('i');
        const allIcons = document.getElementsByClassName('icon');
    
        Array.from(allIcons).forEach((itm) => {
            itm.classList.remove('block');
            itm.classList.add('hidden');
        });
    
        icon.classList.remove('hidden');
        icon.classList.add('block');
        
        if(e.target.firstChild.textContent == 'Health & Beauty'){
            setArr(healthBeautyNames)
          } else if(e.target.firstChild.textContent === 'Mobile'){
              setArr(mobileNames)
            }else if(e.target.firstChild.textContent === 'Laptop'){
              setArr(laptopNames)
            }else if(e.target.firstChild.textContent === 'Electronics Device'){
              setArr(electronicDevices)
            }else if(e.target.firstChild.textContent === 'Cloths'){
              setArr(clothes)
            }else if(e.target.firstChild.textContent === 'Sports'){
              setArr(sportsEquipment)
            }

            const ulChild = document.getElementsByClassName('ulChild')[0]
            ulChild.classList.remove('hidden')
            ulChild.classList.add('block')
    }

    function showIcon2(e){
      const icon = e.target.querySelector('i');
      const allIcons = document.getElementsByClassName('icon2');
  
      Array.from(allIcons).forEach((itm) => {
          itm.classList.remove('block');
          itm.classList.add('hidden');

          const ulChild = document.getElementsByClassName('ulChild')[1]
            ulChild.classList.remove('hidden')
            ulChild.classList.add('block')
      });
  
      icon.classList.remove('hidden');
      icon.classList.add('block');
      // '', '', 'Skin Care', '', '', "Men's Care", 'Personal Care', 'Fragrances', 'Sexual Wellness', 'Medical Supplies
  
      if(e.target.firstChild.textContent === 'Skin Care'){
        setArr1(skinCareProducts)
      }else if(e.target.firstChild.textContent === 'Makeup'){
        setArr1(makeupProducts)
      } else if(e.target.firstChild.textContent === 'Hair Care'){
        setArr1(hairCareProducts)
      }else if(e.target.firstChild.textContent === 'Bath & Body'){
        setArr1(bathBodyProducts)
      }else if(e.target.firstChild.textContent === 'Beauty Tools'){
        setArr1( beautyToolsProducts)
      }else if(e.target.firstChild.textContent === 'Beauty Tools'){
        setArr1(huaweiP40Products)
      }else if(e.target.firstChild.textContent === 'iPhone 13'){
        setArr1(iPhone13Products)
      }else if(e.target.firstChild.textContent === 'Xiaomi Mi 11'){
        setArr1(xiaomiMi11Products)
      }else if(e.target.firstChild.textContent === 'OnePlus 9'){
        setArr1(onePlus9Products)
      }else if(e.target.firstChild.textContent === 'Google Pixel 6'){
        setArr1(googlePixel6Products)
      }else if(e.target.firstChild.textContent === 'Samsung Galaxy S21'){
        setArr1(samsungGalaxyS21Products)
      }else if(e.target.firstChild.textContent === 'Huawei P40'){
        setArr1(huaweiP40Products)
      }else{
        const ulChild = document.getElementsByClassName('ulChild')[1];  
          ulChild.classList.remove('block')
          ulChild.classList.add('hidden')
      }
    }

    function showIcon3(){
      console.log('hello')
    }

    function hiddenIcon(){
      const allIcons = document.getElementsByClassName('icon');

      Array.from(allIcons).forEach((itm) => {
        itm.classList.remove('block');
        itm.classList.add('hidden');
    });

    const ulChild = document.getElementsByClassName('ulChild');
    Array.from(ulChild).forEach( (itm) => {
      itm.classList.remove('block')
      itm.classList.add('hidden')
    })
    }

    // *****************************

    const { dataGetFromBackend } = useAuth()

    const navigate = useNavigate()

   async function nextPage(value){
      console.log('navigate to check')
        await dataGetFromBackend(value)
               navigate('/product')
      // console.log(value)
     
    }

  return (
          

    <ul
        onMouseLeave={hiddenIcon}
        className = ' ml-60 mr-52 pt-6' >
        { SideBarItems.map( (itm,indx) => (
            <li key = {indx}
            onMouseEnter={showIcon}
            className='flex hover:text-orange-600 cursor-pointer w-60 pr-4 z-30'
            >{itm}
                 <i className="fa-solid fa-chevron-right ml-auto hidden icon" ></i>
            </li>
        ))}    

      <ul 
        className="absolute top-28 w-64 ml-24 pl-5 mt-2 left-96 h-2/5  ulChild hidden bg-white z-30">
            {
                arr?.map( (itm,indx) => 
                (
                    <li key = {indx}
                    onMouseEnter={showIcon2}
                    className='flex hover:text-orange-600 cursor-pointer w-60 pr-4'
                    onClick={(e) => nextPage(e.target.textContent)}>{itm}
                        <i className="fa-solid fa-chevron-right ml-auto hidden icon2" ></i>
                    </li>
                )
                )
            }
      </ul>

      <ul 
       className="absolute top-28 ml-80 pl-20  mt-2 left-96 w-2/5 flex  flex-wrap gap-16 h-2/5  ulChild hidden ulChild bg-white">
        {arr1.map( (item , index) => (
         <li
         key={index}
            onMouseEnter={showIcon3}
            className='flex flex-col w-50 h-20 pr-4 text-sm text-center justify-center cursor-pointer hover:text-orange-600'
            >
            <img src = {item.imgUrl} alt="" className='w-16 block ml-10'/>
            <span className='text-xs flex w-36 '>{item.producDes}</span>
         </li>
        ))}
      </ul>

    </ul>
        
    
  )
}

export default SideBar
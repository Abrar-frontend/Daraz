import React, { useEffect , useState} from 'react'
import Header from './Component/Header'
import LeftSide from './Component/LeftSide'
import useAuth from '../../../Context/Auth'
import Cookies from 'js-cookie'

const MobileArray = [{ProductUrl : 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , ProductDes : 'That is product description about that product item which is show on image', ProductPrice : `Rs. 430`},
{ProductUrl : 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , ProductDes : 'That is product description about that product item which is show on image', ProductPrice : `Rs. 430`},
{ProductUrl : 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , ProductDes : 'That is product description about that product item which is show on image', ProductPrice : `Rs. 430`},
{ProductUrl : 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , ProductDes : 'That is product description about that product item which is show on image', ProductPrice : `Rs. 430`},
{ProductUrl : 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , ProductDes : 'That is product description about that product item which is show on image', ProductPrice : `Rs. 430`},
{ProductUrl : 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , ProductDes : 'That is product description about that product item which is show on image', ProductPrice : `Rs. 430`}] 


 

function Mobile() {

  const { product , products, setProducts } = useAuth()

 

  const [loadedFromCookies, setLoadedFromCookies] = useState(false);


  useEffect(() => {
    // Retrieve products from cookies when component mounts
    const storedProductString = Cookies.get('myProduct');
    if (storedProductString) {
      setProducts(JSON.parse(storedProductString));
      setLoadedFromCookies(true);
    }
  }, []);

  useEffect(() => {
    Cookies.remove()
    // Update products in cookies when product changes
    if (product.length > 0 && loadedFromCookies) {
      Cookies.set('myProduct', JSON.stringify(product));
      setProducts(product); // Update local state
    }
  }, [product]);




  return (


    <div className='flex flex-row  ps w-10/12 m-auto h-full'>

     
     <LeftSide /> 

     <div className='w-full h-screen flex flex-wrap pt-10 pl-10 m-auto'>
        <Header />    
    
        {
            products.map( (itm , indx) => (
                <div className=' w-1/4 h-96 border text-center m-4 cursor-pointer hover:border-gray-500 flex flex-col gap-4'  key = {indx}> 
                  <img src = {itm.imageUrl} alt="" className='w-full h-36'/>
                    <div className=' h-auto overflow-hidden my-3 hover:text-yellow-800'>
                     <span>{itm.prdDes}</span>
                    </div>
                    <h2 className='text-orange-500 font-bold text-lg'>{itm.rateOfObj}</h2>
                </div>
            ))
        }
     </div>
        
    </div>
  )
}

export default Mobile
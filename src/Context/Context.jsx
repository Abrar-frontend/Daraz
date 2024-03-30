import React, { useState } from 'react'
import { createContext } from 'react'

const contextVar = createContext()


function Context({children}) {
    const [arr , setArr] = useState()

    const [arr1 , setArr1] = useState([])

  //  const product = []

   const [product , setProduct ] = useState([])

  //  const [products, setProducts] = useState([]);

  //  console.log(product,"check product in context")

    const dataGetFromBackend = (idOfArr) => {
  
        fetch(`https://daraz-backend.vercel.app?id=${idOfArr}`)
        .then(response => response.json())
        .then(data => {
          // console.log( data)
    
        // data.forEach((e) => {
        //   product.push(e)
        // })
        setProduct([...data])
        console.log(product , 'from context api file')
        console.log(...data , 'from context api file')
       
        })
  .catch(error => {
    console.error('Error:', error);
  });
    }

   
    const [show , setShow] = useState(false)
return(
    <contextVar.Provider value={{
        show, 
        setShow,
        arr,
        setArr,
        arr1,
        setArr1,
        setProduct,
        product,
        dataGetFromBackend,
        }}>
     {children}
    </contextVar.Provider>
 )
}

export default Context
export {contextVar}
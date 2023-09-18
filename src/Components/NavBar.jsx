import React,{useContext} from 'react'
import { HiArrowLeft, HiShoppingCart } from "react-icons/hi2";
import { cartValue } from './Cart.jsx/Cart';
export default function NavBar() {
let count = useContext(cartValue) 
  return (
    <div className='w-screen h-[4rem] flex justify-between p-4 items-end  '>
        <div className='flex items-center justify-center gap-6'>
          <HiArrowLeft className='md:hidden' size={25}/>
            <h1 className='text-xl'>UNI Restob Cafe</h1>
               </div>


        <div className='flex items-center justify-center gap-3 md:pr-5 '>
            <p className='text-lg'>My Orders</p>
            <div className='relative w-4 h-4'>
              <HiShoppingCart size={28} className=''/>
                 <p className='w-4 h-4 absolute left-4 -top-1 md:-top-1 md:left-4  grid place-items-center text-[0.6rem] bg-red-600 text-white rounded-full'>{count.cart}</p>

            </div>
            
            </div>       

        


       
      
    </div>
  )
}

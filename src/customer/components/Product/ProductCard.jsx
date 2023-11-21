import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product?._id}`)} className='productCard w-[25rem] m-3 transition-all cursor-pointer'>
          <div className='h-[15rem]'>
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
          </div>
          <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>

                    <p >{product.title} </p>
                </div>
                <div className='flex items-center space-x-2'>
                     <p className='font-semibold'>{product.discountedPrice}Lakhs-</p>
                     <p className='font-semibold'>{product.price}Lakhs</p>
                     {/* <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p> */}
                </div>
          </div>
    </div>
  )
}

export default ProductCard
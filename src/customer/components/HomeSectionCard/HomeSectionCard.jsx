import React from 'react'

function HomeSectionCard({product}) {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[30rem] mx-3 '>
        <div className="h-[13rem] w-[25rem]">
            <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />
        </div>
        <div className='p-4'>
           <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
           <p className='mt-2 tex-sm text-gray-500'>{product.title}</p>

        </div>
    </div>
  )
}

export default HomeSectionCard
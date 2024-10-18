import React from 'react'
import ProductCard from './ProductCard'

function Product() {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolore nam architecto sit enim illum vitae! Voluptatum doloremque, 
                magnam corporis rem minima quis ab nemo consequuntur 
                laboriosam rerum odit a iusto.
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Product

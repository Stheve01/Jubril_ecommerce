import React from 'react';
import {bed1, bed2, sofa1, sofa2, wardrobe1, wardrobe2} from "../assets/index.jsx";
import {HiArrowRight, HiArrowLeft} from "react-icons/hi";
import { useState } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
     const data = [
        bed1, bed2,sofa1, sofa2, wardrobe1, wardrobe2
     ];

     const prevSlide=() => {
      setCurrentSlide((currentSlide - 1 + data.length) % data.length);
     };
     const nextSlide=() => {
      setCurrentSlide((currentSlide +1) % data.length);
     };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className='w-screen h-[650px] relative'>                   
        <div 
        // style={{transform:`translateX(-${currentSlide * 100}vw)`}}
        className="w-[400vw] h-full flex transition-transform duration-1000"
        >
            
            <img className="w-screen h-full object-cover" src={data[currentSlide]} alt="ImageSix" />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300">
            <HiArrowLeft/>
          </div>
          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300">
            <HiArrowRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

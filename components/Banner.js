import React, { useEffect, useState } from 'react'
import { GoChevronLeft, GoChevronRight, GoDot, GoDotFill } from "react-icons/go";

const Banner = () => {

  const slides = [
    '/banner/1.png', '/banner/2.png', '/banner/3.png', '/banner/4.png',
    '/banner/5.png', '/banner/6.png', '/banner/7.png', '/banner/8.png',
    '/banner/9.png'
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className='relative w-full h-[20rem] p-4 rounded-xl shadow-md'>
      
      {/* Slider Image */}
      <div style={{backgroundImage: `url(${slides[currentIndex]})`}}
       className='w-full h-full rounded-lg bg-center bg-contain bg-no-repeat duration-1000'>
      </div>

      {/* Slider Button */}
      <div className='absolute top-[50%] left-5 text-2xl rounded-lg p-1 cursor-pointer bg-black/10 hover:bg-black/30'>
        <GoChevronLeft onClick={prevSlide} />
      </div>
      <div className='absolute top-[50%] right-5 text-2xl rounded-lg p-1 cursor-pointer bg-black/10 hover:bg-black/30'>
        <GoChevronRight onClick={nextSlide} />
      </div>

      {/* Slider Dots */}
      <div className='flex justify-center -mt-6'>
        {slides.map((a, idx) => (
          <div key={idx} onClick={() => setCurrentIndex(idx)} className='text-xl cursor-pointer'>
            {idx===currentIndex ? <GoDotFill color='rgb(255, 10, 10, 0.8)' /> : <GoDotFill color='rgb(203, 213, 225, 0.4)' />}
          </div>
        ))}

      </div>
    </div>
  )
}


export default Banner
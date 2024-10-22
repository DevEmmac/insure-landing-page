import React from 'react';
import Button from '../Component/Button';
import footerPattern  from '../assets/images/bg-pattern-how-we-work-desktop.svg'

const FindoutMore = () => {
  return (
    <section className='max-container padding'>
        <div className='bg-[#2a2a41] flex flex-1 justify-between items-center w-auto h-[200px] relative'>
            <h1 className='text-white text-4xl font-bold pl-20'> Find out more<br />about how we work</h1>
            <div className='my-auto mr-14 z-10 max-sm:justify-end items-center max-sm:w-full'>
               <Button label='how we work'/>
            </div>
              <img src={footerPattern} alt="pattern" className='object-contain absolute end-0 z-0' width={350} height={200}/>
          
        </div>
    </section>
    
  )
}

export default FindoutMore;
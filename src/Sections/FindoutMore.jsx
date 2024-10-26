import React from 'react';
import Button from '../Component/Button';
import footerPattern  from '../assets/images/bg-pattern-how-we-work-desktop.svg';
import { Link } from 'react-router-dom';

const FindoutMore = () => {
  return (
    <section className='max-container padding'>
        <div className='bg-[#2a2a41] flex flex-1 justify-between items-center w-auto h-[200px] relative max-lg:flex-col max-lg:h-fit max-lg:-mt-5 max-sm:mt-12'>
          <h1 className='text-white flex-1 text-4xl font-bold pl-20 max-lg:px-0 max-lg:text-center max-lg:pt-20 max-sm:pl-0 max-sm:w-60'> Find out more<br />about how we work</h1>
          <div className='my-auto mr-14 z-10 items-center max-lg:mx-auto max-sm:mb-14 max-sm:mt-9'>
              <Link to={'./not-found'}>
                <Button label='how we work'/>
              </Link>
               
            </div>
              <img src={footerPattern} alt="pattern" className='object-contain absolute end-0 z-0 max-sm:hidden' width={350} height={200}/>
          
        </div>
    </section>
    
  )
}

export default FindoutMore;
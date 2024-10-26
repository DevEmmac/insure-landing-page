import React from 'react';
import Nav from '../Component/Nav';
import humanizeBg from '../assets/images/bg-pattern-intro-left-desktop.svg';
import patternRight from '../assets/images/bg-pattern-intro-right-desktop.svg';
import humanizeImage from '../assets/images/image-intro-desktop.jpg';
import Button from '../Component/Button';
import { Link } from 'react-router-dom';

const Humanize = () => {
  return (
    <section className='bg-[#2a2a41] w-full h-[600px] max-lg:flex-col max-lg:flex max-lg:bg-transparent'>
      <Nav />
        <img src={humanizeBg} alt="icon" className='object-contain absolute mt-[350px] max-lg:hidden max-lg:mt-[500px]'/>
            <img src={patternRight} alt="icon" className='object-contain absolute end-0 z-10 max-lg:hidden' width={360} height={200}/> 
      
        <div className='flex flex-row max-w-fit mx-auto mt-20 gap-4 relative max-lg:flex-col-reverse max-lg:mt-0 max-lg:gap-0 max-lg:px-10'>
            <div className='max-w-lg max-lg:bg-[#2a2a41] max-lg:flex flex-col justify-center items-center max-lg:text-center'>
              <h1 className='text-6xl text-white pt-20 max-lg:text-[42px] max-lg:font-bold leading-17 max-lg:leading-[50px]'>Humanizing<br />your insurance.</h1>
                <p className='text-white leading-7 pt-5 text-[16px] max-lg:px-10 max-lg:leading-7'>Get your life insurance coverage easier and faster. We blend our expertise 
                  and technology to help you find the plan that’s right for you. Ensure you 
                  and your loved ones are protected.
                </p>
                <Link to={'./not-found'}>
                  <Button label='View plans'/>
                </Link>   
            </div>

            <div className='mt-4 max-sm:-mt-0'>
              <img src={humanizeImage} alt="image" className='object-contain' width={512} height={450}/>
            </div>
              
        </div>
    </section>
  )
}

export default Humanize
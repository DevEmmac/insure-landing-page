import React from 'react';
import Nav from '../Component/Nav';
import humanizeBg from '../assets/images/bg-pattern-intro-left-desktop.svg';
import patternRight from '../assets/images/bg-pattern-intro-right-desktop.svg';
import humanizeImage from '../assets/images/image-intro-desktop.jpg';
import Button from '../Component/Button';

const Humanize = () => {
  return (
    <section className='bg-[#2a2a41] w-full h-[600px]'>
      <Nav />
      <img src={humanizeBg} alt="icon" className='object-contain absolute mt-[350px]'/>
          <img src={patternRight} alt="icon" className='object-contain absolute end-0 z-10' width={360} height={200}/> 
    
       <div className='flex flex-row max-w-fit mx-auto mt-20 gap-4 relative'>
          <div className='max-w-lg'>
            <h1 className='text-6xl text-white pt-10'>Humanizing<br />your insurance.</h1>
              <p className='text-white leading-7 pt-5 text-[16px]'>Get your life insurance coverage easier and faster. We blend our expertise 
                  and technology to help you find the plan that’s right for you. Ensure you 
                  and your loved ones are protected.
              </p>
              <Button label='View plans'/>
          </div>

          <div className='mt-4'>
            <img src={humanizeImage} alt="image" className='object-contain' width={500} height={450}/>
          </div>
            
       </div>
       <div className='justify-end ml-72 absolute'>
        
       </div>
    </section>
  )
}

export default Humanize
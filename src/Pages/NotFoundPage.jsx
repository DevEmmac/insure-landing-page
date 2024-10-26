import React from 'react';
import Nav from '../Component/Nav';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';

const NotFoundPage = () => {
  return (
    <div>
      <Nav />

        <section className='max-container padding flex flex-col justify-center items-center'>
       
       <FaExclamationTriangle className='triangle text-[64px] text-yellow'/>  
           <h1 className='mt-[13px] text-[48px] font-bold'>404 Not Found</h1>
            <p>This-page does not exist</p>
          <Link to={'/'}>
           <Button label='Back' backgroundColor={'bg-[#2a2a41]'} textColor={'text-white'}/>
          </Link>
      </section>

    </div>
   
  )
}

export default NotFoundPage;
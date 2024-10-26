import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import Hamburger from '../assets/images/icon-hamburger.svg';
import Close from '../assets/images/icon-close.svg';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const navLink = [ {label:"How we work", link:'/'},
                      {label: 'Blog', link:'/'},
                      {label:'Account', link:'/'},
                      {label:'View plans', link:'/'}
    ];

  return (
    <div className='bg-slate-100 flex justify-between py-4 lg:px-28 max-lg:px-6 max-lg:fixed z-10 w-full'>
       <div className='my-auto'>
        <img src={logo} alt="logo" className='object-contain'/>
       </div>

      <div className='max-lg:text-center max-lg:flex max-lg:absolute max-lg:-ml-6'>
        <ul className={`flex flex-row max-md:gap-2 max-lg:bg-[#2a2a41] max-lg:w-[100%] max-lg:h-96 ${
            isOpen ? 'block' : 'hidden'
          } lg:flex max-lg:flex-col lg:items-center lg:space-x-4 max-lg:fixed  max-lg:z-10 max-lg:mt-12 max-lg:pt-5`}>
            {navLink.map((item) => (
              <li key={item.label} className='hover:text-white hover:bg-[#2a2a41] py-2 px-4 cursor-pointer text-slate-gray max-lg:text-white max-lg:font-bold hover:border max-lg:w-fit max-lg:mx-auto'>
                <Link to={'/not-found'}>{item.label}</Link>
              </li>
            ))}
        </ul>

      </div>
       
         
         <div className='hidden max-lg:block' onClick={toggleMenu}>
          {isOpen ? <img src={Close} alt="Close" /> : <img src={Hamburger} alt="Open" />}    
         </div>
         
    </div>
  )
}

export default Nav;
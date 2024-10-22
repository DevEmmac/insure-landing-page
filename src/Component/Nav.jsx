import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Nav = () => {
    const navLink = [ {label:"How we work", link:'/'},
                      {label: 'Blog', link:'/'},
                      {label:'Account', link:'/'},
                      {label:'View plans', link:'/'}
    ];
  return (
    <div className='bg-slate-100 flex justify-between py-4 lg:px-28 sm:px-2'>
       <div className='my-auto'>
        <img src={logo} alt="logo" className='object-contain'/>
       </div>

        <ul className='flex flex-row max-md:gap-2 '>
            {navLink.map((item) => (
              <li key={item.label} className='hover:bg-[#2a2a41] hover:text-white py-2 px-4 cursor-pointer text-slate-gray'>
                <Link to={'/'}>{item.label}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import twitter from '../assets/images/icon-twitter.svg';
import facebook from '../assets/images/icon-facebook.svg';
import pinterest from '/home/emmie/insure/src/assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {

const footerLinks = [
    {src:facebook,
     title: 'Our company',
     links: [
        {name:'How we work', link:'/'},
         {name:'Why Insure?', link:'/'},
          {name:'View plans', link:'/'},
         {name:'Reviews', link:'/'}
     ]
    },
    {src:twitter,
     title: 'Help me',
     links: [
        {name: 'FAQ', link:'/'},
       {name: 'Terms of use', link:'/'},
       {name: 'Privacy policy', link:'/'},
       {name: 'Cookies', link:'/'}
     ]
    },
    {src:pinterest,
     title: ' Contact',
     links: [
        {name: 'Sales', link:'/'},
        {name: 'Support', link:'/'},
        {name: 'Live chat', link:'/'}
     ]
    },
    {src:instagram,
     title: 'Others',
     links: [
        {name: 'Careers', link:'/'},
        {name: 'Press', link:'/'},
        {name: 'Licenses', link:'/'}
     ]
    }
]

  return (
    <section className='max-container padding max-sm:flex  max-sm:flex-col justify-center items-center text-center'>
        <div className='flex flex-1 justify-between border-b-2 h-14 max-lg:-mt-20 border-slategray max-lg:flex-col max-sm:bg-footer-pattern max-sm:w-full max-lg:h-36 max-sm:h-80'> 
            <div className='max-sm:mt-24 max-lg:mt-5 max-lg:mb-4  max-sm:mb-7 flex max-lg:justify-center items-center'>
               <img src={logo} alt="logo" className='object-contain'/>
            </div>
           
            <div className='flex flex-row w-44 justify-between my-auto max-lg:items-center max-lg:mx-auto max-lg:mb-8 max-sm:mb-12 '>
                {footerLinks.map((icon) => (
                    <div>
                      <Link to={'/not-found'} key={icon}>
                         <img src={icon.src} alt="twitter-icon" className='object-contain cursor-pointer'/>
                    </Link>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-1 justify-between pt-7 w-[80%] max-lg:flex-col max-sm:pt-0 max-lg:mx-auto'>
            {footerLinks.map((footerTitle) => (
                <div key={footerTitle}>
                    <h2 className=' text-slate-gray font-semibold font-montserrat max-lg:pt-7 text-start'> {footerTitle.title} </h2>

                    <ul className='mt-5 font-montserrat font-semibold text-[13px] text-start max-lg:text-center'>
                        {footerTitle.links.map((link) => (
                            <li key={link} className='hover:text-slate-gray cursor-pointer leading-7'>
                                <Link to={'/not-found'}>{link.name}</Link>
                            </li>
                      ))}
                    </ul> 
                </div>
            ))}
        </div>
    </section>
   
  )
};

export default Footer;
import React from 'react';
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
    <section className='max-container padding'>
        <div className='flex flex-1 justify-between border-b-2 border-slategray pb-6 leading-none'>
            <div>
               <img src={logo} alt="logo" className=''/>
            </div>
           
            <div className='flex flex-row w-44 justify-between '>
                {footerLinks.map((icon) => (
                    <div key={icon}>
                         <img src={icon.src} alt="twitter-icon" className='object-contain'/>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-row justify-between pt-7 text-slate-gray'>
            {footerLinks.map((footerTitle) => (
                <div key={footerTitle}>
                    <h2> {footerTitle.title} </h2>

                    <ul >
                        {footerTitle.links.map((link) => (
                            <li key={link}>{link.name}</li>
                      ))}
                    </ul> 
                </div>
            ))}
        </div>
    </section>
   
  )
};

export default Footer;
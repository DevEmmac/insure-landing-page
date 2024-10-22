import React from 'react';
import logo from '../assets/images/logo.svg';
import twitter from '../assets/images/icon-twitter.svg';
import facebook from '../assets/images/icon-facebook.svg';
import pinterest from '/home/emmie/insure/src/assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {

const FooterLinks = [
    {src:facebook,
     title: 'Our company',
     links: []
    },
    {src:twitter,
     title: 'Help me',
     links: []
    },
    {src:pinterest,
     title: ' Contact',
     links: []
    },
    {src:instagram,
     title: 'Others',
     links: []
    }
]

  return (
    <section className='max-container padding'>
        <div className='flex flex-1 justify-between'>
            <div>
               <img src={logo} alt="logo" className=''/>
            </div>
           
            <div className='flex flex-row w-44 justify-between'>
                {FooterLinks.map((icon) => (
                    <div key={icon}>
                         <img src={icon.src} alt="twitter-icon" className='object-contain'/>
                    </div>
                ))}
            </div>
        </div>

        <div>

        </div>
    </section>
   
  )
}

export default Footer;
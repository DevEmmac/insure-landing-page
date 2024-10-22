import React from 'react';
import snappyProcess from '../assets/images/icon-snappy-process.svg';
import affordablePrice from '../assets/images/icon-affordable-prices.svg';
import peopleFirst from '../assets/images/icon-people-first.svg';

const Wedifferent = () => {

  const different = [
    {
      src:snappyProcess,
      alt: 'snappy-process',
      title: 'Snappy Process',
      review: ' Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
    },
    {
      src:affordablePrice,
      alt: 'affordable-price',
      title: 'Affordable Prices',
      review: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.'
    },
    {
      src:peopleFirst,
      alt: 'people-first',
      title: 'People First',
      review: ' Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.'
    }
  ]

  return (
    <section className='max-container padding mt-52'>
        <h1 className='text-6xl'>We different</h1>

      <div className='flex flex-1 justify-between gap-10'>
        {different.map((item) => (
          <div key={item}>
            <div className='mt-14'>
              <img src={item.src} alt={item.alt} className='object-contain'/>
            </div>
           
            <h1 className='mt-8 font-semibold text-2xl font-'>{item.title}</h1>
            <p className='mt-4 text-sm text-slate-gray leading-6 '>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
   
  )
}

export default Wedifferent;
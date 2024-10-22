import React from 'react';

const Button = ({label}) => {
  return (
    <div className='w-fit h-10 bg-white text-[#2a2a41] py-2 px-6 font-semibold my-6 cursor-pointer hover:bg-gray-500 hover:text-white'>
        {label}
    </div>
  )
}

export default Button
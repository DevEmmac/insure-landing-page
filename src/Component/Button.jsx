import React from 'react';

const Button = ({label, backgroundColor, textColor}) => {
  return (
    <div className={`w-fit h-10  py-2 px-6 border font-semibold my-6 max:lg:my-0 cursor-pointer hover:bg-white '
    ${backgroundColor ? `${backgroundColor} ${textColor}`
          : "bg-transparent text-white-400 border-white-400 hover:text-[#2a2a41]"}`}>
        {label}
    </div>
  )
}

export default Button;
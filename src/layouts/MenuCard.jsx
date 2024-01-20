import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6"

const MenuCard = (props) => {
    return (
        <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
            <div>
                <img className='rounded-lg' src={props.img} alt='img' />
            </div>
            <div className='p-2 mt-5'>
                <div className='flex flex-row justify-between'>
                    <h3 className='font-semibold text-xl'>{props.title}</h3>
                    <h3 className='font-semibold text-xl'>{props.value}</h3>
                </div>
                <div className='flex flex-row justify-between mt-3'>
                    <div className='flex gap-4'>
                        <button className='px-3 text-sm border-2 border-[#f4ba6a] bg-[#FFDCAB] hover:text-brightColor transition-all rounded-md'>Hot</button>
                        <button className='px-3 text-sm border-2 border-[#f4ba6a] bg-[#FFDCAB] hover:text-brightColor transition-all rounded-md'>Cold</button>
                    </div>
                    <span className='flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer'>
                        <FaCartArrowDown />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuCard

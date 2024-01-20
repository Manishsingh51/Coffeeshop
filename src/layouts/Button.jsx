import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className="border border-white rounded-full bg-[#FFDCAB] px-6 py-1 hover:text-[#AB6B2E] transition-all">
                {props.title}
            </button>
        </div>
    )
}
export default Button
import React from 'react'

function Button({ text, type = 'submit', className = '',...props }) {
    return (
        <div>
            <button type={type} className={`text-center bg-gray-400 text-black hover:bg-gray-500 hover:text-white m-2 px-3 py-1 rounded-lg ${className}`} {...props}>{text}</button>
        </div>
    )
}

export default Button
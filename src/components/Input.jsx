import React from 'react'

const Input = ({label,type='text',id,className='',...props}) => {
  return (
    <div>
         <label htmlFor={id}>{label} : </label>
        <input type={type} className={`rounded p-1 ${className}`} id={id}  {...props} />
    </div>
  )
}

export default Input
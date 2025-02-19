import React from 'react'

function Button({ props, setColor }) {
  return (
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 rounded-3xl bg-white shadow-lg px-3 py-2'>
        {props.map((color, index) => (
          <button
            key={index}
            onClick={() => setColor(color)}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: color }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Button

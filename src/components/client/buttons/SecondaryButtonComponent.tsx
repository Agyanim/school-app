import React from 'react'

interface typeProp{
    Text:string
}
export const SecondaryButtonComponent = ({Text}:typeProp) => {
  return (
    <div className='w-[60%] mx-auto'>
        <button className='bg-blue-500 text-white px-5 py-2 w-full'>{Text}</button>
    </div>
  )
}

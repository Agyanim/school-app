import React from 'react'

const UpdateForm = () => {
  return (
    <section className='w-full mt-10'>
      <form className='w-[50%] flex flex-col gap-4 ml-3'  action="">
        <div className='flex justify-between w-full flex-col'>
          <label htmlFor="userName">Username:</label>
          <input className='border border-grey-100 w-[90%] px-2 py-2' type="text" name="userName" id="userName" />
        </div>
        <div className='flex justify-between w-full flex-col'>
          <label htmlFor="firstName">First Name:</label>
          <input className='border border-grey-100 w-[90%] px-2 py-2' type="text" name="firstname" id="firstname" />
        </div>
        <div className='flex justify-between w-full flex-col'>
          <label htmlFor="lastName">Last Name:</label>
          <input className='border border-grey-100 w-[90%] px-2 py-2' type="text" name="lastN" id="lastName" />
        </div>
        <div className='flex justify-between w-full flex-col'>
          <label htmlFor="email">Email:</label>
          <input className='border border-grey-100 w-[90%] px-2 py-2' type="emal" name="email" id="email" />
        </div>
        <div className='flex justify-between w-full flex-col'>
          <label htmlFor="phone">Phone:</label>
          <input className='border border-grey-100 w-[90%] px-2 py-2' type="text" name="phone" id="phone" />
        </div>
        <button className='bg-gradient-to-r from-orange-600 to-pink-600 w-[90%] text-white font-bold py-3 rounded border-none hover:bg-gradient-to-l' type='submit'> Update</button>
      </form>
    </section>
  )
}

export default UpdateForm
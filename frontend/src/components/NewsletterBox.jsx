import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% now</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ipsum laboriosam velit.
      </p>
      <form method={{onSubmitHandler}} action="/" className='w-full mx-auto my-6 border pl-3 sm:w-1/2 gap-3 flex items-center'>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBMIT</button>
      </form>
    </div>
  )
}

export default NewsletterBox

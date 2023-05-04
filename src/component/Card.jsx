import React from 'react'

const Card = ({image,title,description}) => {
  return (
    <div>
          <div className='card hover:shadow-lg'>
                        <img src={image} alt=""  className='w-full h-32 sm:h-48 object-cover'/>
                        <div className='m-4'>
                            <span className='font-bold'>{title}</span>
                            <span className='block text-gray-500 text-sm'>{description}</span>
                        </div>
                        <div className='badge flex items-center'>
                        <svg className='w-5 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                          <span>25 mins</span>
                        </div>
                    </div>
    </div>
  )
}

export default Card


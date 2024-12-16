import React from 'react'



export default function MySkill({ data }) {
 

  return (
    <div >
      <div className='max-w-[1200px] mx-auto pt-10'>
      <div className='bg-gray-200 px-2 py-2 text-lg font-semibold text-gray-600 mx-auto mb-10 w-[100px] rounded-2xl ' >
        About me
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4'>
        {data.map((items,index) => (
            <div key={index} className='mb-20' >
              <img className='w-36 h-36 object-contain' src={items.image} alt="..." />
              <div className='mt-2 text-center'>{items.title}</div>
            </div>
        )
        )}
      </div>
      </div>
    </div>
  )
}

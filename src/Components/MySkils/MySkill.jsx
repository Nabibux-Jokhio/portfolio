import React from 'react'
import Heading from '../Common/Heading/Heading'
import Card from '../Card/Card'

export default function MySkill({ data }) {
  return (
    <div className=' my-10'>
      <Heading data={"My Skill"} className="text-3xl text-center font-bold" />
      <div className='flex justify-center flex-wrap gap-20 mt-8'>
        {data.map((items, index) => (
          <Card key={index} data={items} />
        ))}
      </div>
    </div>
  )
}

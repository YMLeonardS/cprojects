import React from 'react'

const Card = ({ datas }) => {
  console.log(datas.length)
  console.log(`w-[calc(7rem*${datas.length})]`)
  return (
    <div 
      style={{backgroundImage: 'url(/card-bg.png)', width: `calc(8rem*${datas?.length})`}}
      className={`flex justify-evenly items-center h-[4.5rem] rounded-lg shadow-md bg-center bg-cover`}
    >
      {datas?.map((a, idx) => (
        <div className='w-full text-center' key={idx}>
          <h1 className='text-xl font-bold mt-2'>{a.value.toLocaleString()}</h1>
          <p className='text-xs pt-1'>{a.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Card
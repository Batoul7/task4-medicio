import React from 'react'

export default function FeaturesBox({data}) {
  return (
    <>
    {data?.map((item,index)=> {
        return (
            <div key={index} className='d-flex gap-4 align-items-start mb-2'>
            <div className="icon p-2 fs-2 c-my-primary d-flex align-items-center rounded icon-shadow">
                {item.icon}
            </div>
            <div className="desc text-secondary">
                <h5>{item.h}</h5>
                <p>{item.p}</p>
            </div>
        </div>
        )
    })}
    </>
  
  )
}

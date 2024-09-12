import React from 'react'
import './ServiceCard.css'

export default function ServiceCard({data}) {
  return (
    <>
    {data?.map((item,index)=> {
        return (
            <div key={index} className='col-lg-4 col-md-6'>
                <div className="service-item text-center text-secondary">
                    <div className="icon mb-3 p-4 w-25 h-25 mx-auto fs-2 c-my-primary d-flex align-items-center justify-content-center rounded-circle icon-shadow">
                        {item.icon}
                    </div>
                    <h4 className='position-relative pb-3'>{item.h}</h4>
                    <p>{item.p}</p>
                </div>
            </div>
        )
    })}
    </>
    
  )
}

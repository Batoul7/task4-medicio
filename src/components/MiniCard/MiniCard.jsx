import React from 'react'
import './MiniCard.css'

export default function MiniCard({data, display, gap}) {
  return (
   <div className="row pt-5 pb-5 gy-4">
        {data.map((item,index)=>{
            return (
                <div  className="col-xl-3 col-md-6">
                    <div key={index} className={`card-item p-4 position-relative ${display} ${gap}`}>
                        <div className="icon c-my-primary fs-1 mb-3">
                            {item?.icon}
                        </div>
                        <h4 className='mb-2 fw-bold text-secondary'>{item?.h}</h4>
                        <p className='text-secondary'>{item?.p}</p>
                    </div>
                </div>
            )
        })}
        </div>
  )
}

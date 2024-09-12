import React from 'react'
import './Title.css'

export default function Title({name, desc}) {

  return (
    <div className='title container'>
            <div className="row">
                <div className="col text-center text-secondary">
                    <h2 className='position-relative pb-3 text-uppercase'>{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
    </div>
  )
}

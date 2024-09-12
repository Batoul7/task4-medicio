import React from 'react'
import MiniCard from '../MiniCard/MiniCard'
import { FeaturedData } from '../../Data/FeaturedData'

export default function Featured() {
  return (
    <section className='featured container'>
          <MiniCard data={FeaturedData}/>
    </section>
        )
}
     
      


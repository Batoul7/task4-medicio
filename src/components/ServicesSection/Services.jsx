import React from 'react'
import Title from '../Title/Title'
import ServiceCard from '../ServiceCard/ServiceCard'
import { ServicesData } from '../../Data/ServicesData'

export default function Services() {
  return (
    <section id='Services' className='pt-5 pb-5 container'>
        <Title name={"Services"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
        <div className="row gy-4 pt-5">
            <ServiceCard data={ServicesData}/>
        </div>
    </section>
  )
}

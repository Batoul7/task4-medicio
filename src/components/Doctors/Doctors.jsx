import React from 'react'
import Title from '../Title/Title'
import DoctorCard from '../DoctorCard/DoctorCard'
import { DoctorCardData } from '../../Data/DoctorCardData'

export default function Doctors() {
  return (
    <section id='Doctors' className='pt-5 pb-5 bg-section'>
      <div className="container">
        <Title name={"Doctors"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
            <DoctorCard data={DoctorCardData}/>
      </div>
    </section>
  )
}

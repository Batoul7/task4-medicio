import React from 'react'
import Title from '../Title/Title'
import MyForm from '../MyForm/MyForm'

export default function Appointment() {
  return (
    <section id='Appointment' className='bg-section pt-5 pb-5'>
        <div className="container">
            <Title name={"Make an Appointment"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
            <MyForm/>
        </div>   
    </section>
  )
}

import React from 'react'
import Title from '../Title/Title'
import MyAccordion from '../MyAccordion/MyAccordion'
import { AccordionData } from '../../Data/AccordionData'

export default function Questions() {
  return (
    <section className='pt-5 bg-section'>
      <Title name={"Frequently Asked Questions"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
      <div className="container d-flex flex-column gap-3 p-5">
        <MyAccordion data={AccordionData}/>
      </div>
    </section>
  )
}

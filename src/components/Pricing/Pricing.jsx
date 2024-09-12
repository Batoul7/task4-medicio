import React from 'react'
import PricingCard from '../PricingCard/PricingCard'
import Title from '../Title/Title'
import { PricingCardData } from '../../Data/PricingCardData'

export default function Pricing() {
  return (
    <section className='pt-5 pb-5'>
        <Title name={"Pricing"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
       <div className="container pt-5">
          <PricingCard data={PricingCardData}/>
       </div>   
  </section>
  )
}

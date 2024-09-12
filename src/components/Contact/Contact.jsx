import React from 'react'
import Title from '../Title/Title'
import ContactCard from '../ContactCard/ContactCard'
import ContactForm from '../ContactForm/ContactForm'
import { BsGeoAlt } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Contact() {
  
  return (
    <section id='Contact' className='pt-5 pb-5'>
      <Title name={"Contact"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
        <div className="pt-5" style={{height:"400px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96778.43262902627!2d-73.998241!3d40.710839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1725563061883!5m2!1sen!2sus" className=" w-100 h-100" ></iframe>
        </div>
        <div className="container pt-5">
            <div className='row gy-4'>
                <div className="col-xl-6">
                    <div className="row g-4 text-center">
                        <div className="col-lg-12">
                            <ContactCard icon={<BsGeoAlt/>} title={"Address"} text={"A108 Adam Street, New York, NY 535022"}/>
                        </div>
                        <div className="col-lg-6">
                            <ContactCard icon={<FaPhoneAlt/>} title={"Call Us"} text={"+1 5589 55488 55"}/>
                        </div>
                        <div className="col-lg-6">
                            <ContactCard icon={<FaRegEnvelope/>} title={"Email Us"} text={"info@example.com"}/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <ContactForm/>
                </div>
            </div>

        </div>
    </section>
  )
}

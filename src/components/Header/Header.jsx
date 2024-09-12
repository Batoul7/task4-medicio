import React from 'react'
import {  FaRegClock } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import NavBar from '../NavBar/NavBar'

export default function Header() {
  const logo = {img: '/src/assets/images/img/logo.png', text:"Medicio"}
  const items = [
    {
      id:"Home",
      name:"Home"
    },
    {
      id:"About",
      name:"About"
    },
    {
      id:"Services",
      name:"Services"
    },
    {
      id:"Departments",
      name:"Departments"
    },
    {
      id:"Doctors",
      name:"Doctors"
    },
  ]
  return (
    <>
    <div className="bg-my-primary d-md-flex align-items-center d-none">
      <div className='container d-flex justify-content-center justify-content-md-between text-white pt-2 pb-2'>
        <div className='d-none d-md-flex align-items-center '>
          <FaRegClock />
         <span className='ms-1'>Monday - Saturday, 8AM to 10PM</span> 
          </div>
        <div className='d-flex align-items-center'>
          <MdPhoneIphone />
          <span>Call us now +1 5589 55488 55</span>
        </div>  
      </div>
    </div>
    <NavBar logo={logo} items={items}/>
    </>
  )
}

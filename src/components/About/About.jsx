import React from 'react'
import Title from '../Title/Title'
import AboutImg from './../../assets/images/img/about.jpg'
import { ListGroup } from 'react-bootstrap'
import { IoCheckmarkDone } from 'react-icons/io5'
import { FaFlask, FaPlay } from 'react-icons/fa'
import './About.css'
import { FaAward, FaRegHospital, FaUserDoctor } from 'react-icons/fa6'
import Features from '../Features/Features'
import CounterBox from './../Counter/CounterBox'

export default function About() {

  const CounterBoxData = [
    {
      icon:<FaUserDoctor/>,
      title:"Doctors",
      target:25,
      duration:2000,
    },
    {
      icon:<FaRegHospital/>,
      title:"Departments",
      target:15,
      duration:3000,
    },
    {
      icon:<FaFlask/>,
      title:"Research Labs",
      target:8,
      duration:4000,
    },
    {
      icon:<FaAward/>,
      title:"Awards",
      target:150,
      duration:5000,
    },
  ]

  return (
    <section id='About' className='pt-5 pb-5'>
      <Title name={"About Us"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
      <div className="content-about container pt-5">
      <div className="row gy-4">
          <div className="col-lg-6 position-relative ">
          <div className="play-icon d-flex position-absolute top-50 start-50 translate-middle rounded-circle bg-my-primary p-4 text-light"><FaPlay/></div>
            <img src={AboutImg} alt="about img" className='w-100' />
          </div>
          <div className="col-lg-6">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ListGroup as="ul">
              <ListGroup.Item as="li">
                <span className="icon text-primary me-2 fs-4">
                  <IoCheckmarkDone /> 
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <span className="icon text-primary me-2 fs-4">
                  <IoCheckmarkDone /> 
                </span>
                Duis aute irure dolor in reprehenderit in voluptate velit.</ListGroup.Item>
              <ListGroup.Item as="li">
                <span className="icon text-primary me-2 fs-4">
                  <IoCheckmarkDone /> 
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</ListGroup.Item>
          </ListGroup>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </div>
        </div>
        <div className=" mt-5 mb-5">
            <div className="row gy-4">
              {CounterBoxData.map((item,_) => (
                <CounterBox icon={item.icon} title={item.title} target={item.target} duration={item.duration} />
              ))}
            </div>
        </div>
      </div>
      <Features/>
    </section>
  )
}

import React, { useState } from 'react'
import Title from '../Title/Title'
import { Nav } from 'react-bootstrap'
import './Departments.css'
import { DepartmentData } from '../../Data/DepartmentData'

export default function Departments() {
    const [current, setcurrent] = useState(4);
    const data = [
        {
            name:"Cardiology"
        },
        {
            name:"Neurology"
        },
        {
            name:"Hepatology"
        },
        {
            name:"Pediatrics"
        },
        {
            name:"Ophthalmologists"
        },
    ]

    function activeLink(index) {
        if(current === index) {
            setcurrent(0)
        }else {
            setcurrent(index);
        }
    }
  return (
    <section id='Departments' className='pt-5 pb-5'>
        <div className="container">
            <Title name={"Departments"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
            <div className="row pt-5">
                <Nav className="tabs  mb-3 col-lg-3 fs-6 d-flex flex-column fw-bold text-color">
                    {data.map((item, index) => (
                        <Nav.Link key={index}
                        className={current === index ? 'p-2 border-end border-2 active' : 'p-2 border-end border-2 p-1'}
                        onClick={() => activeLink(index)} >{item.name}
                        </Nav.Link>
                    ))}
                </Nav>
            {DepartmentData?.map((data, index) => {
                if (current === index) {
                    return (
                    <>
                    {data?.desc.map((i, index) => (
                        <div key={index} className="col-lg-6 text-color ">
                            <h3>{i.h3}</h3>
                            <p>{i.desc1}</p>
                            <p>{i.desc2}</p>
                        </div>   
                    ))}
                    <div className="col-lg-3">
                        <img src={data?.img} alt="" className='w-100' />
                    </div>
                    </>)} 
                })}
            </div>
        </div>       
    </section>
  )
}

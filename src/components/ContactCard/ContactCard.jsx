import React from 'react'
import { Card } from 'react-bootstrap'

export default function ContactCard({data}) {
  return (
    <>
      {data.map((item,index) => {
        return (
          <div className={`${index === 0 ? 'col-lg-12' : "col-lg-6"}`}>
            <Card  key={index} className={`border-0 icon-shadow `}>
            <Card.Body >
                <Card.Title className='mb-3 icon-contact c-my-primary rounded-circle mx-auto p-2'>{item.icon}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-4">{item.title}</Card.Subtitle>
                <Card.Text>
                {item.text}
                </Card.Text>
            </Card.Body>
            </Card>
          </div>
            
        )
      })}
    </>
  )
}

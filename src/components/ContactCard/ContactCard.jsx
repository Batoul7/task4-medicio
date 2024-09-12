import React from 'react'
import { Card } from 'react-bootstrap'

export default function ContactCard({icon, title, text}) {
  return (
    <div>
        <Card className='border-0 icon-shadow'>
        <Card.Body>
            <Card.Title className='mb-3 icon-contact c-my-primary rounded-circle mx-auto p-2'>{icon}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted fs-4">{title}</Card.Subtitle>
            <Card.Text>
            {text}
            </Card.Text>
        </Card.Body>
        </Card>

    </div>
  )
}

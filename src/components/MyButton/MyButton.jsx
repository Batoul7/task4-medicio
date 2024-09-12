import React from 'react'
import { Button } from 'react-bootstrap'

export default function MyButton({border, text}) {
  return (
    <>
    {border ? 
      (
        <Button variant="outline-light" className='btn-lg bg-my-primary'>{text}</Button>
      ) : (
        <Button variant="primary" className='btn-sm bg-my-primary border-0 p-2'>{text}</Button>
      )
    }
    </>     
     
  )
}

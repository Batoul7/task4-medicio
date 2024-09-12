import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import MyButton from '../MyButton/MyButton'

export default function ContactForm() {
  return (
        <Form className='icon-shadow h-100'>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Row className="p-3"> 
                <div className='row g-3'>
                    <Col className="col-12 col-lg-6">
                        <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        className='rounded-0' />
                    </Col>
                    <Col className=" col-12 col-lg-6">
                        <Form.Control 
                        type="email" 
                        placeholder="Your Email" 
                        className='rounded-0' />
                    </Col>
                    <Col className="col-12">
                        <Form.Control 
                        type="text" 
                        placeholder="Subject" 
                        className='rounded-0'/>
                    </Col>
                    <Col className="col-12">
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder='Message'
                        className='rounded-0'/>
                    </Col>
                </div>
                <div className='col-3 mx-auto mt-3'>
                    <MyButton text={"Send Message"} border={false}/>
                </div>
            </Row>
           
            
            </Form.Group>
        </Form>
  )
}

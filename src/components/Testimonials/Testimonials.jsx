import React, { useState } from 'react'
import Title from '../Title/Title'
import { TestCardData } from '../../Data/TestCardData'
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [activeCardIndex, setactiveCardIndex] = useState(0);

    const cardsPerSlide = 3;
    const totalSlides = Math.ceil(TestCardData.length / cardsPerSlide);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const handleButtonClick = (cardIndex) => {
      setactiveCardIndex(cardIndex)
      const newIndex = Math.floor(cardIndex / cardsPerSlide);
      setIndex(newIndex);
  };

  return (
    <section className='pt-5 pb-5'>
        <Title name={"Testimonials"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
        <div className="container testimonials ">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
            {[...Array(totalSlides)].map((_, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                    <Row className=" p-2 h-100 d-flex flex-nowrap">
                        {TestCardData.slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide).map((item,index) => {
                            return (
                            <Col key={index} sm={4} className='d-inline-block' style={{ flex: '0 0 auto', maxWidth: '100%' }}>
                                <Card  className='border-0 shadow p-0 rounded h-100 w-100'>
                                <Card.Body className='p-0'>
                                <Card.Title className='fs-6 p-3 pb-5 bg-body-secondary rounded'>
                                    <span className=" c-my-primary"><FaQuoteLeft/></span>
                                    <span className='p-1 lh-base text-color'>{item.quote}</span>
                                    <span className=" c-my-primary"><FaQuoteRight/></span>
                                </Card.Title>
                                <div className="Test-img">
                                    <img src={item.img} alt="" 
                                        className='w-25 rounded-circle border border-5 border-light'
                                        style={{margin:"-40px 0 0 20px"}} />
                                </div>
                                <Card.Subtitle className="mt-2 mb-2 p-4 text-muted">
                                    <h4>{item.name}</h4>
                                    <Card.Text>
                                    {item.text}
                                    </Card.Text>
                                </Card.Subtitle>
                                </Card.Body>
                                </Card>
                            </Col>      
                            )})}
                        </Row>
                    </Carousel.Item>))}
        </Carousel>
        <div className="slider-button d-flex justify-content-center mt-3">
            {TestCardData.map((_, cardIndex) => (
                <Button size='sm'
                    key={cardIndex} 
                    variant="light" 
                    onClick={() => handleButtonClick(cardIndex)} 
                    className={` mx-1 rounded-circle custom-button border-my-primary ${activeCardIndex === cardIndex ? 'active' : ''}`}
                />
            ))}
        </div>
        </div>       
    </section>
)
}
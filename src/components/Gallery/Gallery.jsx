import React, { useState } from 'react'
import Title from '../Title/Title'
import './Gallery.css'
// images 
import image1 from './../../assets/images/gallery/gallery-1.jpg'
import image2 from './../../assets/images/gallery/gallery-2.jpg'
import image3 from './../../assets/images/gallery/gallery-3.jpg'
import image4 from './../../assets/images/gallery/gallery-4.jpg'
import image5 from './../../assets/images/gallery/gallery-5.jpg'
import image6 from './../../assets/images/gallery/gallery-6.jpg'
import image7 from './../../assets/images/gallery/gallery-7.jpg'
import image8 from './../../assets/images/gallery/gallery-8.jpg'
import { Button, Carousel, Col, Row } from 'react-bootstrap';

export default function Gallery() {
   const images = [image1,image2,image3,image4,image5,image6,image7,image8]
   const [index, setIndex] = useState(0);
   const [activeImgIndex, setactiveImgIndex] = useState(0);
 
     const ImgsPerSlide = 3;
     const totalSlides = Math.ceil(images.length / ImgsPerSlide);
 
     const handleSelect = (selectedIndex) => {
         setIndex(selectedIndex);
     };
     const handleButtonClick = (cardIndex) => {
       setactiveImgIndex(cardIndex)
       const newIndex = Math.floor(cardIndex / ImgsPerSlide);
       setIndex(newIndex);
   };
  return (
    <section className='pt-5 pb-5 position-relative '>
      <Title name={"Gallery"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
      <div className="container pt-5">

      { <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
            {[...Array(totalSlides)].map((_, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                    <Row className="row-cols-3 row-cols-sm-1 d-flex flex-nowrap">
                        {images.slice(slideIndex * ImgsPerSlide, slideIndex * ImgsPerSlide + ImgsPerSlide).map((item,index) => {
                            return (
                            <Col key={index} sm={4} className='d-inline-block' style={{ flex: '0 0 auto', maxWidth: '100%' }} >
                                  <img key={index} src={item} alt='slide-img' 
                                  className={`w-100 h-100 p-1 ${activeImgIndex === index ? 'border-4-primary ' : ''}`}/>  
                            </Col>     
                            )})}
                        </Row>
                    </Carousel.Item>))}
        </Carousel> }
        <div className="slider-button d-flex justify-content-center mt-3">
            {images.map((_, cardIndex) => (
                <Button size='sm'
                    key={cardIndex} 
                    variant="light" 
                    onClick={() => handleButtonClick(cardIndex)} 
                    className={` mx-1 rounded-circle custom-button border-my-primary ${activeImgIndex === cardIndex ? 'active' : ''}`}
                />
            ))}
        </div>
      </div>
    
    </section>
  )
}
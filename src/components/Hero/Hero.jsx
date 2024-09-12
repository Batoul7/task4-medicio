import React from 'react'
import { Carousel } from 'react-bootstrap';
import Hero1 from './../../assets/images/hero-carousel/hero-carousel-1.jpg'
import Hero2 from './../../assets/images/hero-carousel/hero-carousel-2.jpg'
import Hero3 from './../../assets/images/hero-carousel/hero-carousel-3.jpg'
import MyButton from '../MyButton/MyButton';
import './Hero.css'

function Hero() {
  const data = [
    {
      img:Hero1,
      alt:"First slide",
      h:"Welcome to Medicio",
      p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore officia consectetur laborum facere impedit cupiditate natus laudantium! Id sit tenetur.",
    },
    {
      img:Hero2,
      alt:"Second slide",
      h:"Welcome to Medicio",
      p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore officia consectetur laborum facere impedit cupiditate natus laudantium! Id sit tenetur.",
    },
    {
      img:Hero3,
      alt:"Third slide",
      h:"Temporibus autem quibusdam",
      p:" Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
    },
  ]
  return (
    <div id='Home'>
      <Carousel>
        {data.map((item,index)=> {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 height-hero object-fit-cover "
                src={item.img}
                alt={item.alt}
              />
              <Carousel.Caption className='p-3 bg-white position-absolute top-50 start-50 translate-middle w-75 text-secondary my-border-top h-fit-content'>
                <h1 className='mb-4'>{item.h}</h1>
                <p>{item.p}</p>
                <MyButton text={"Read More"}/>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero;
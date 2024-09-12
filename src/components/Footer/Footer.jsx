import React, { useEffect, useState } from 'react'
import './Footer.css'
import { FaArrowUp, FaXTwitter } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterData } from '../../Data/FooterData'
import { Button, Col, Row } from 'react-bootstrap'

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const icons = [
        {
            name:<FaXTwitter/>,
            href:"https://x.com"
        },
        {
            name:<FaFacebook/>,
            href:"https://facebook.com"
        },
        {
            name:<FaInstagram/>,
            href:"https://instagram.com"
        },
        {
            name:<FaLinkedin/>,
            href:"https://linkedin.com"
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (document.documentElement.scrollTop > 700) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };

  return (
    <footer className='bg-section pt-5 pb-5 text-color'>
        <div className="container">
            <Row >
                <Col>
                    <h3 className='mb-3'>Medicio</h3>
                    <p className='mb-0'>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p className='mt-3 mb-0'><strong>Phone: </strong>+1 5589 55488 55</p>
                    <p><strong>Email: </strong>info@example.com</p>
                    <div className="social d-flex mt-4">
                        {icons.map((item,index)=> {
                            return (
                                <a key={index} href={item.href} 
                                className='social-icon text-color d-flex align-items-center justify-content-center rounded-circle me-1 border'>
                                {item.name}</a>) })}
                    </div>
                </Col>
                {FooterData.map((item,index)=> {
                    return (
                        <Col key={index} sm={12} md={4} xl={2} className='gy-4' >
                            <h5 className='mb-3'>{item.h}</h5>
                            <ul className='list p-0 '>
                                <li className='mb-1'><a href="#">{item.list.link1}</a></li>
                                <li className='mb-1'><a href="#">{item.list.link2}</a></li>
                                <li className='mb-1'><a href="#">{item.list.link3}</a></li>
                                <li className='mb-1'><a href="#">{item.list.link4}</a></li>
                                <li className='mb-1'><a href="#">{item.list.link5}</a></li>
                            </ul>
                        </Col>)
                })}
            </Row>
            <Row className="copyright text-center mt-4 border-1 border-top">
                <p className='mt-3 mb-1'> &copy; Copyright <strong>Medicio</strong> All Rights Reserved</p>
                <span>Designed by <a href="#" className='c-my-primary'>BootstrapMade</a></span>
            </Row>
        </div>  
        <Button
            className={`btnTop text-light rounded p-3 position-fixed bg-my-primary border-0 ${isVisible ? 'd-block' : 'd-none'}`}
            onClick={scrollToTop}>
            <FaArrowUp />
        </Button>
    </footer>
  )
}

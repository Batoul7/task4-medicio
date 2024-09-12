import React from 'react'
import FeaturesImg from './../../assets/images/img/features.jpg'
import './Features.css'
import FeaturesBox from '../FeaturesBox/FeaturesBox'
import { FeaturesBoxData } from '../../Data/featuresBoxData'

export default function Features() {
  return (
    <div className="content-about container pt-3">
        <div className="row gy-4">
            <div className="col-xl-6 position-relative ">
              <img src={FeaturesImg} alt="features img" className='w-100 h-100' />
            </div>
            <div className="features col-xl-6">
              <h3 className='position-relative pb-3'>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
              <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
              <FeaturesBox data={FeaturesBoxData}/>
            </div>
      </div>
    </div>
  )
}

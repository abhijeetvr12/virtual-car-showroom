import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import {mens_kurta} from '../../../Data/mens_kurta'
const Homepage = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Sports Car"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"SUV"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"HatchBag"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Sedan"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Pickup Truck"}/>
            
        </div>
    </div>
  )
}

export default Homepage
import React from 'react'
import { mainCaroseldata } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarosel = () => {
    const items = mainCaroseldata.map((item)=><img style={{ height:"85vh", width:"100vw"}}  className='cursor-pointer -z-10' role='presentation'  src={item.image} alt=""/>)
  return (
    <AliceCarousel
        // animationType="fadeout" 
        // animationDuration={800}
        disableButtonsControls
        
        items={items}
        // mouseTracking
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
  )
}

export default MainCarosel
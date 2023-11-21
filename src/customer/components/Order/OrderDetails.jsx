import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-20 lg:px-20'>
        <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className=' space-y-5 ' container>
        {[1,1,1,1,1].map((item)=> <Grid item container className=' shadow-xl rounded-md p-5 border ' sx={{alignItems:"center", justifyContent:"space-between" }}>
                    <Grid item xs={6}>
                           <div className='flex items-center space-x-4 '>
                            <img className='w-[8rem] h-[5rem] object-cover object-top' src="https://media.istockphoto.com/id/1189903200/photo/red-generic-sedan-car-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=uRu3o_h5FVljLQHS9z0oyz-XjXzzXN_YkyGXwhdMrjs=" alt="" />
                           
                           <div className=' space-y-2 ml-5 '>
                            <p className=' font-semibold '>2023 Farrari GT</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold ' ><span>Color: red</span> <span>Size: M</span></p>
                            <p>Seller: Nexus</p>
                            <p>$12442</p>

                           </div>
                           </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 '></StarBorderIcon>
                            <span>Rate & Review Product </span>

                            
                        </Box>
                    </Grid>
                   </Grid>)}
                   
        </Grid>
        
    </div>
  )
}

export default OrderDetails
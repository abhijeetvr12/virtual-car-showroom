import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
           <Grid item xs={6} >
               <div className='flex cursor-pointer'>
                <img className='w-[8rem] h-[5rem] object-cover object-top ' src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?s=2048x2048&w=is&k=20&c=ujAD8tOtX3keHXDCKQE3wgUZL4ohl6AQkGF06m0MziE=" alt="" />
               </div>
               <div className='ml-5 space-y-2'>
                <p className=' '>Stanard Gt farrari</p>
                <p className=' opacity-50 text-xs font-semibold ' >Size:M</p>
                <p  className=' opacity-50 text-xs font-semibold ' >Color:Black</p>
               </div>
           </Grid>
           <Grid item xs={2}>
            <p>$214215</p>
           </Grid>
           <Grid item xs={4}>
            {true && <div>
              <p>
            <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2  text-sm"/>
              <span>
                Delivered On May 12
              </span>
              
            </p>
            <p className='text-xs'>
            
                Your Item has been Delivered
              
            </p>
            </div> }
            {false && <p>
              <span>
                Expected Delivery On May 08
              </span>
            </p>}
           </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard
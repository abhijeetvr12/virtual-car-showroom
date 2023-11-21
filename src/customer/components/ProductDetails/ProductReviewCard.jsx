import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>

                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Ram</p>
                        <p className='opacity-70'>may 12,2023</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
                <p >Its latest avtar is now more wider and longer and is one of the most modern looking SUV. Its dashboard design is really nice and the seats are highly supportive. It has a spacious and comfortable cabin and comes with the three engine option and gives most powerful engine.</p>

            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard
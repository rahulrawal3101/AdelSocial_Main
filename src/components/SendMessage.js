import { Grid, Typography, Button, Container } from '@mui/material'
import React from 'react'
import { MOBILE, SECONDARY_COLOR } from '../constant'
import '../pages/Homepage.css'

const SendMessage = () => {


    return (
        <Grid container sx={{ bgcolor: 'black', mb: '0px', p: '50px' }}>

            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

                <Grid item lg={7} xs={12} sx={{ pl: { lg: '60px', xs: '0px' }, display: 'flex', flexDirection: 'column', alignItems: { lg: 'flex-start', xs: 'center' }, justifyContent: 'center' }}>

                    <Typography variant='h5' textAlign={'center'} sx={{ color: SECONDARY_COLOR, fontWeight: 'normal' }}>Ready To Speak With an Expert? Call us at</Typography>
                    <a href={`tel:+91 ${MOBILE}`} style={{ textDecoration: 'none', }}>
                        <Typography textAlign="center" sx={{ fontSize: { lg: '29px', xs: '20px' }, color: '#fff', fontWeight: 900 }}> +91 9773926687</Typography>
                    </a>
                </Grid>
                <Grid item lg={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant='contained' sx={{ mt: { xs: '10px', lg: 0 }, padding: { lg: '20px 40px', xs: '10px 20px' }, borderRadius: '10px' }} >Send us a Message</Button>
                </Grid>
            </Container>
        </Grid >
    )
}

export default SendMessage
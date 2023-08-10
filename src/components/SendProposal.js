import { Grid, Typography, Button, Container } from '@mui/material'
import React from 'react'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant'
import ProposalInput from '../global/ProposalInput'
import first from '../assets/first.svg'
import second from '../assets/second.svg'
import third from '../assets/third.svg'
import fourth from '../assets/fourth.svg'
import fifth from '../assets/five.svg'
import '../pages/Homepage.css'

const SendProposal = () => {
    const reviews = [{ title: "Thousands of successfully completed project", icon: first }, { title: "Data-driven & well thought-proven strategies", icon: second },
    { title: "98% Five star reviews from the client", icon: third }, { title: "Helped businesses in a variety of industries to reach their target audiences", icon: fourth },
    { title: "Dedicated to providing quality service and customer satisfaction.", icon: fifth }].map((item, index) => {
        return <Grid key={index} item sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: { lg: '90px', md: '90px' }, pl: '80px', width: { lg: '100%', md: '100%', sm: '50%', xs: '50%' } }}>
            <img src={item.icon} alt="icons" />
            <Typography variant='subtitle1' sx={{ color: 'white' }}>{item.title}</Typography>
        </Grid>
    })

    return (
        <Grid container sx={{ bgcolor: '#313535', mb: '60px', p: '20px' }}>
            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item className='mainSendArea' sx={{ p: { xs: '0rem', lg: '4rem', md: '4rem', sm: '4rem' }, width: { lg: '50%', md: '50%', sm: '100%', xs: '100%' } }}>
                    <Typography textAlign={'center'} variant='h3' sx={{ color: SECONDARY_COLOR, fontWeight: 900 }}>
                        Adelsocial: <span style={{ color: MAIN_COLOR }}>Empowering</span> Your Digital Vision
                    </Typography>
                    <Typography textAlign={'center'} variant='body1' sx={{ mb: '10px', color: SECONDARY_COLOR, fontWeight: 500, fontFamily: 'sans' }}>
                        Let's Create Your App and Website Together!
                    </Typography>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: '30px' }}>
                        <ProposalInput style={{ width: { md: '100%', lg: '80%', sm: '100%', xs: '100%' }, color: 'white' }} />
                    </Grid>
                </Grid>

                <Grid container className='sideTexts' sx={{ width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' }, display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column' }, justifyContent: 'center' }}>
                    {reviews}
                </Grid>
            </Container>
        </Grid>
    )
}

export default SendProposal
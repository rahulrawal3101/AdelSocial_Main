import '../pages/Homepage.css'
import { Container, Grid, Typography } from '@mui/material'
import mobileapp from '../assets/mobileapp.png'
import web from '../assets/webapp.png'
import landing from '../assets/landing.png'
import webdev from '../assets/webdev.png'
import { useContext } from 'react'
import { AdelContext } from '../store/Context'
import SectionHead from '../global/SectionHead'

const WhyUs = () => {
    const { state } = useContext(AdelContext)
    const services = [
        { title: 'App Development', icon: mobileapp, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." },
        { title: 'Landing Page Design', icon: landing, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." },
        { title: 'Web Design ', icon: web, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." },
        { title: 'Web Development', icon: webdev, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." }].map((item) => {
            return <Grid lg={5} md={5} sm={5} className='servicesBox' item key={item.title} sx={{ backgroundImage: `url(${item.icon})`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: '20px', borderRadius: '30px', m: '0px 20px 20px 0px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Typography className='servicesBoxhead' variant='h1' sx={{ fontSize: { lg: '28px', md: '28px', sm: '20px' }, fontWeight: 900, color: 'white', m: '0px 0px 30px 20px' }}>{item.title}</Typography>
                <Typography className='servicesBoxpara' paragraph sx={{ m: '-20px 0px 0px 20px', color: 'white', fontSize: { lg: '16px', md: '14px', sm: '12px' } }} >{state.currentScreenSize < 700 ? item.desc.slice(0, 100) + '...' : item.desc}</Typography>
            </Grid>
        })


    return (
        <Grid container className='serviceSection' sx={{ p: { xs: '60px 10px', lg: '60px 20px', md: '60px 20px', sm: '60px 20px' } }}>
            <SectionHead title={"SERVICES"} tagline={"Make a customer, not a sale."} />

            <Grid container className='servicesSectionMiddle' sx={{ borderRadius: { xs: '20px', lg: '90px', sm: '90px', md: '90px' }, p: { xs: '10px', lg: '20px', md: '20px', sm: '20px' }, pl: { xs: '30px', lg: '45px' }, justifyContent: 'space-evenly', alignItems: 'center' }} >
                <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    {services}
                </Container>
            </Grid>
        </Grid>
    )
}

export default WhyUs
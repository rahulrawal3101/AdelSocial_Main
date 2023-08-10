import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import team from '../assets/team.svg';
import first from '../assets/firstal.svg'
import web from '../assets/web.svg';
import email from '../assets/email.svg';
import seo from '../assets/seo.svg';
import years from '../assets/years.svg';
import mobileapp from '../assets/mobileapp.png'
import web1 from '../assets/webapp.png';
import landing from '../assets/landing.png'
import webdev from '../assets/webdev.png'
import "react-multi-carousel/lib/styles.css";
import Header from '../components/Header';
import SidebarDrawer from '../global/SidebarDrawer';
import Footer from '../components/Footer';
import { MAIN_COLOR } from '../constant';
import { AdelContext } from '../store/Context';
import SendMessage from '../components/SendMessage';
import { Button } from '@mui/material';
import aboutimg from '../assets/aboutbanner.jpg';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import adelteam from '../assets/adelteam.jpg';

const data = [
    {
        logo: team,
        number: '16+',
        text: 'Team Member'
    },
    {
        logo: first,
        number: '41',
        text: 'First Position'
    },
    {
        logo: email,
        number: '76',
        text: 'Email Campaigns'
    },
    {
        logo: seo,
        number: '96',
        text: 'SEO Campaigns'
    },
    {
        logo: years,
        number: '12',
        text: 'Years In Marketing'
    },
    {
        logo: web,
        number: '143',
        text: 'Web Analytics'
    }
]

const About = () => {
    const { state, dispatch } = useContext(AdelContext)
    const services = [
        { title: 'App Development', icon: mobileapp, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." },
        { title: 'Landing Page Design', icon: landing, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." },
        { title: 'Web Design ', icon: web1, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." },
        { title: 'Web Development', icon: webdev, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality." }].map((item) => {
            return <Grid lg={5} md={5} sm={5} xs={12} className='servicesBox' item key={item.title} sx={{ backgroundImage: `url(${item.icon})`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: '20px', borderRadius: '30px', m: '0px 20px 20px 0px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Typography className='servicesBoxhead' variant='h1' sx={{ fontSize: { lg: '25px', md: '25px', sm: '18px' }, fontWeight: 900, color: 'white', m: '0px 0px 30px 20px' }}>{item.title}</Typography>
                <Typography className='servicesBoxpara' paragraph sx={{ m: '-20px 0px 0px 20px', color: 'white', fontSize: { lg: '15px', md: '14px', sm: '12px' } }} >{state.currentScreenSize < 700 ? item.desc.slice(0, 100) + '...' : item.desc}</Typography>
            </Grid>
        })

    return (

        <div onClick={() => { if (state.drawer_opened) { dispatch({ type: 'DRAWER_CLICKED', payload: true }) } }} >
            <Header />
            <SidebarDrawer currentPage="about" />
            <Container disableGutters maxWidth={false}>


                <Grid container sx={{ height: 'fit-content', padding: { lg: '200px 100px', xs: '100px 20px' }, backgroundImage: `url(${aboutimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgb(80,80,80)', backgroundBlendMode: 'multiply', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Grid item xs={12} lg={4} sx={{ height: '300px', mb: { xs: '40px', lg: '0px', sm: '0px', md: '0px' } }}>
                        <Grid container >
                            <Grid item xs={12} sx={{ borderLeft: `5px solid ${MAIN_COLOR}`, padding: '10px' }}>
                                <Typography variant='h1' sx={{ fontSize: { lg: '40px', xs: '20px' }, color: 'white', fontWeight: '600' }}>
                                    About Our  AdelSocial <br />IT Company
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '12px' }}>
                                <Typography sx={{ color: 'white', fontSize: '17px', }}>Adelsocial is a privately owned one-stop solution for IT services formed in 2020. We at Adel social have a specialized team of expert IT engineers ... </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '15px' }}>
                                <Button variant='contained' sx={{ color: 'white' }}>View our work</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ height: 'fit-content' }}>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography sx={{ color: MAIN_COLOR, fontSize: '35px', fontWeight: '600', }}>What We Do</Typography>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ alignItems: 'center' }}>
                            <OpenInBrowserIcon sx={{ color: MAIN_COLOR, fontSize: '45px', mr: '20px' }} />
                            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: "600" }}>Build Website</Typography>
                            <Typography sx={{ color: 'white', fontSize: '15px' }}>We at Adel social work dedicatedly, with a well organised team of skilled IT engineers.</Typography>
                        </Grid>
                        <Grid container sx={{ alignItems: 'center' }}>
                            <AppSettingsAltIcon sx={{ color: MAIN_COLOR, fontSize: '45px', mr: '20px' }} />
                            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: "600" }}>Build Website</Typography>
                            <Typography sx={{ color: 'white', fontSize: '15px' }}>We at Adel social work dedicatedly, with a well organised team of skilled IT engineers.</Typography>
                        </Grid>
                        <Grid container sx={{ alignItems: 'center' }}>
                            <BlurOnIcon sx={{ color: MAIN_COLOR, fontSize: '45px', mr: '20px' }} />
                            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: "600" }}>Build Website</Typography>
                            <Typography sx={{ color: 'white', fontSize: '15px' }}>We at Adel social work dedicatedly, with a well organised team of skilled IT engineers.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={12} sx={{ bgcolor: 'black', height: '470px', textAlign: "center", padding: '20px 25px' }}>
                        <Typography variant='h1' sx={{ color: 'white', fontSize: { lg: '41px', xs: '20px' }, fontWeight: '600', mt: '15px' }}>LET'S REALISE YOUR <br /><span style={{ color: MAIN_COLOR }}>DIGITAL</span> BUSINESS NOW</Typography>
                        <hr></hr>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Typography sx={{ color: 'grey', fontSize: '15px', mt: '5px' }}>HOW LONG IS YOUR EXPEREIENCE</Typography>
                            <Typography sx={{ color: 'grey', fontSize: '15px', mt: '5px' }}>WE HAVE 10 YEARS EXPEREIENCE</Typography>
                        </Box>

                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item xs={9.5} sx={{ height: { lg: '430px', xs: '320px' }, mt: '-15rem', backgroundBlendMode: 'multiply', backgroundImage: `url(${adelteam})`, borderRadius: '20px', backgroundSize: { lg: 'cover', xs: '300px 300px' }, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                            {/* <img src={adelteam} alt='team' height={'100%'} width={'100%'} style={{ borderRadius: '20px' }} /> */}

                        </Grid>

                        <Grid item xs={9.5} sx={{ mt: '20px' }}>
                            <Grid container sx={{ padding: '10px 0px', borderRadius: "20px", border: '3.5px solid black', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                                <Grid item lg={3} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '25px', sm: '22px', xs: '23px' }, fontWeight: '600', color: MAIN_COLOR }}>Our Milestone</Typography>

                                </Grid>
                                <Grid item lg={2} md={3} sm={3} xs={3} sx={{ textAlign: 'center', border: '2px solid black', borderRadius: '20px', mr: '6px', padding: '10px' }}>
                                    <Typography sx={{ fontSize: { lg: '25px', md: '22', sm: '20px', xs: '18px' }, fontWeight: '600' }}>300<span style={{ color: MAIN_COLOR }}>+</span></Typography>
                                    <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '12px', xs: '10px' } }}>Product</Typography>
                                </Grid>
                                <Grid item lg={2} md={3} sm={3} xs={3} sx={{ textAlign: 'center', border: '2px solid black', borderRadius: '20px', mr: '6px', padding: '10px' }}>
                                    <Typography sx={{ fontSize: { lg: '25px', md: '22', sm: '20px', xs: '18px' }, fontWeight: '600' }}>300<span style={{ color: MAIN_COLOR }}>+</span></Typography>
                                    <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '12px', xs: '10px' } }}>Testimonials</Typography>
                                </Grid>
                                <Grid item lg={2} md={3} sm={3} xs={3} sx={{ textAlign: 'center', border: '2px solid black', borderRadius: '20px', mr: '6px', padding: '10px' }}>
                                    <Typography sx={{ fontSize: { lg: '25px', md: '22', sm: '20px', xs: '18px' }, fontWeight: '600' }}>300<span style={{ color: MAIN_COLOR }}>+</span></Typography>
                                    <Typography sx={{ color: 'grey', fontSize: { lg: '15px', md: '14px', sm: '12px', xs: '10px' } }}>Experience</Typography>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>



                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: '#f8f8f8', padding: '10px', bgcolor: '#080808', mt: '10px' }}>
                    <Grid item lg={4.5} md={4.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', color: MAIN_COLOR }}>Who Are We?</Typography>
                        <Typography variant='subtitle2' sx={{ fontSize: { lg: '16px', md: '16px', sm: '16px', xs: '16px', }, textAlign: 'center', mt: '20px', color: 'white' }}>AdelSocial is a privately owned IT Support and IT Services business formed in 2020. Today we’re proud to boast a strong team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs.
                            Our vertical solutions expertise allows your business to streamline workflow, and increase productivity. No matter the business, AdelSocial has you covered with industry-compliant solutions, customized to your company’s specific needs.</Typography>

                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '8px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '350px' }, borderRadius: { lg: '15%', md: '15%', sm: '10%', xs: '10px' }, mt: '25px' }}>
                            <img src={adelteam} alt='meeting' width={'100%'} height={'95%'} style={{ borderRadius: '10%' }} />

                        </Box>

                    </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '10px', bgcolor: '#080808' }}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: { lg: 'none', md: 'none', sm: 'flex', xs: 'flex' }, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', }}>
                        <Typography variant='h2' sx={{ fontSize: '28px', fontWeight: '600', m: '20px', color: MAIN_COLOR }}>OUR VISION</Typography>

                        <Typography sx={{ fontSize: { lg: '16px', md: '16px', sm: '16px', xs: '16px' }, textAlign: 'center', fontFamily: 'Comfortaa", cursive', mt: '20px', color: 'white' }}>We have established ourselves as an effusive IT agency that strives to value ethics, commitment, and quality to our clients. We are constantly working to maintain our positions as best and to elevate ourselves by providing exceptional services.
                        </Typography>

                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '15px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: '350px', borderRadius: '10%' }}>
                            <img src={adelteam} alt='meeting' width={'100%'} height={'100%'} style={{ borderRadius: '10%' }} />


                        </Box>


                    </Grid>
                    <Grid item lg={4.5} md={5} sm={12} xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', }}>
                        <Typography variant='h4' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', m: '20px', color: MAIN_COLOR }}>OUR VISION</Typography>

                        <Typography sx={{ fontSize: { lg: '16px', md: '16px', sm: '16px', xs: '16px' }, textAlign: 'center', fontFamily: 'Comfortaa", cursive', mt: '20px', color: 'white' }}>We have established ourselves as an effusive IT agency that strives to value ethics, commitment, and quality to our clients. We are constantly working to maintain our positions as best and to elevate ourselves by providing exceptional services.
                        </Typography>

                    </Grid>

                </Grid >
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: '#f8f8f8', padding: '10px', bgcolor: '#080808' }}>
                    <Grid item lg={4.5} md={4.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h1' sx={{ fontSize: { lg: '35px', md: '35px', sm: '35px', xs: '30px' }, fontWeight: '600', color: MAIN_COLOR }}>What do we provide? </Typography>
                        <Typography variant='subtitle2' sx={{ fontSize: { lg: '16px', md: '16px', sm: '16px', xs: '16px', }, textAlign: 'center', mt: '20px', color: 'white' }}>We at Adel social work dedicatedly, with a well organised team of skilled IT engineers. We are known for our enthusiasm for technical usability and accessibility, the two main pillars of any business.
                            We are perfectly positioned to help our audience reach their end goods successfully. We ensure standard optimization and uplift your customer base widely in one turn.</Typography>

                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '10px' } }} >
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '350px' }, borderRadius: '10%' }}>
                            <img src={adelteam} alt='meeting' width={'100%'} height={'100%'} style={{ borderRadius: '10%' }} />

                        </Box>

                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: 'black', padding: '20px 0px', }}>
                    <Grid item xs={12} sx={{ mt: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                        <Typography variant='h4' sx={{ fontSize: { lg: '38px', md: '35px', sm: '30px', xs: '28px' }, fontWeight: '600', fontFamily: 'Comfortaa", cursive', color: MAIN_COLOR }}>OUR HISTORY</Typography>
                        <Typography variant='h5' sx={{ fontSize: '25px', fontWeight: '600', color: 'white', mt: '5px' }}>2020 - 2023</Typography>
                        <Typography variant='h5' sx={{ fontSize: '20px', color: 'white', textAlign: 'center', mt: '10px', padding: '0px 5px' }}>AdelSocial is The most respected Internet marketing agency. We want to change the way businesses speak, listen and share online.</Typography>
                        <Typography variant='h5' sx={{ fontSize: { lg: '23px', md: '20px', sm: '19px', xs: '18px' }, color: 'white', mt: '30px' }}>Outreach by the Numbers</Typography>

                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px 0px' }}>
                        {
                            data.map((ele) => {
                                return (
                                    <Grid item lg={1.8} md={2.5} sm={3} xs={5} sx={{ m: '10px', mt: '3rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', border: '1px solid white', borderRadius: '30px', height: { lg: '220px', md: '220px', sm: '200px', xs: '200px' }, boxShadow: '0px 0px 9px -1px rgba(245,245,245);' }}>
                                        <Box sx={{ width: { lg: '70px', md: '70px', sm: '60px', xs: '60px' }, height: { lg: '70px', md: '70px', sm: '60px', xs: '60px' } }}>

                                            <img src={ele.logo} alt='team' height={'100%'} width={'100%'} />
                                        </Box>
                                        <Typography variant='h4' sx={{ fontSize: { lg: '35px', md: '30px', sm: '28px', xs: '24px' }, fontWeight: '600', color: 'white', textAlign: 'center' }}>{ele.number}</Typography>
                                        <Typography sx={{ fontSize: { lg: '21px', md: '21px', sm: '19px', xs: '18px', textAlign: 'center', textAlign: 'center' }, color: MAIN_COLOR, padding: '0px 2px' }}>{ele.text}</Typography>

                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                </Grid>
                <Grid container sx={{ bgcolor: 'black' }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h4' sx={{ fontSize: { lg: '38px', md: '35px', sm: '30px', xs: '28px' }, fontWeight: '600', fontFamily: 'Comfortaa", cursive', color: MAIN_COLOR }}>Servives</Typography>
                        <Typography sx={{ fontSize: { lg: '25px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: '600', fontFamily: 'Comfortaa", cursive', color: 'white' }}>Make a customer, not a sale.</Typography>
                    </Grid>

                    <Grid container className='servicesSectionMiddle' sx={{ borderRadius: { xs: '20px', lg: '90px', sm: '90px', md: '90px' }, p: { xs: '10px', lg: '20px', md: '20px', sm: '20px' }, pl: { xs: '30px', lg: '45px' }, justifyContent: 'space-evenly', alignItems: 'center' }} >
                        <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                            {services}
                        </Container>
                    </Grid>
                </Grid>

                <SendMessage />
                <Footer />
            </Container>
        </div>

    )
}

export default About
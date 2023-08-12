import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import bg from '../assets/bg.png'
import { Grid } from '@mui/material'
import BannerText from '../components/BannerText'
import { AdelContext } from '../store/Context'
import WhyUs from '../components/WhyUs'
import WebHosting from '../components/WebHosting'
import Footer from '../components/Footer'
import SendProposal from '../components/SendProposal'
import OurExpertise from '../components/ OurExpertise'
import SendMessage from '../components/SendMessage'
import './Homepage.css'
import CustomModal from '../global/Modal'

import SideDrawer from '../components/SideDrawer'

const Homepage = () => {
    const { dispatch } = useContext(AdelContext)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'MODAL_ACTION', payload: true })
        }, 4000)
    }, [])

    return (
        <>
            <CustomModal />
            <Grid container className='mainboxHomepage' sx={{ p: '100px', pb: { lg: '30px', xs: '10px', sm: '30px', md: '30px' }, backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Grid item>
                    <Header />
                </Grid>
                <SideDrawer />
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
                    <BannerText />
                </Grid>
            </Grid>
            <WhyUs />
            <SendProposal />
            <OurExpertise />
            <WebHosting />
            <SendMessage />
            <Footer />
        </>
        // </div>
    )
}

export default Homepage
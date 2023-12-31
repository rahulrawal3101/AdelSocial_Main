import Diversity1Icon from '@mui/icons-material/Diversity1'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HubIcon from '@mui/icons-material/Hub'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import background8 from '../../assets/background-8.png'
import core from '../../assets/corestrenth.jpg'
import hiring from '../../assets/hiring-modal-one.jpg'
import hiring3 from '../../assets/hiring-modal-three.jpg'
import hiring2 from '../../assets/hiring-modal-two.png'
import react from '../../assets/reactjs.png'
import vector from '../../assets/vacter_right.png'
import web from '../../assets/web-design.jpg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MAIN_COLOR } from '../../constant'


const ReactFrontend = () => {
    return (
        <>
            <Header />
            <Container disableGutters maxWidth="xl">
                <Grid container sx={{ height: "400px", backgroundImage: `url(${react})`, bgcolor: 'rgb(90,90,90)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundBlendMode: "multiply" }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} sm={10} md={8} lg={7} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "100%", lineHeight: "7", p: "10px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "900", color: "white" }}>
                                Hire ReactJs Developer
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: { lg: "16px", xs: '12px', md: '16px' } }}>
                                Our ReactJs developers streamline your business with next-gen web app development services.
                                Take your business to new heights with our ReactJS app development services.
                            </Typography>
                            <Button variant='contained' sx={{ borderRadius: "25px", p: '10px 30px' }}>
                                Talk to Us
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ p: "20px" }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={1}></Grid>
                    <Grid item xs={12} md={5} lg={6}>
                        <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                            Hire ReactJS developer rather than building an in-house team
                        </Typography>
                        <Typography paragraph sx={{ mt: "10px", fontSize: "14px" }}>
                            If you desire to strengthen your business with a robust ecosystem that is light-weight, modern, and extensive, hire React JS developers with a stronghold on this platform. Many businesses are struggling to decide whether to choose an in-house team or hire a dedicated team. We suggest the latter option for businesses looking for a platform to avail the right skills and experience in a cost-effective way.
                        </Typography>
                        <Typography paragraph sx={{ fontSize: "14px" }}>
                            AdelSocial understands the unique requirements and core objectives of our valued clients. Being a top-notch provider, we offer outstanding ReactJS development services to businesses with varied shapes and sizes. Our agile work methodology in addition to extensive skills and experience with JS applications offer an edge over the others. Get the best resources working for your project, only at AdelSocial.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={5} lg={4} sx={{ p: "15px" }}>
                        <Box sx={{ height: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={web} height="100%" width="100%" alt='web' />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: "#002F96", p: "20px" }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={1}></Grid>
                    <Grid item xs={12} md={5} lg={5} sx={{ mt: "15px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ lineHeight: "2.5" }}>
                            <Typography sx={{ fontSize: "33px", fontWeight: "800", color: "white" }}>
                                Our Core Strength
                            </Typography>
                            <Typography sx={{ mt: "10px", fontSize: "20px", color: "white", fontWeight: "500" }}>
                                Our tech-driven ReactJS development team consist of :
                            </Typography>
                            <ul>
                                <li style={{ color: "white", fontSize: "17px" }}>Skilled professionals with extensive knowledge and cross-domain experience.</li>
                                <li style={{ color: "white", fontSize: "17px" }}>Successful track record with hundreds of ReactJS applications.</li>
                                <li style={{ color: "white", fontSize: "17px" }}>Varied engagement models to provide hourly, part-time, and full-time options.</li>
                                <li style={{ color: "white", fontSize: "17px" }}>Committed to deliver quality solutions within expected time frame.</li>

                            </ul>
                            <Button variant='contained' sx={{ mt: "10px", bgcolor: MAIN_COLOR, height: "50px", borderRadius: "25px", fontWeight: "800", p: '10px 30px' }}>
                                Talk to us
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4.4} sx={{ mt: "15px", display: "flex", justifyContent: "right", p: "15px" }}>
                        <Box sx={{ height: "300px", width: "70%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={core} height="100%" width="100%" alt='core' />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ mt: '20px' }}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "60%" }}>
                            <Typography align='center' sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Our Key Differentiators
                            </Typography>
                            <Typography align='center' sx={{ fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                We are a leading ReactJS development company in India that caters services for small to large business enterprises. What makes us stand apart is our competence, commitment, expertise, and experience.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} sm={12} md={10} lg={8} spacing={3}>
                            {
                                [1, 1, 1, 1, 1, 1].map(() => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} sx={{ mt: "30px" }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "15px" }} elevation={3}>
                                                <Box sx={{ bgcolor: "#f4f4f4", p: "13px", borderRadius: "100%", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <ImportantDevicesIcon sx={{ fontSize: "45px" }} />
                                                </Box>
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: "14px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
                <Grid container spacing={2} sx={{ bgcolor: "#002F96", p: "20px", mt: "20px" }}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" } }}>
                            <Typography align='center' sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Our Hiring Models
                            </Typography>
                            <Typography align='center' sx={{ color: "white", fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                Explore the engagement models we offer to hire React JS developer for your project         </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: "white" }}>
                                Hourly-Basis
                            </Typography>
                            <Typography sx={{ fontWeight: "400", fontSize: "18px", lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers ReactJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", p: "15px" }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring} height="100%" width="100%" alt='hire1'/>
                        </Box>
                    </Grid>




                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring2} height="100%" width="100%" alt='hire2' />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: "white" }}>
                                Part-Time Hiring
                            </Typography>
                            <Typography sx={{ fontWeight: "400", fontSize: "18px", lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers ReactJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: "white" }}>
                                Full-Time Hiring
                            </Typography>
                            <Typography sx={{ fontWeight: "400", fontSize: "18px", lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers ReactJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", p: "15px" }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring3} height="100%" width="100%" alt='hire3'/>
                        </Box>
                    </Grid>




                </Grid>
                <Grid container>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "60%" }}>
                            <Typography align='center' sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Our Hiring Process
                            </Typography>
                            <Typography align='center' sx={{ fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                Hire React Native Developer And/Or ReactJS Developer In A Few Simple Steps. Discover How Our Process Works.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} sm={12} md={10} lg={8} spacing={3}>
                            {
                                [1, 1, 1, 1].map(() => {
                                    return (
                                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "30px" }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "15px" }} elevation={3}>
                                                <Box sx={{ bgcolor: "#f4f4f4", p: "13px", borderRadius: "100%", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <HubIcon sx={{ fontSize: "45px" }} />
                                                </Box>
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: "14px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
                <Grid container sx={{ mt: "20px", backgroundImage: `url(${background8})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", p: "20px" }}>
                    <Grid item xs={0} sm={0} md={1} lg={2}></Grid>
                    <Grid xs={12} sm={12} md={11} lg={12} item >
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "80%", lg: "70%" } }}>
                            <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Why Choose Us
                            </Typography>
                            <Typography sx={{ fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                AdelSocial is the best destination to avail React web development and mobile development services. Here are a few reasons why you should hire ReactJS developers from us:
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={2}></Grid>
                    <Grid item container xs={12} sm={12} md={10} lg={12} pl={"20px"}  >

                        {
                            [1, 1, 1, 1, 1, 1].map(() => {
                                return (
                                    <Grid container xs={12} sm={12} md={6} lg={5} sx={{ mt: "25px" }}>

                                        <Box>
                                            <Diversity1Icon sx={{ fontSize: "35px", mr: '10px' }} />
                                        </Box>

                                        <Grid item xs={10}>
                                            <Typography sx={{ color: MAIN_COLOR, fontWeight: "800", fontSize: "20px", lineHeight: "24px", marginBottom: "8px", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                Skill and experience:
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                Our ReactJS team includes seasoned developers with extensive skills and rich experience in the entire JS frameworks.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Grid>

                <Grid container sx={{ backgroundImage: `url(${vector})`, p: "20px" }}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography align='center' sx={{ fontSize: "29px", fontWeight: "800", color: "white" }} >
                            Planning to hire ReactJS developers for your upcoming web development project?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button variant='contained' sx={{ mt: "10px", bgcolor: MAIN_COLOR, height: "50px", borderRadius: "25px", fontWeight: "800", p: '10px 30px' }}>
                            Let,s Talk
                        </Button>
                    </Grid>


                </Grid>
                <Grid container sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "90%", sm: "90%", md: "67%", lg: "67%" } }}>
                        <Box>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                Frequently Asked Questions
                            </Typography>
                        </Box>
                        <Box>
                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                        How can I hire a ReactJS developer?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>

                                        <ul>
                                            <li>Tell us the skills you are looking for your project. </li>
                                            <li>We will schedule a call with our top developer who can understand your requirements and concerns </li>
                                            <li>We assign a dedicated team or individual developer (considering the project demands)  </li>
                                            <li>Get started with your project development in no time.  </li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                        What if I’m not satisfied with your React solution?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>

                                        You have the full right to report any kind of dissatisfaction with our solution. Our developers will do their best to resolve the issues to make the solution meet your requirements precisely.

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                        How can I receive updates on my project?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>

                                        We are available on all communication channels such as Microsoft Teams, Google Meet, Zoom Call, Phone, Live Chats, and Emails to keep you informed of the current status of your .NET development project.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                </Grid>
                <Footer />
            </Container>

        </>
    )
}

export default ReactFrontend
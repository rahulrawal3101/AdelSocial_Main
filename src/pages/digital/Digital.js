import { Box, Button, Container, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
import React from 'react'
import wordPress from '../../assets/hire-wordpress-developer-banner.jpg'
import clutch from '../../assets/clutch.png'
import googleFirm from '../../assets/google-firms.png'
import hp1 from '../../assets/hp-and.png'
import hp2 from '../../assets/hp-PernodRicard.png'
import hp3 from '../../assets/hp-Panasonic.png'
import hp4 from '../../assets/hp-Ikea-Logo.png'
import hp5 from '../../assets/hp-Hero-logo.png'
import javaWeb from '../../assets/Java-Web-Development.webp'
import digi from '../../assets/digital-marketing-introwebp.webp'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SendMessage from '../../components/SendMessage'
import { MAIN_COLOR } from '../../constant'



const DigitalMarketing = () => {
    let six = [{
        title: "Social media marketing",
        des: "Having a social media presence as a business trying to make it in the digital world will help you grow your customer base. With over three billion active users across most social media platforms, your company must use social media to grow"
    }, {
        title: "Web development services",
        des: "Finding a web development company that understands your goals and can deliver the best results possible within your budget can be difficult at times.Though you can choose a trustworthy company, consider offering you everything in a balanced and organized manner."
    },
    {
        title: "Our web design services",
        des: "Our company was founded to provide our clients with web services. We are accountable for what we promise and always promise to provide services such as Solutions for custom web design"
    }
        ,
    {
        title: "E-commerce website",
        des: "E-commerce website development allows you to buy or sell products online, essentially making trade easier. Consumers can use e-commerce websites to research, analyze, search, and browse. Increase your purchasing options."
    },
    {
        title: "WordPress Creation ",
        des: "Though WordPress is the most popular content management system on the internet today. Every company wants to keep its website active. It all comes down to designing and implementing websites with the WordPress creation tool. We will be involved in both front-end and back-end development."
    },
    {
        title: "Drupal creation",
        des: "We are experts in Drupal website development, theme development, support and other types of maintenance services, custom Drupal applications, and Drupal migration services. Our team of highly experienced Drupal developers is ready to provide the best services to our clients"
    }

    ]

    let four = [{
        title: "Effective research ",
        des: "Effective research can benefit your company. To create a program that appeals to your target market, you must thoroughly analyze market trends, client expectations, and preferences. By conducting a thorough market analysis, you can learn more about the types of apps that are steadily gaining popularity among smartphone users."
    }, {
        title: "Determine your target audience.",
        des: "Because every mobile application, including yours, aims to solve a problem, it is difficult to predict who your mobile application's target market is. You must conduct surveys, read online forums, and use tools to better understand your market. Personas can be used to demonstrate the needs of various audience groups. You may have a better understanding of the elements required for your company's success."
    },
    {
        title: "Safety comes first.",
        des: "Nothing is more important than maintaining the security of a website or application. Even though several mobile app applications frequently disregard security and suffer disastrous consequences. In our digital age, data is everything, and it must be properly protected."
    }
        ,
    {
        title: "Should keep track of issues",
        des: "Every internet business must handle commitments with extreme caution. There is a significant risk involved, and sporadic fraud and hacking incidents may occur, necessitating legal intervention."
    },


    ]

    return (
        <>
            <Header />
            <Container disableGutters maxWidth>

                <Grid container >
                    <Grid item xs={12} sx={{ backgroundImage: `url(${wordPress})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "55px" }}>

                        <Grid container sx={{ p: "10px" }}>
                            <Grid item xs={2} sm={2} md={1} lg={1} >

                            </Grid>

                            <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ lineHeight: "2" }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: "800", color: "white" }}>

                                            AdelSocial may be the ideal digital marketing company for you.

                                        </Typography>
                                        <ul>
                                            <li style={{ color: "white", fontSize: "17px" }}>Increase your social influence by establishing authority.</li>
                                            <li style={{ color: "white", fontSize: "17px" }}>Increasing the number of leads</li>
                                            <li style={{ color: "white", fontSize: "17px" }}>Brand identification</li>
                                            <li style={{ color: "white", fontSize: "17px" }}>Increase customer pride and loyalty.</li>
                                            <li style={{ color: "white", fontSize: "17px" }}>assisting you in connecting with other businesses and forming partnerships</li>

                                        </ul>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} lg={5} sx={{ mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                    <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "65%", lg: "65%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                                        <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                                <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: MAIN_COLOR }}>
                                                    Request a free quote
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                        <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                            submit
                                        </Button>

                                    </Paper>
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} sx={{ mb: "20px", mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { sm: "block", sm: "block", md: "block", lg: "none" } }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                            <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                    <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: MAIN_COLOR }}>
                                        Request a free quote
                                    </Typography>
                                </Box>
                            </Box>
                            <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                            <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                submit
                            </Button>

                        </Paper>
                    </Box>
                </Grid>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px", mt: "-40px" }}>
                    <Grid container xs={8} sx={{ bgcolor: "white", boxShadow: " 0px -2px 38px -7px rgba(0,0,0,0.44)", p: "10px", borderRadius: "15px" }}>
                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: `"1px solid ${MAIN_COLOR}` }} spacing={2}>

                            <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                600+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                            <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                50+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                            <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                21+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                            <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                400+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px" }}>
                    <Grid container xs={4}>
                        <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                            <img src={clutch} />
                            <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <img src={googleFirm} />
                            <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>

                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "black", p: "15px", m: '30px' }}>
                    <Grid container xs={8} >
                        <Grid item xs={12} sm={12} md={12} lg={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "18px", color: "white" }}>
                                Trusted by Global Brands
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <img src={hp1} alt='img' height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}  >
                            <img src={hp2} alt='img' height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <img src={hp3} alt='img' height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <img src={hp4} alt='img' height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <img src={hp5} alt='img' height="100%" width="100%" />
                        </Grid>
                    </Grid>
                </Box>
                <Grid container sx={{ p: { xs: "8px", sm: "8px", md: "8px", lg: "15px", m: '20px 0px' } }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={5}>
                        <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                            What makes us reliable among customers?
                        </Typography>
                        <Typography sx={{ mt: "10px", fontSize: "18px", mb: "15px" }}>
                            As we all know, going digital is the new age requirement in marketing, so we are always excited to empower clients in all necessary areas such as social media sharing.</Typography>
                        <ul>
                            <li style={{ fontSize: "17px" }}>Website Design</li>
                            <li style={{ fontSize: "17px" }}>Domain security Creative writing</li>
                            <li style={{ fontSize: "17px" }}>Interactive Advertisements methods for making their venture a little better while also growing.</li>


                        </ul>
                        <Typography sx={{ mt: "10px", fontSize: "18px" }}>
                            A trusted platform that provides a wide range of convincing services with precise work and meticulous strategies.
                        </Typography>



                    </Grid>
                    <Grid item xs={12} md={5} lg={4} >
                        <Box sx={{ height: "100%", width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" }, borderRadius: "25px", overflow: "hidden" }}>
                            <img src={digi} height="100%" width="100%" alt='img3' />
                        </Box>
                    </Grid>
                </Grid>


                <Box sx={{ m: '20px 0px', display: "flex", justifyContent: "center", alignItems: "center", p: { xs: "8px", sm: "8px", md: "8px", lg: "15px" } }}>
                    <Grid container xs={12} sm={12} md={10} lg={8}>
                        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                            <Box >
                                <Typography sx={{ fontSize: "30px", mb: '20px', fontWeight: "900", color: MAIN_COLOR }} >
                                    Our digital marketing consultants ensure our client's needs by assisting them in creating SEO-based content that is extremely beneficial in engaging and delighting your audiences. It is also critical for search engine visibility to create authentic, valuable, and informative content.

                                </Typography>
                                <Typography sx={{ fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                    The services we provide are as follows :
                                </Typography>
                            </Box>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Grid container xs={12} spacing={1}>
                                {
                                    six.map((ele) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} sx={{ mt: "15px" }}>
                                                <Paper sx={{ height: "250px", overflow: "hidden", borderRadius: "35px 10px 35px 10px", p: "10px", border: "1px solid #F05523" }} elevation={3}>
                                                    <Typography sx={{ fontSize: "20px", fontWeight: "800", color: MAIN_COLOR }} >
                                                        {ele.title}
                                                    </Typography>
                                                    <Typography sx={{ mt: "10px", fontSize: "14px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                        {ele.des}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Box>
                    </Grid>
                </Box>



                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#002F96" }}>
                    <Grid container xs={12} sm={12} md={10} lg={8}>
                        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                            <Box >
                                <Typography align='center' sx={{ fontSize: "30px", fontWeight: "800", color: MAIN_COLOR, mt: '30px' }} >
                                    We work hard and are dedicated to producing good results. Although developing an app is difficult, it is possible to determine the client's objectives and establish.

                                </Typography>
                                <Typography align='center' sx={{ color: "white", fontSize: "20px", fontWeight: "900", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                    Our priority areas
                                </Typography>
                            </Box>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pb: "15px" }}>
                            <Grid container xs={12} spacing={3}>
                                {
                                    four.map((ele) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={6} sx={{ mt: "30px" }}>
                                                <Paper sx={{ height: "250px", overflow: "hidden", borderRadius: "35px 10px 35px 10px", p: "25px", border: "1px solid #F05523" }} elevation={3}>
                                                    <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                        {ele.title}
                                                    </Typography>
                                                    <Typography sx={{ mt: "10px", fontSize: "15px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                        {
                                                            ele.des
                                                        }
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Box>
                    </Grid>
                </Box>
                <SendMessage />
                <Footer />
            </Container>
        </>
    )
}

export default DigitalMarketing
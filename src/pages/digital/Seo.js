import { Box, Button, Container, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
import React from 'react'
import clutch from '../../assets/clutch.png'
import digi from '../../assets/digital-marketing-introwebp.webp'
import googleFirm from '../../assets/google-firms.png'
import wordPress from '../../assets/hire-wordpress-developer-banner.jpg'
import hp5 from '../../assets/hp-Hero-logo.png'
import hp4 from '../../assets/hp-Ikea-Logo.png'
import hp3 from '../../assets/hp-Panasonic.png'
import hp2 from '../../assets/hp-PernodRicard.png'
import hp1 from '../../assets/hp-and.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SendMessage from '../../components/SendMessage'
import { MAIN_COLOR } from '../../constant'



const Seo = () => {
    let six = [{
        title: "Control IT costs ",
        des: "We provide global, data-driven solutions at affordable costs. You can avail of our services according to what you need. Our IT services will help you to grow, and uplift in a unique way. "
    }, {
        title: "Trusted IT advisor ",
        des: "We provide a cooperative, insightful approach from Our IT workforce. We work with proper discussions, clearing queries through to regular account management meetings, and also ensuring offering you a proper roadmap to be your loyal IT advisor."
    },
    {
        title: "Economy of scale ",
        des: "We support assessment, analytics, and technology to convert our talent potential into performance. With our managed IT services you will notice positive upliftment in your business."
    }
        ,
    {
        title: "Increased efficiency ",
        des: "We at Adel social ensure the building of strong, talented based determined foundations for prudent workforce initiatives to assure term growth and profits.With us, you will get efficiency, and credibility within monitored IT providers."
    },
    {
        title: "Small initial investment",
        des: "Overcoming competition in the market leads to more challenges in upgrading business. For that, the most crucial aspect is ' Investment'. Managed IT services help you to plan your investment costs effectively. Rather than overspending unnecessarily, it will offer you a clear insight into what to choose or what not?"
    },

    ]

    let four = [{
        title: "SEO gives 24 /7 promotion ",
        des: "Your content will determine how you promote your business; the more informative and influencing it is, the more leads it will generate and the higher it will rank in search engines.."
    }, {
        title: "SEO receives more clicks than PPC.",
        des: "As it produces immediate results, pay-per-click advertising is an essential component of a comprehensive search engine optimization strategy."
    },
    {
        title: "Helps you generate quality leads ",
        des: "To create high-quality content, always use appropriate keywords. Your top-performing keywords are the ones that bring you the most business. Check the performance of your keywords to optimize your content. Because they are the foundation of SEO campaigns, it is critical to keep an eye on them. Always keep an eye on the quality of your keywords, even if they are highly recognized by the person approaching you."
    }
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

                                            SEO has emerged as the most dependable method for attracting new clients and growing a business.

                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>
                                            As we all know, SEO Search engine optimization is simple yet powerful in its simplicity, and it can help your business thrive. Though SEO is all about making changes to your website's design and content to make it more appealing to search engines.
                                            SEO has emerged as the most dependable method for attracting new clients and growing a business. It is the most well-known process that a company goes through to ensure that its website ranks high in search engines.
                                            Adel Social can improve the overall quality of your business by providing SEO services.
                                        </Typography>

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
                <Grid item xs={12} lg={4} sx={{ mb: "20px", mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
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
                            <img   alt="img" src={clutch} />
                            <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <img   alt="img" src={googleFirm} />
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
                            <img    src={hp1}   alt="img"  height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}  >
                            <img    src={hp2}    alt="img"  height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <img  src={hp3}  alt="img" height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <img    src={hp4} alt='img'   height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} >
                            <img   alt="img" src={hp5}  height="100%" width="100%" />
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
                            <li style={{ fontSize: "17px" }}><b>SEO gives 24 /7 promotion
                            </b>
                                Your content will determine how you promote your business; the more informative and influencing it is, the more leads it will generate and the higher it will rank in search engines.</li>
                            <li style={{ fontSize: "17px" }}>Domain security Creative writing</li>
                            <li style={{ fontSize: "17px" }}>Interactive Advertisements methods for making their venture a little better while also growing.</li>


                        </ul>
                        <Typography sx={{ mt: "10px", fontSize: "18px" }}>
                            After analysing the performance of your keywords, remove any that are underperforming and are not generating impressions, clicks, or conversions.
                        </Typography>



                    </Grid>
                    <Grid item xs={12} md={5} lg={4} >
                        <Box sx={{ height: "100%", width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" }, borderRadius: "25px", overflow: "hidden" }}>
                            <img   alt="img" src={digi} height="100%" width="100%" />
                        </Box>
                    </Grid>
                </Grid>


                <Box sx={{ m: '20px 0px', display: "flex", justifyContent: "center", alignItems: "center", p: { xs: "8px", sm: "8px", md: "8px", lg: "15px" } }}>
                    <Grid container xs={12} sm={12} md={10} lg={8}>
                        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                            <Box >
                                <Typography sx={{ fontSize: "30px", mb: '20px', fontWeight: "900", color: MAIN_COLOR }} >
                                    The need for a high-quality SEO strategy has not only been higher but essential. If you are not applying that, you can be that competitors are!

                                </Typography>
                                <Typography sx={{ fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                    Our services provide a unique range of benefits -
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

export default Seo
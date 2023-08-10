import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, OutlinedInput, Paper, Typography } from '@mui/material'

import ecom from '../../assets/hire-ecommerce-developer.jpg'
import clutch from '../../assets/clutch.png'
import googleFirm from '../../assets/google-firms.png'
import ecommerceSmall from '../../assets/e-commerce_developers (1).png'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import card1 from '../../assets/card1.jpg';
import card2 from '../../assets/card2.jpg';
import card3 from '../../assets/card3.jpg';
import card4 from '../../assets/card4.jpg';
import b2b from '../../assets/b2b-ecommerce.png'
import PsychologyIcon from '@mui/icons-material/Psychology';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DescriptionIcon from '@mui/icons-material/Description';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SendMessage from '../../components/SendMessage'



const Ecommerce = () => {


    const netInfo = [{
        icon: <PeopleOutlineIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: "#F05523", fontSize: "50px", m: "10px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    ]

    const cardSec = [
        {
            img: card1,
            title: "Onsite Team",
            des: "You can hire eCommerce developers from us to build an onsite team. We’ll help you put together the team in the most efficient way possible. We have a good track record of deploying eCommerce experts at client locations."
        },
        {
            img: card2,
            title: "Managed Dedicated Team",
            des: "You can hire eCommerce developers from us to build an onsite team. We’ll help you put together the team in the most efficient way possible. We have a good track record of deploying eCommerce experts at client locations."
        },
        {
            img: card3,
            title: "Extend Team",
            des: "You can hire eCommerce developers from us to build an onsite team. We’ll help you put together the team in the most efficient way possible. We have a good track record of deploying eCommerce experts at client locations."
        },
        {
            img: card4,
            title: "Dedicated Developer",
            des: "You can hire eCommerce developers from us to build an onsite team. We’ll help you put together the team in the most efficient way possible. We have a good track record of deploying eCommerce experts at client locations."
        },
    ]
    const netInfo3 = [{
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    ]

    let cards = Array(6).fill(1)
    return (
        <>
            <Header />
            <Grid container >
                <Grid item xs={12} sx={{ backgroundImage: `url(${ecom})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "50px" }}>

                    <Grid container sx={{ p: "10px" }}>
                        <Grid item xs={2} sm={2} md={1} lg={1} >

                        </Grid>

                        <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ lineHeight: "10" }}>
                                <Box>
                                    <Typography variant='h4' sx={{ fontWeight: "800", color: "white" }}>
                                        Hire DOT NET Developers
                                    </Typography>
                                    <Typography sx={{ color: "white", mt: "20px", fontSize: "18px" }}>
                                        Get Zero Headache Dot NET Developers who are ready to take your project within 24 hours and carry out project development efficiently by following the best Dot NET development practices. We, at OrangeMantra, leave no stone unturned in delivering bug-free and high-performance .NET solutions.
                                    </Typography>
                                    <Box sx={{ mt: "40px", display: "flex", justifyContent: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
                                        <Button variant='contained' sx={{ bgcolor: "#F05523;", fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: "#F05523;" } }}>
                                            Hire .net developer
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4} sx={{ mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "65%", lg: "65%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                                    <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: "#F05523", width: "60%" }}>
                                            <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: "#F05523" }}>
                                                Request a free quote
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                    <Button variant='contained' sx={{ bgcolor: "#F05523;", fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: "#F05523;" } }} fullWidth>
                                        submit
                                    </Button>

                                </Paper>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid item xs={12} lg={4} sx={{ mb: "20px", mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                            <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: "#F05523", width: "60%" }}>
                                    <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: "#F05523" }}>
                                        Request a free quote
                                    </Typography>
                                </Box>
                            </Box>
                            <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                            <Button variant='contained' sx={{ bgcolor: "#F05523;", fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: "#F05523;" } }} fullWidth>
                                submit
                            </Button>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px", mt: { xs: "0px", sm: "0px", md: "0px", lg: "-40px" } }}>
                <Grid container xs={8} sx={{ bgcolor: "white", boxShadow: " 0px -2px 38px -7px rgba(0,0,0,0.44)", p: "10px", borderRadius: "15px" }}>
                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }} spacing={2}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                            600+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                            50+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                            21+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                            400+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "20px" }}>
                <Grid container xs={6}>
                    <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                        <img src={ecommerceSmall} alt='first' height="100px" width="100px" />
                        <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                        <img src={clutch} alt='second' height="100px" width="120px" />
                        <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <img src={googleFirm} alt='third' height="100px" width="150px" />
                        <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>

                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px", bgcolor: "#f1f1f1" }}>
                <Grid container xs={8}>
                    <Grid item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ mt: "50px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                                Hire eCommerce Experts to Build Your Custom Online Store
                            </Typography>
                            <Typography>
                                Are you in pursuit of a dedicated Dot NET developer for your project? Our highly-qualified Dot NET developers are just a click away. We have a pool of talented, proactive, and competent .NET developers who have great expertise in .NET development and can deliver tailored solutions to meet your unique business requirements. Our dedicated Dot NET Developers follow a neatly refined and up-to-the-mark technical approach. You can hire highly skilled .NET developers at OrangeMantra as we have built proficiency in .NET development over years with our extensive web development experiences. All these years, we have focused on accumulating the best Dot NET developers from different regions to offer you to hire Dot NET developers to meet your project goals using vast knowledge and skills.
                                <br />
                                <br />
                                With our first-rate hire Dot NET developer services, you are given the liberty to choose a .NET developer from our team of Dot NET programmers with different levels of expertise and experience. We can help you fulfill all your business requirements and objectives by letting you hire Dot NET programmers, in the best equations of time and cost. Hiring Dot NET developers, at OrangeMantra, means you are relieved from unnecessary cost-bills, stress, and solutions with superior quality and performance.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "20px" }}>
                <Grid container xs={8}>
                    <Grid item xs={12} mt="20px">
                        <Box sx={{ mt: "50px", ml: "-10px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                                Why Hire eCommerce Developers from Us?
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px", }}>
                        <Grid container>
                            {
                                netInfo.map((ele) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ borderLeft: "6px solid #F05523", lineHeight: "2", mb: "12px" }}>
                                            <Box >
                                                {ele.icon}
                                            </Box>
                                            <Typography sx={{ m: "10px", fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px" }}>{ele.title}</Typography>
                                            <Typography sx={{ m: "10px", wordSpacing: "2px", mt: "10px" }}>{ele.about}</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", bgcolor: "#f1f1f1" }}>

                <Box sx={{ overflow: "hidden", width: "1250px", p: "20px" }}>
                    <Box sx={{ mt: "50px", mb: "20px" }}>
                        <Typography align='left' sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                            Our Hiring Models
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", overflowX: "scroll" }}>
                        {
                            cardSec.map((ele) => {
                                return (
                                    <Box sx={{ mr: "20px" }}>
                                        <Card sx={{ width: "350px", height: "400px" }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={ele.img}
                                                    alt="green iguana"
                                                />

                                                <CardContent sx={{ p: "10px" }}>
                                                    <Typography gutterBottom component="div" sx={{ fontSize: "18px", fontWeight: "700" }}>
                                                        {ele.title}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: "15px", color: "#000", lineHeight: "2" }}>
                                                        {ele.des}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "20px", bgcolor: "#f1f1f1" }}>
                <Grid container xs={8} >
                    <Grid item xs={12}>
                        <Typography align='left' sx={{ fontSize: "40px", fontWeight: "800", color: "#F05523" }} >
                            Why Choose Us for iPad App Solutions?
                        </Typography>
                    </Grid>

                    {
                        cards.map(() => {
                            return (
                                <Grid item xs={4} sx={{ display: "flex", bgcolor: "white", m: "15px" }}>
                                    <Box sx={{ width: "40%", height: "210px" }}>
                                        <img src={b2b} alt='pic' height="100%" width="100%" />
                                    </Box>
                                    <Box sx={{ width: "70%", height: "210px" }}>
                                        <Typography sx={{ m: "10px", fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px" }}>
                                            B2B eCommerce Development
                                        </Typography>
                                        <Typography sx={{ m: "10px", color: "#606060", lineHeight: "2" }}>
                                            Fully enterprise-grade online stores built on the most advanced eCommerce platforms. Whether you are an independent retail store owner, a mid-sized enterprise, or a large company, we have the right solution for you.
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "20px", bgcolor: "#002F96" }}>
                <Grid item xs={12} sx={{ bgcolor: "#002F96" }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" }, mt: "50px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: "white" }} >
                                Hire Dot NET Developers at OrangeMantra in 4 Easy Steps
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" } }} spacing={3}>
                            {
                                netInfo3.map((ele) => {
                                    return (

                                        <Grid item xs={12} sm={12} md={6} lg={3} sx={{ p: "15px 10px 15px 10px", lineHeight: "2" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "white", height: "100px", width: "100px", borderRadius: "100%" }}>
                                                {ele.icon}
                                            </Box>
                                            <Typography sx={{ mt: "15px", color: "white", fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px" }}>{ele.title}</Typography>
                                            <Typography sx={{ wordSpacing: "2px", mt: "15px", color: "white" }}>{ele.about}</Typography>
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

        </>
    )
}

export default Ecommerce
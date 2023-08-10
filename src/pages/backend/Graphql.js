import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
import React from 'react'
import orange from '../../assets/orange.jpg'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import orangenet from '../../assets/orangeDotNet.jpg';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LuggageIcon from '@mui/icons-material/Luggage';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DomainIcon from '@mui/icons-material/Domain';
import card1 from '../../assets/dotnetcard1.jpg'
import card2 from '../../assets/dotnetcard2.jpg'
import card3 from '../../assets/dotnetcard3.jpg'
import PsychologyIcon from '@mui/icons-material/Psychology';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MAIN_COLOR } from '../../constant';
import SendMessage from '../../components/SendMessage';

const GraphQL = () => {

    const netInfo = [{
        icon: <PeopleOutlineIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Graph QL Developers",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    ]

    const CheckBoxData = [
        "Shorter Development Time",
        "Higher Level of Security",
        "Simple Integration",
        "Enhanced scalability",
        "Supported by Microsoft",
        "Easy Deployment",
        "Cross-platform Compatibility",
        "Multilingual Support",
        "Huge Developer Community",
        "Simplicity of development",
    ]

    const Technologies1 = ["ASPGraph QL MVC", " Graph QL Core", " Graph QL Core Rest API", "C#", " Graph QL Framework 4.8", " Graph QL Framework 4.7", " Graph QL Framework 4.6", " Graph QL Framework 4.5", " Graph QL Framework 4.0", "  VB.NET", "  Microservices", "  VS Add-ins", "  Azure Development", "  WinForms", "  WPF", "  WCF Services", "  WCF Data Services", "  JSON", "  SOAP", "  REST API", "  Kendo UI", "  SQL Server 2019", "  2017", "2016", "2014", "2012"]

    const Technologies3 = ["AuthorizeGraph QL ", " Stripe", " PayPal", "CareConnect", "Adyen", "FirstData", "MiGS", "etc"]

    const Technologies2 = [" MS Test ", " Selenium", " nUnit Test", " xUnit Test"]

    const Technologies4 = [
        "DocuSign ", " Chart (amChart", " Google", "D3.js ", "Echarts", "AWS &amp; Azure Services ", "Google Map Services", " Live Streaming Services "
    ]

    const AllBuisness = [{
        icon: <ApartmentIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Healthcare"
    },
    {
        icon: <ChairAltIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Education & E-Learning"
    },
    {
        icon: <AddShoppingCartIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Retail & E-Commerce"
    },
    {
        icon: <AccountBalanceIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Banking & Finance"
    },
    {
        icon: <LuggageIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Travel & Tourism"
    },
    {
        icon: <LiveTvIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Media & Entertainment"
    },

    {
        icon: <LocalShippingIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Transport & Logistics"
    },

    {
        icon: <DomainIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Real Estate"
    },

    ]

    const netInfo2 = [{
        icon: <PeopleOutlineIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },]

    const netInfo3 = [{
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Graph QL Developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    ]


    return (
        <>
            <Header />

            <Container disableGutters maxWidth={'xl'}>
                <Grid container>
                    <Grid item xs={12} sx={{ backgroundImage: `url(${orange})`, bgcolor: MAIN_COLOR, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "50px" }}>

                        <Grid container sx={{ p: "10px" }}>
                            <Grid item xs={2} sm={2} md={1} lg={1} >

                            </Grid>

                            <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ lineHeight: "10" }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: "800", color: "white" }}>
                                            Hire Graph QL Developers
                                        </Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: { lg: "18px", xs: '12px', md: '18px' } }}>
                                            Get Zero Headache Graph QL Developers who are ready to take your project within 24 hours and carry out project development efficiently by following the best Graph QL development practices. We, at AdelSocial, leave no stone unturned in delivering bug-free and high-performance Graph QL solutions.
                                        </Typography>
                                        <Box sx={{ mt: "40px", display: "flex", justifyContent: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
                                            <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }}>
                                                Hire Graph QL developer
                                            </Button>
                                        </Box>
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

                    <Grid item xs={12} lg={5} sx={{ mb: "20px", mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { sm: "block", sm: "block", md: "block", lg: "none" } }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
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


                    <Grid item xs={12} sx={{ pb: "40px", bgcolor: "#f1f1f1", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "50px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                Looking to Hire Graph QL Developers? You’re at the Right Spot
                            </Typography>
                            <Typography>
                                Are you in pursuit of a dedicated Graph QL developer for your project? Our highly-qualified Graph QL Developers are just a click away. We have a pool of talented, proactive, and competent Graph QL developers who have great expertise in Graph QL development and can deliver tailored solutions to meet your unique business requirements. Our dedicated Graph QL Developers follow a neatly refined and up-to-the-mark technical approach. You can hire highly skilled Graph QL developers at AdelSocial as we have built proficiency in Graph QL development over years with our extensive web development experiences. All these years, we have focused on accumulating the best Graph QL Developers from different regions to offer you to Hire Graph QL Developers to meet your project goals using vast knowledge and skills.
                                <br />
                                <br />
                                With our first-rate hire Graph QL developer services, you are given the liberty to choose a Graph QL developer from our team of Graph QL programmers with different levels of expertise and experience. We can help you fulfill all your business requirements and objectives by letting you hire Graph QL programmers, in the best equations of time and cost. Hiring Graph QL Developers, at AdelSocial, means you are relieved from unnecessary cost-bills, stress, and solutions with superior quality and performance.
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "50px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                Our Complete Suite of Graph QL Development Services
                            </Typography>
                            <Typography>
                                Our Graph QL development services include everything from Graph QL web app development to Graph QL CMS development to desktop app development and much more. Dedicated Graph QL developers at AdelSocial are highly skilled and capable of building high-end Graph QL solutions that will take your business a few notches higher.
                            </Typography>

                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }} spacing={3}>
                            {
                                netInfo.map((ele) => {
                                    return (

                                        <Grid item xs={12} sm={6} md={3.6} lg={3.6} sx={{ borderLeft: `6px solid ${MAIN_COLOR}`, p: "15px 10px 15px 10px", lineHeight: "2", m: "15px" }}>
                                            <Box>
                                                {ele.icon}
                                            </Box>
                                            <Typography sx={{ fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px" }}>{ele.title}</Typography>
                                            <Typography sx={{ wordSpacing: "2px", mt: "10px" }}>{ele.about}</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>


                    <Grid item xs={12} sx={{ pb: "40px", bgcolor: "#f1f1f1", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "50px" }}>
                            <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Why Hire Graph QL Programmers for Your Web Development Project?
                            </Typography>
                            <Typography sx={{ mt: "15px" }}>
                                The Graph QL software framework, developed by Microsoft, has gained popularity in the web development industry as it allows the creation of feature-rich web applications in a quick time. Here are a few reasons why you should opt for Graph QL development for your web development project.
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                <Box sx={{ mt: "20px", height: { xs: "300px", sm: "300px", md: "380px", lg: "420px" } }}>
                                    <img src={orangenet} height="100%" width="100%" />
                                </Box>
                                <Box >
                                    {
                                        CheckBoxData.map((ele) => {
                                            return (
                                                <Typography sx={{ ml: { xs: "0px", sm: "0px", md: "20px", lg: "20px" }, display: "flex", alignItems: "center", mt: "13px" }}>
                                                    <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "17px" }} />{ele}
                                                </Typography>
                                            )
                                        })
                                    }

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <SendMessage />

                    <Grid item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center", mt: '30px' }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                Graph QL Technologies We Use
                            </Typography>
                            <Typography>Our Graph QL developers have an iron grip of core and advanced Graph QL technologies to facilitate the agile development of quality-oriented web apps for your business. Some of the cutting-edge Graph QL technologies and tools we work on include:</Typography>

                            <Box>
                                <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR, mt: "30px" }} >
                                    Graph QL Technologies
                                </Typography>
                                <Grid container spacing={3}>
                                    {
                                        Technologies1.map((ele) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                    <Paper sx={{ border: "2px solid #e0e0e0", p: "10px", height: "100px", borderRadius: "18px" }} elevation={2}>
                                                        <Typography sx={{ display: "flex", alignItems: "center", mt: "13px", fontSize: "25px" }}>
                                                            <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "25px" }} />{ele}
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </Box>

                        </Box>

                    </Grid>

                    <Grid item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, }}>
                            <Box>
                                <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                    Application Testing Tools
                                </Typography>
                                <Grid container spacing={3}>
                                    {
                                        Technologies2.map((ele) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                    <Paper sx={{ border: "2px solid #e0e0e0", p: "10px", height: "100px", borderRadius: "18px" }} elevation={2}>
                                                        <Typography sx={{ display: "flex", alignItems: "center", mt: "13px", fontSize: "25px" }}>
                                                            <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "25px" }} />{ele}
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </Box>

                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, }}>
                            <Box>
                                <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                    Payment Gateway Integrations
                                </Typography>
                                <Grid container spacing={3}>
                                    {
                                        Technologies3.map((ele) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                    <Paper sx={{ border: "2px solid #e0e0e0", p: "10px", height: "100px", borderRadius: "18px" }} elevation={2}>
                                                        <Typography sx={{ display: "flex", alignItems: "center", mt: "13px", fontSize: "25px" }}>
                                                            <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "25px" }} />{ele}
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, }}>
                            <Box>
                                <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                    Payment Gateway Integrations
                                </Typography>
                                <Grid container spacing={3}>
                                    {
                                        Technologies4.map((ele) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                    <Paper sx={{ border: "2px solid #e0e0e0", p: "10px", height: "100px", borderRadius: "18px" }} elevation={2}>
                                                        <Typography sx={{ display: "flex", alignItems: "center", mt: "13px", fontSize: "25px" }}>
                                                            <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "25px" }} />{ele}
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ pb: "40px", bgcolor: "#f1f1f1" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "20px" }}>
                                <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                    We Build Scalable Graph QL Solutions for All Business Verticals
                                </Typography>
                                <Typography sx={{ textAlign: { xs: "", sm: "", md: "center", lg: "center" }, mt: "20px" }}>
                                    When you hireGraph QL app developers from AdelSocial, you hire a team ofGraph QL specialists that holds expertise in developingGraph QL solutions for a diverse range of industry verticals.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
                            <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }} spacing={2}>
                                {
                                    AllBuisness.map((ele) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                                <Box sx={{ "&:hover": { bgcolor: "white" } }}>
                                                    <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                        {ele.icon}
                                                        <Typography align='center' sx={{ fontSize: "30px", fontWeight: "800" }}>{ele.name}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "100%", sm: "90%", md: "70%", lg: "70%" }, mt: "50px" }}>
                            <Grid item container>
                                <Grid item xs={12}>
                                    <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                        Our Flexible Engagement Models
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                    <Card sx={{ maxWidth: 400, p: "15px", m: "15px" }} elevation={5}  >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                width="300"
                                                image={card1}
                                                alt="green iguana"
                                            />
                                            <CardContent >
                                                <Typography gutterBottom sx={{ fontSize: "25px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    FullTime/PartTime Hiring
                                                </Typography>
                                                <Typography>
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>



                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                    <Card sx={{ maxWidth: 400, p: "15px", m: "15px" }} elevation={5}  >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                width="300"
                                                image={card2}
                                                alt="green iguana"
                                            />
                                            <CardContent >
                                                <Typography gutterBottom sx={{ fontSize: "25px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    FullTime/PartTime Hiring
                                                </Typography>
                                                <Typography>
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                    <Card sx={{ maxWidth: 400, p: "15px", m: "15px" }} elevation={5}  >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                width="300"
                                                image={card3}
                                                alt="green iguana"
                                            />
                                            <CardContent >
                                                <Typography gutterBottom sx={{ fontSize: "25px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Hire Graph QL Developer by Hour
                                                </Typography>
                                                <Typography>
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ bgcolor: "#f1f1f1" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "50px" }}>
                                <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                    Hire Graph QL Developers at AdelSocial in 4 Easy Steps
                                </Typography>
                                <Typography>
                                    At AdelSocial, you can hire Graph QL programmers of any kind, including Graph QL Core developers, ASPGraph QL developers, ADOGraph QL developers, C#.NET, etc. We not only offer to hire Graph QL developers based on the time and material or outstaffing but also allocate a dedicated team of Graph QL developers that can work on your project.
                                </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                            <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }} spacing={3}>
                                {
                                    netInfo2.map((ele) => {
                                        return (

                                            <Grid item xs={12} sm={12} md={6} lg={3} sx={{ p: "15px 10px 15px 10px", lineHeight: "2" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "fit-content", bgcolor: "white", height: "100px", width: "100px", borderRadius: "100%" }}>
                                                    {ele.icon}
                                                </Box>
                                                <Typography sx={{ mt: "15px", fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px" }}>{ele.title}</Typography>
                                                <Typography sx={{ wordSpacing: "2px", mt: "15px" }}>{ele.about}</Typography>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ bgcolor: "#002F96" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "50px" }}>
                                <Typography sx={{ fontSize: "40px", fontWeight: "800", color: "white" }} >
                                    Hire Graph QL Developers at AdelSocial in 4 Easy Steps
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                            <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }} spacing={3}>
                                {
                                    netInfo3.map((ele) => {
                                        return (

                                            <Grid item xs={12} sm={12} md={6} lg={3} sx={{ p: "15px 10px 15px 10px", lineHeight: "2" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "fit-content", bgcolor: "white", height: "100px", width: "100px", borderRadius: "100%" }}>
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


                    <SendMessage />
                    <Grid item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }}>



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
                                            How do you protect my app idea or business details?
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>

                                            At AdelSocial, we give high importance to the complete confidentiality and security of our client’s data. We sign an NDA at the time of project initiation to protect your business-critical data or app idea.

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
                                            What if I’m not satisfied with your Graph QL solution?
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

                                            We are available on all communication channels such as Microsoft Teams, Google Meet, Zoom Call, Phone, Live Chats, and Emails to keep you informed of the current status of your Graph QL development project.
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
                                            How much does it cost to develop a Graph QL project?
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The development cost of a .NET-based project depends on the industry type, industry compliance, design complexity, the number of features and integrations you want within your app, the experience level of the Graph QL developer, location, and many more. You may get in touch with us to request a free no-obligation quote for your project.
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
                                            How do I find the best Graph QL development company?
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>

                                            Before finalizing the Graph QL development company, you need to look out for certain factors that wll help you make the right decision for your project. Some of the factors you need to look for are the company’s experience, work portfolio, clientele, client testimonials, technology stack, awards and recognitions, and many others.
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
                                            What are types of software can I develop using Graph QL?
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Graph QL can be used for developing websites, web applications, web portals, CRMs, CMS, and many more.

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
                                            How do you charge for hiring a Graph QL developer
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The estimated cost for hiring a Graph QL developer will depend on the number of years of experience a developer has and the complexity and size of the project.
                                            Have More Questions? Please Feel Free to Ask Our Team of Graph QL Experts.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                    </Grid>


                </Grid>
                <Footer />

            </Container>

        </>
    )
}

export default GraphQL
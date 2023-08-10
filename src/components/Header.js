import { AppBar, Toolbar, CssBaseline, Box, Typography, IconButton, Button, Grid } from '@mui/material';
// import logo from '../assets/logo.png'
import ScrollToColor from "../global/ScrollToColor";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from 'react';
import { AdelContext } from '../store/Context';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant';
import MegaMenu from "../utils/MegaMenu";
import { items, solutionsSection } from '../global/NavbarData'
import '../pages/Homepage.css'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const { state } = useContext(AdelContext)
    const navigate = useNavigate()

    return (
        <Grid item>
            <CssBaseline />
            <ScrollToColor>
                <AppBar>
                    <Toolbar>
                        <Box id="logoImg" sx={{ flexGrow: state.currentScreenSize > 918 ? 0.3 : 1 }} >
                            <Typography onClick={() => navigate('/')} variant='h1' sx={{ cursor: 'pointer', color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR }} fontWeight={900} fontSize={'25px'} >AdelSocial</Typography>
                            {/* <img width="200px" className='imgStyles' height="50px" style={{ aspectRatio: "auto 165 / 35" }} src={logo} alt="logo" /> */}
                        </Box>
                        {state.currentScreenSize > 918 && <Box sx={{ display: "flex", flexGrow: 1, justifyContent: 'space-evenly' }}>
                            <MegaMenu title="Home" />
                            <MegaMenu title="About" navigateHandlerTitleRoute='/about' />
                            <MegaMenu title="IT Services" data={items} />
                            <MegaMenu title="Solutions" data={solutionsSection} />
                            <MegaMenu title="Job Openings" navigateHandlerTitleRoute='/jobopenings' />
                            <MegaMenu title="Contact" navigateHandlerTitleRoute='/contact' />
                        </Box>}

                        <Box sx={{ display: "flex" }}>
                            <IconButton sx={{ color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", }}>
                                <SearchOutlinedIcon />
                            </IconButton>
                            <Button variant='outlined' sx={{ border: state.trigger && `1px solid ${SECONDARY_COLOR}`, color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, textTransform: 'unset', fontWeight: 900, display: { xs: 'none', sm: 'flex' } }}>Free Consultancy</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ScrollToColor>
        </Grid >
    );
}
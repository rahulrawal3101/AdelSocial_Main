import { AppBar, Box, Button, CssBaseline, Grid, IconButton, Toolbar } from '@mui/material';
// import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoMain2Up.png';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant';
import { items, solutionsSection } from '../global/NavbarData';
import ScrollToColor from "../global/ScrollToColor";
import '../pages/Homepage.css';
import { AdelContext } from '../store/Context';
import MegaMenu from "../utils/MegaMenu";
export default function Header() {
    const { state, dispatch } = useContext(AdelContext)
    const navigate = useNavigate()

    return (
        <Grid item>
            <CssBaseline />
            <ScrollToColor>
                <AppBar>
                    <Toolbar>
                        <Box id="logoImg" sx={{ flexGrow: state.currentScreenSize > 918 ? 0.3 : 1 }} >
                            {/* <Typography onClick={() => navigate('/')} variant='h1' sx={{ cursor: 'pointer', color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR }} fontWeight={900} fontSize={'25px'} >AdelSocial</Typography> */}
                            <div style={{ flexGrow: 1 }}>
                                <div style={{ height: '50px', width: '60px', }}>
                                    <img src={logo} onClick={() => navigate('/')} height={'50px'} width={'60px'} style={{ cursor: 'pointer' }} alt='pic' />
                                </div>
                            </div>
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
                        <MenuIcon onClick={() => dispatch({ type: "DRAWER_CLICKED", payload: true })} sx={{ ml: '20px', cursor: 'pointer' }} />
                    </Toolbar>
                </AppBar>
            </ScrollToColor>
        </Grid >
    );
}
import { Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import '../pages/Homepage.css'
import { useContext } from 'react';
import { AdelContext } from '../store/Context';
import { MAIN_COLOR } from '../constant';
import { useNavigate } from 'react-router-dom';

const SidebarDrawer = ({ currentPage }) => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(AdelContext)
    const style = {
        borderRadius: "50%",
        padding: '13px',
        marginRight: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <>
            {
                state.currentScreenSize < 918 && <Grid item sx={{ position: 'fixed', left: 0, top: '150px', transition: { sm: 'all 1s ease', xs: 'all 2s ease' }, zIndex: 999 }}>
                    <div className='cardSidebar' style={{ transform: state.currentScreenSize < 700 && state.drawer_opened === false ? 'translate(-67px)' : '' }}>
                        <div className={state.drawer_opened ? 'menuSidebar active' : 'menuSidebar'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ul className='uoListSidebar' >
                                <li className='liLisitSidebar' style={{ marginTop: '10px', marginLeft: state.drawer_opened ? "-40px" : "35px" }} >
                                    <span onClick={() => navigate('/')} style={{ color: currentPage === "Home" && MAIN_COLOR, borderRadius: "50%", padding: '13px', marginRight: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><HomeIcon sx={{ cursor: 'pointer' }} /></span>
                                    <span onClick={() => navigate('/')} className='sidebarNames' style={{ color: currentPage === "Home" && MAIN_COLOR, cursor: 'pointer' }}>Home</span>
                                </li>
                                <li className='liLisitSidebar' style={{ marginLeft: state.drawer_opened ? "-40px" : "35px" }}>
                                    <span onClick={() => navigate('/about')} style={style}><EmailIcon sx={{ cursor: 'pointer', color: currentPage === "about" && MAIN_COLOR, }} /></span>
                                    <span onClick={() => navigate('/about')} className='sidebarNames' style={{ cursor: 'pointer', color: currentPage === "about" && MAIN_COLOR, }}>About</span>
                                </li>
                                <li className='liLisitSidebar' style={{ marginLeft: state.drawer_opened ? "-40px" : "35px" }}>
                                    <span onClick={() => navigate('/itservices')} style={style}><SettingsIcon sx={{ cursor: 'pointer', color: currentPage === "services" && MAIN_COLOR, }} /></span>
                                    <span onClick={() => navigate('/itservices')} className='sidebarNames' style={{ cursor: 'pointer', color: currentPage === "services" && MAIN_COLOR, }}>Services</span>
                                </li>
                                <li className='liLisitSidebar' style={{ marginLeft: state.drawer_opened ? "-40px" : "35px" }}>
                                    <span onClick={() => navigate('/contact')} style={style}><PermContactCalendarIcon sx={{ cursor: 'pointer', color: currentPage === "contact" && MAIN_COLOR, }} /></span>
                                    <span onClick={() => navigate('/contact')} className='sidebarNames' style={{ cursor: 'pointer', color: currentPage === "contact" && MAIN_COLOR, }}>Contact</span>
                                </li>
                                <li className='liLisitSidebar' style={{ marginLeft: state.drawer_opened ? "-40px" : "35px" }}>
                                    <span onClick={() => navigate('/jobopenings')} style={style}><ExitToAppIcon sx={{ cursor: 'pointer', color: currentPage === "job" && MAIN_COLOR, }} /></span>
                                    <span onClick={() => navigate('/jobopenings')} className='sidebarNames' style={{ cursor: 'pointer', color: currentPage === "job" && MAIN_COLOR, }}>Job Openings</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="toggle" style={{ transform: state.currentScreenSize < 700 && state.drawer_opened === false ? 'translate(-67px)' : '' }} onClick={() => dispatch({ type: 'DRAWER_CLICKED', payload: state.drawer_opened })} >
                        <div className={state.drawer_opened ? "line1 active" : "line1"}></div>
                        <div className={state.drawer_opened ? "line2 active" : "line2"}></div>
                    </div>
                </Grid>
            }
        </>
    )
}

export default SidebarDrawer
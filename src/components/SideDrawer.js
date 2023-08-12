import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AdelContext } from '../store/Context';
import { Typography } from '@mui/material';
import './SideDrawer.css'


const data = [
    { title: 'Services', list: ['Whats API', 'Bulk Whatsapp', 'Bulk Mail', 'Bulk SMS'] },
    { title: 'Products', list: ['Whatsapp Web Panel'] },
    { title: 'Expertise', list: ['Backend', 'Frontend', 'App Development', 'Web Development', 'Digital Marketing', 'E-Commerce'] }
]

export default function SideDrawer() {
    const { state, dispatch } = React.useContext(AdelContext)
    const list = () => {
        return <Box
            sx={{ width: 250, height: '100%', bgcolor: 'white', color: 'white' }} role="presentation" >
            {data.map((item) => {
                return <div key={item.title}>
                    <Box Box sx={{ p: '5px', bgcolor: '#0b0536', }}>
                        <Typography textAlign={'center'} variant='h1' sx={{ fontWeight: 900, letterSpacing: '2px', fontSize: '20px' }}>
                            {item.title}
                        </Typography>
                    </Box>
                    {item.list.map((list) => {
                        return <Box key={list} className="controlHoverServicesParent" sx={{ mb: '10px', mt: '10px', cursor: 'pointer' }}>
                            <Box className="controlHoverServices">
                                <Typography className='controlHoverServicesText' variant='h1' sx={{ ml: '10px', fontWeight: 500, fontSize: '18px', whiteSpace: 'nowrap' }}>
                                    {list}
                                </Typography>
                            </Box>
                        </Box>
                    })}

                </div>
            })}
        </Box>

    };

    return (
        <div>
            <Drawer
                anchor={'left'}
                open={state.drawer_opened}
                onClose={() => dispatch({ type: 'DRAWER_CLICKED', payload: false })}>
                {list()}
            </Drawer>
        </div>
    );
}
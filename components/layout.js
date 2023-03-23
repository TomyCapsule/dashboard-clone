import {Box} from '@mui/material';
import Sidebar from './navigation/sidebar';
import Header from './header/header';
import Upgrade from './upgrade';

export default function Layout({children}){
    return(
        <Box component="div" sx={{width:'100%', height:'100vh', display:'flex'}}>
            <Sidebar />
            <Box component="div" sx={{width:'100%', height:'100vh'}}>
                <Header />
                {children}
            </Box>
        </Box>
    )
}
import Image from 'next/image';
import {Box} from '@mui/material';
import dashboardIcon from '../../public/dashboard.png';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import navigationItems from './navigationItems';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Sidebar(){

    const router = useRouter();

    const isActive = (itemPath) =>{
        if(router.pathname == itemPath) return true
        return false
    }

    return(
        <Box component="div" sx={{width:"20%"}}>
            <Box component="div" sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center',margin:'1rem'}}>
                <Image src={dashboardIcon} alt="dashboardIcon" layout="fixed" width={60} height={50}/>
                <Typography variant="h5" sx={{color:'#000'}}>MyDashboard</Typography>
            </Box>
            <List>
                {navigationItems.map((navItem,i)=>{
                    if(navItem.subHeader) return (<ListSubheader sx={{backgroundColor:'#ecf0f1'}}>{navItem.subHeader}</ListSubheader>);
                    return(
                        <ListItem disablePadding sx={{paddingRight:'2rem', marginTop:'1rem', marginBottom:'1rem'}}>
                            <Link href={navItem.path}>
                                <ListItemButton 
                                    sx={{
                                        background: isActive(navItem.path) 
                                            ? "linear-gradient(to right, rgba(173,167,229,1) 0%,rgba(146,137,229,1) 59%,rgba(127,118,226,1) 100%,rgba(108,92,231,1) 100%,rgba(173,167,229,1) 100%,rgba(155,146,229,1) 100%,rgba(173,167,229,1) 101%);" 
                                            : "transparent",
                                        borderTopRightRadius:'25px', 
                                        borderBottomRightRadius:'25px',}}>
                                        <ListItemIcon>
                                            {navItem.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={navItem.name} sx={{color: isActive(navItem.path) ? '#FFF' : '#000'}}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    )
                }
                )}
            </List>
        </Box>
    )
}
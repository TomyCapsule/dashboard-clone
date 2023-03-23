import {useState} from 'react';
import {Box} from '@mui/material';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AvatarIcon from './avatarIcon';
import NotificationIcon from './notificationIcon';


export default function Header(){

    return(
        <Box 
            component="div" 
            sx={{width: '100%', height:'10vh', display:'flex', alignItems:'center', justifyContent:'space-between'}}
        >
            <Input 
                type="text" 
                placeholder="Search"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                }
                sx={{marginLeft:'2rem'}}
            />
            <Box
                component="div"
                sx={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:'100%',width:'30%',paddingRight:'20px'}}
            >
                <NotificationIcon />
                <AvatarIcon />
            </Box>
        </Box>
    )
}
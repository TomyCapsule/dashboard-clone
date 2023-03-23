import { Box, Typography } from "@mui/material"
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';
import manIcon from '../../public/man.png';
import Image from 'next/image';

export default function AvatarMenuUserInfo(){
    return(
        <>
            <Box component="div" sx={{display:'flex', margin:'1rem'}}>
                <Avatar sx={{ width: 50, height: 50 }}><Image src={manIcon} /></Avatar>
                <Box component="div">
                    <Typography variant="h5">Cadenza</Typography>
                    <Typography variant="subtitle1" sx={{color:'#b2bec3'}}>Admin</Typography>
                </Box>
            </Box>
            <Divider />
        </>
    )
}
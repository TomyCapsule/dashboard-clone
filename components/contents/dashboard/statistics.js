import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Paper from '@mui/material/Paper'

export default function Statistics(props){
    console.log('props in statistics', props);
    const statsToDisplay = () =>{
        return props.stats.map((elt)=>{
            return(
                <Box component="div" sx={{display:'flex'}}>
                    <Image src={elt.icon} layout="fixed" width={50} height={50}/>
                    <Box component="div" sx={{marginLeft:'1rem'}}>
                        <Typography sx={{fontSize:12}}>
                            {elt.name}
                        </Typography>
                        <Typography variant='h4'>
                            {elt.value/1000}k
                        </Typography>
                    </Box>
                </Box>
            )
        })
    }

    return(
            <Paper elevation={3} sx={{width:"100%", p:3, height:"100%", display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Box component="div">
                        <Typography variant="h6" gutterBottom>
                            Statistics
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total 48.5% growth this month
                        </Typography>
                    </Box>
                    <Box compenent="div" sx={{display:'flex', justifyContent:"space-evenly", marginTop:'1rem'}}>
                        {statsToDisplay()}
                    </Box>
            </Paper>
    )
}
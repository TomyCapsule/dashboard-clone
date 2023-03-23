import {Box, Typography, Paper, LinearProgress} from '@mui/material'
import Image from 'next/image'

export default function TotalEarnings(props){

    const clientsToDisplay = () =>{
        return props.clients.map(elt => {
            return(
                <Box component="div" sx={{display:'flex', justifyContent:"space-between"}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Image src={elt.icon} layout="fixed" width={30} height={30}/>
                        <Box sx={{marginLeft:'1rem'}}>
                            <Typography sx={{fontSize:14, fontWeight:"bold"}}>
                                {elt.name}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                {elt.stacks}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{width:"20%"}}>
                        <Typography sx={{fontSize:14,fontWeight:"bold"}} >
                            {elt.value}€
                        </Typography>
                        <LinearProgress value={elt.progress} variant="determinate"/>
                    </Box>
                </Box>
            )
        })
    }

    return(
            <Paper elevation={3} sx={{width:"100%", height:"100%", p:3, display:"flex", flexDirection:"column",justifyContent:"space-between"}}>
                <Box>
                    <Typography variant="h6" sx={{marginBottom:'2rem'}} gutterBottom>
                        Total Earnings
                    </Typography>
                    <Typography variant="h4" sx={{fontWeight:'bold'}}>
                        34,790€
                    </Typography>
                    <Typography color="text.secondary">
                        Compared to 15345€ last year
                    </Typography>
                </Box>
                {clientsToDisplay()}
            </Paper>
    )
}
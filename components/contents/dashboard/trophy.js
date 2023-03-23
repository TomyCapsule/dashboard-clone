import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import trophy from '../../../public/trophy.png'
import Paper from '@mui/material/Paper'

export default function Trophy() {
    return (
        
            <Paper elevation={3} sx={{width:"100%", display:"flex", justifyContent:'space-between', alignItems:'center', p:3, height:"100%"}}>
                    <Box component="div" sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Box>
                            <Typography variant="h6">
                                Congratulations Cadenza
                            </Typography>
                            <Typography sx={{fontSize:14}} color="text.secondary" gutterBottom>
                                Best seller of the month
                            </Typography>
                        </Box>
                        <Typography variant="h5" color="#6c5ce7">
                            48k €
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor:'#6c5ce7', marginTop:'1rem'}}>View Sales</Button>
                    </Box>
                    <Image src={trophy} layout="fixed" width={100} height={100} />
            </Paper>
    )
}
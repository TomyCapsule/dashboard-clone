import { Box, Paper, Typography, Divider} from '@mui/material';
import Image from 'next/image';

export default function DepositWithdraw(props){

    const {depositList, withdrawList} = props;

    const withdrawListToDisplay = () => {
        return withdrawList.map(withdraw =>{
            return(
                <Box component="div" sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'1rem'}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Image src={withdraw.logo} layout="fixed" width={30} height={30} />
                        <Box sx={{marginLeft:"1rem"}}>
                            <Typography sx={{fontSize:16, fontWeight:600}}>
                                {withdraw.name}
                            </Typography>
                            <Typography variant="caption" color='text.secondary'>
                                {withdraw.caption}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize:16, color:'red', fontWeight:"bold"}}>
                            {withdraw.value} €
                        </Typography>
                    </Box>
                </Box>
            )
        })
    }

    const depositListToDisplay = () => {
        return depositList.map(deposit =>{
            return(
                <Box component="div" sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'1rem'}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Image src={deposit.logo} layout="fixed" width={30} height={30} />
                        <Box sx={{marginLeft:"1rem"}}>
                            <Typography sx={{fontSize:16, fontWeight:600}}>
                                {deposit.name}
                            </Typography>
                            <Typography variant="caption" color='text.secondary'>
                                {deposit.caption}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize:16, color:'green', fontWeight:"bold"}}>
                            {deposit.value} €
                        </Typography>
                    </Box>
                </Box>
            )
        })
    }

    console.log('depositList', depositList);
    console.log('withdrawList',withdrawList);

    return(
        <Paper elevation={3} sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center'}}>
            <Box component="div" sx={{p:3, width:'100%'}}>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem'}}>
                    <Typography variant="h6">
                        Deposit
                    </Typography>
                    <Typography variant="caption">
                        View all
                    </Typography>
                </Box>
                {depositListToDisplay()}
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Box component="div" sx={{p:3, width:'100%'}}>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem'}}>
                    <Typography variant="h6">
                        Withdraw
                    </Typography>
                    <Typography variant="caption">
                        View all
                    </Typography>
                </Box>
                {withdrawListToDisplay()}
            </Box>
        </Paper>
    )
}
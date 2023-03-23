import {Box, Grid, Paper, Typography} from '@mui/material'

export default function News(props){
    return(
        <Box sx={{width:'100%', height:'90vh'}}>
            <Grid container spacing={3}>
                <Grid item xs={11.5}>
                    <Paper elevation={3} sx={{width:'100%', height:'100%'}}>
                        <Typography sx={{fontSize:14}}>
                            News page wip
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}
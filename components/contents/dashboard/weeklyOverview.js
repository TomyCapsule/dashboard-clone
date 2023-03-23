import {Box, Paper, Typography, Button } from "@mui/material";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function WeeklyOverview(){

    const options = {
        chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6", "Wk7"]
          },
          colors:['#6c5ce7']
    }

    const series = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60]
        }
    ]

    return(
            <Paper elevation={3} sx={{width:'100%', height:'100%', p:3}}>
                <Typography variant="h6" sx={{marginBottom:'2rem'}}>Weekly Overview</Typography>
                <ReactApexChart options={options} series={series} type="bar"/>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Typography variant="h4" sx={{marginRight:'1rem'}}>
                        45%
                    </Typography>
                    <Typography variant="subtitle1">
                        Your sales performance is 45% 😎 better compared to last month
                    </Typography>
                </Box>
                <Button variant="contained" sx={{width:"100%", marginTop:'1rem', backgroundColor:'#6c5ce7'}}>View Details</Button>
            </Paper>
    )
}
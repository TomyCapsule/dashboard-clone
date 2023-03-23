import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Image from 'next/image'

export default function QuickStatsContent(props) {

    const { title, value, subtitle } = props;

    return (
        <Grid item xs={6}>
            <Paper elevation={3} sx={{ height: "100%", width: "100%", p: 3 }}>
                <Box sx={{marginBottom:'2rem'}}>
                    <Image src='/chart.png' layout="fixed" width={50} height={50} />
                </Box>
                <Box sx={{ marginTop: '1rem' }}>
                    <Typography sx={{ fontSize: 18 }}>{title}</Typography>
                    <Typography variant="h5">{value > 1000 ? `${value / 1000}k €` : value}</Typography>
                </Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{marginBottom:'0.5rem'}}>{subtitle}</Typography>
            </Paper>
        </Grid>
    )
}
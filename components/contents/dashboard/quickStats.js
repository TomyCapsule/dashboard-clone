import React from "react";
import Grid from '@mui/material/Grid';
import QuickStatsContent from "./quickStatsContent";

export default function QuickStats(props) {
    return (
            <Grid container spacing={3} sx={{ height: '100%' }}>
                <QuickStatsContent title="Total Profit" value={25600} subtitle="Weekly Profit" />
                <QuickStatsContent title="Refunds" value={5000} subtitle="Past Month" />
                <QuickStatsContent title="New Project" value={862} subtitle="Yearly Project" />
                <QuickStatsContent title="Sales Queries" value={15} subtitle="Last Week" />
            </Grid>
    )
}
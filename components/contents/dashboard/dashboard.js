import { Box, Grid } from '@mui/material';
import Trophy from './trophy';
import Statistics from './statistics';
import WeeklyOverview from './weeklyOverview';
import TotalEarnings from './totalEarnings';
import QuickStats from './quickStats';
import SalesByCountries from './salesByCountries';
import DepositWithdraw from './depositWithdraw';
import EmployeeStatus from './employeeStatus';

export default function Dashboard(props) {
    console.log("props", props)
    return (
        <Box component="div" sx={{ width: '100%', height: "90vh", marginTop: '1rem' }}>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid item xs={4}>
                    <Trophy />
                </Grid>
                <Grid item xs={7.5}>
                    <Statistics stats={props.stats.stats} />
                </Grid>
                <Grid item xs={4}>
                    <WeeklyOverview />
                </Grid>
                <Grid item xs={4}>
                    <TotalEarnings clients={props.stats.clients} />
                </Grid>
                <Grid item xs={3.5}>
                    <QuickStats />
                </Grid>
                <Grid item xs={4}>
                    <SalesByCountries countries={props.stats.salesByCountries} />
                </Grid>
                <Grid item xs={7.5}>
                    <DepositWithdraw depositList={props.stats.depositList} withdrawList={props.stats.withdrawList} />
                </Grid>
                <Grid item xs={11.5}>
                    <EmployeeStatus employeeList={props.stats.employeeList} />
                </Grid>
            </Grid>
        </Box>
    )
}
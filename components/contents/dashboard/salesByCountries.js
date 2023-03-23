import { Box, Typography, Avatar, Paper, Grid } from '@mui/material'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function SalesByCountries(props) {
    console.log('props in salesbycountries', props)

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    const countriesToDisplay = () => {
        return props.countries.map(country => {
            return (
                <Box component="div" sx={{ display: 'flex', justifyContent: "space-between", marginTop: '1rem' }}>
                    <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            sx={{ marginRight: '1rem', bgcolor: stringToColor(country.name) }}
                            children={`${country.name.split('')[0][0]}${country.name.split('')[1][0]}`.toUpperCase()}
                        />
                        <Box>
                            <Typography sx={{ fontSize: 16, display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                                {country.total / 1000}k €
                                {country.trend ? <TrendingUpIcon color="success" sx={{ margin: "0 1rem" }} /> : <TrendingDownIcon color="error" sx={{ margin: '0 1rem' }} />}
                                <Typography variant="caption" sx={{ fontWeight: 600, color: country.trend ? "green" : "red" }}>
                                    {country.diff}
                                </Typography>
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                {country.name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box component="div">
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                            {country.value / 1000}k €
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Sales
                        </Typography>
                    </Box>
                </Box>
            )
        })
    }

    return (
        <Paper elevation={3} sx={{ width: '100%', height: '100%', p: 3 }}>
            <Typography variant="h6" color='text.primary' sx={{marginBottom:'2rem'}}>Sales By Countries</Typography>
            {countriesToDisplay()}
        </Paper>
    )
}
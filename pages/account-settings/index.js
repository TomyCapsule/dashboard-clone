import { Box, Typography, Paper, Tabs, Tab, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TabAccount from '../../components/contents/account-settings/tabAccount';
import TabSecurity from '../../components/contents/account-settings/tabSecurity';
import TabInfo from '../../components/contents/account-settings/tabInfo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AccountSettings() {

  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(0);
  }, [])

  return (
    <Box component='div' sx={{ width: '100%', height: '90vh' }}>
      <Grid container spacing={3}>
        <Grid item xs={11.5}>
          <Paper elevation={3} sx={{ height: '100%', width: '100%',marginLeft: '1rem', marginTop: '1rem' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PersonOutlineIcon />
                    <Typography variant="subtitle1">Account</Typography>
                  </Box>
                }
                  {...a11yProps(0)}
                />

                <Tab label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LockOpenIcon />
                    <Typography variant="subtitle1">Security</Typography>
                  </Box>
                }
                  {...a11yProps(1)}
                />

                <Tab label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <InfoOutlinedIcon />
                    <Typography variant="subtitle1">Info</Typography>
                  </Box>
                }
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TabAccount />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <TabSecurity />
            </TabPanel>

            <TabPanel value={value} index={2}>
              <TabInfo />
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
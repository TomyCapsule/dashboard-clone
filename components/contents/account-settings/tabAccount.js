import { Grid, Box, Typography, Button, TextField, FormControl, InputLabel, MenuItem, Select, Alert, AlertTitle, Collapse } from '@mui/material';
import Image from 'next/image';
import {useState, useEffect} from 'react';

export default function TabAccount() {

    const [collapseState, setCollapseState] = useState(null);

    useEffect(()=>{
        setCollapseState(true);
    },[])

    return (
        <Box component='div'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/man.png" layout="fixed" width={150} height={150} />
                <Box sx={{ marginLeft: "1rem" }}>
                    <Box sx={{ display: 'flex' }}>
                        <Button size="large" variant="contained">Upload new photo</Button>
                        <Button size="large" variant="outlined" sx={{ color: 'red', marginLeft: '1rem' }}>Reset</Button>
                    </Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ marginTop: '1rem' }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
                </Box>
            </Box>

            <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <Grid item xs={6}>
                    <TextField label="Username" defaultValue="Cadenza" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Name" defaultValue="Exserens" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email" defaultValue="neco@arc.cadenza" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select label='Role' defaultValue='admin'>
                            <MenuItem value='admin'>Admin</MenuItem>
                            <MenuItem value='author'>Author</MenuItem>
                            <MenuItem value='editor'>Editor</MenuItem>
                            <MenuItem value='maintainer'>Maintainer</MenuItem>
                            <MenuItem value='subscriber'>Subscriber</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select label='Status' defaultValue='active'>
                            <MenuItem value='active'>Active</MenuItem>
                            <MenuItem value='inactive'>Inactive</MenuItem>
                            <MenuItem value='pending'>Pending</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Company" defaultValue="Ahnenerbe" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Collapse in={collapseState}>
                        <Alert severity="warning" onClose={() => {setCollapseState(false)}}>
                            <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                            <Button size="large" variant="outlined">Resend confirmation</Button>
                        </Alert>
                    </Collapse>
                </Grid>
            </Grid>
            <Box sx={{marginTop:'1rem'}}>
                <Button variant="contained" size="large" sx={{marginRight:"1rem"}}>Save Changes</Button>
                <Button variant="outlined" size="large">Reset</Button>
            </Box>
            
        </Box>
    )
}
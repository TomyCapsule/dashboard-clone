import {Box, Paper, Typography, Chip} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function EmployeeStatus(props){

    const {employeeList} = props;

    const chipColor = {
        applied: { color: 'info' },
        rejected: { color: 'error' },
        current: { color: 'primary' },
        resigned: { color: 'warning' },
        professional: { color: 'success' }
      }
      

    const employeeListToDisplay = () => {
        return employeeList.map(employee => {
            return(
                <TableRow key={employee.name}>
                    <TableCell>
                        <Typography>{employee.name}</Typography>
                        <Typography variant="caption" color='text.secondary'>{employee.role}</Typography>
                    </TableCell>
                    <TableCell>{employee.mail}</TableCell>
                    <TableCell>{employee.date}</TableCell>
                    <TableCell>{employee.salary} €</TableCell>
                    <TableCell>{employee.age}</TableCell>
                    <TableCell><Chip label={employee.status} color={chipColor[employee.status.toLowerCase()].color} /></TableCell>
                </TableRow>
            )
        })
    }

    return(
        <Paper elevation={3} sx={{width:'100%', height:"100%"}}>
            <TableContainer component={Paper}>
                <Table aria-label="Employee Table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight:600}}>NAME</TableCell>
                            <TableCell sx={{fontWeight:600}}>EMAIL</TableCell>
                            <TableCell sx={{fontWeight:600}}>DATE</TableCell>
                            <TableCell sx={{fontWeight:600}}>SALARY</TableCell>
                            <TableCell sx={{fontWeight:600}}>AGE</TableCell>
                            <TableCell sx={{fontWeight:600}}>STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeListToDisplay()}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
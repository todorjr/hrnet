import { Box, Container, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/hrnet.png'


const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']

function CreateEmployee() {
  const navigate = useNavigate()

  const viewEmployees = () => {
    navigate('/employees')
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Container
        maxWidth="sm"
        maxHeight="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', 
          borderRadius: '10px',
          padding: '20px',
          marginTop: '50px',
      }}>
        <h1 style={{
          color: 'black',
          fontSize: '32px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '600'
          }}
        >
            HR Net
        </h1>
        <Button variant="contained" color="primary" display="block" onClick={viewEmployees}>View Current Employees</Button>
        <h2 style={{
          color: 'black',
          fontSize: '20px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '400'
          }}
        >
          Create Employee
        </h2>
        <form noValidate autoComplete="off">
          <TextField fullWidth label="First Name" margin="normal" />
          <TextField fullWidth label="Last Name" margin="normal" />
          <TextField fullWidth label="Date of Birth" margin="normal" type="date" InputLabelProps={{ shrink: true }} />
          <TextField fullWidth label="Start Date" margin="normal" type="date" InputLabelProps={{ shrink: true }} />
          <TextField fullWidth label="Street" margin="normal" />
          <TextField fullWidth label="City" margin="normal" />
          <FormControl fullWidth margin="normal">
            <InputLabel id="state-select-label">State</InputLabel>
            <Select labelId="state-select-label" label="State" value="Alabama">
              <MenuItem value="Alabama">Alabama</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth label="Zip Code" margin="normal" />
          <FormControl fullWidth margin="normal">
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select labelId="department-select-label" label="Department" defaultValue="Sales">
              {departments.map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="success" fullWidth type="submit">
            Save
          </Button>
        </form>
      </Container>
    </Box>
  )
}

export default CreateEmployee
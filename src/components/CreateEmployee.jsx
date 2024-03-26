import { useState } from 'react'
import { Box, Container, TextField, Button, Select, MenuItem, InputLabel, FormControl, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']
const states =  ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia' , 'Hawaii',  'Idaho', 'Illinois', 'Indiana']

// eslint-disable-next-line react/prop-types
function CreateEmployee({addEmployee} ) {
  const navigate = useNavigate()
  const [employee, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: 'Alabama',
    zipCode: '',
    department: 'Sales'
  })
  const [employees, setEmployees] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEmployeeData({ ...employee, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      employee.firstName.trim() === '' ||
      employee.lastName.trim() === '' ||
      employee.birthDate.trim() === '' ||
      employee.startDate.trim() === '' ||
      employee.street.trim() === '' ||
      employee.city.trim() === '' ||
      employee.state.trim() === '' ||
      employee.zipCode.trim() === '' ||
      employee.department.trim() === ''
    ) {
      setModalMessage('Please fill in all required fields.')
      setOpenModal(true)
    } else {
      setModalMessage('Employee added successfully!')
      setOpenModal(true)
      
      const newEmployee = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        birthDate: employee.birthDate,
        startDate: employee.startDate,
        street: employee.street,
        city: employee.city,
        state: employee.state,
        zipCode: employee.zipCode,
        department: employee.department
      }
      addEmployee(newEmployee)
      setEmployees([...employees, newEmployee])
      setEmployeeData({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: 'Alabama',
        zipCode: '',
        department: 'Sales'
      })
    }
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const viewEmployees = () => {
    navigate('/employees')
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      background: 'linear-gradient(332deg, #09bef24f, #00070b)'

    }}>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          margin: '20px',
          padding: '10px'
        }}>
        <h1 className="mainTitle">HR Net</h1>
        <Button variant="contained" color="primary" display="block" onClick={viewEmployees}>View Current Employees</Button>
        <h2 className="subTitle">Create Employee</h2>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField fullWidth label="First Name" margin="normal" name="firstName" value={employee.firstName} onChange={handleInputChange} />
          <TextField fullWidth label="Last Name" margin="normal" name="lastName" value={employee.lastName} onChange={handleInputChange} />
          <TextField fullWidth label="Date of Birth" margin="normal" type="date" InputLabelProps={{ shrink: true }} name="birthDate" value={employee.birthDate} onChange={handleInputChange} />
          <TextField fullWidth label="Start Date" margin="normal" type="date" InputLabelProps={{ shrink: true }} name="startDate" value={employee.startDate} onChange={handleInputChange} />
          <TextField fullWidth label="Street" margin="normal" name="street" value={employee.street} onChange={handleInputChange} />
          <TextField fullWidth label="City" margin="normal" name="city" value={employee.city} onChange={handleInputChange} />
          <FormControl fullWidth margin="normal">
            <InputLabel id="state-select-label">State</InputLabel>
            <Select labelId="state-select-label" label="state" name="state" value={employee.state} onChange={handleInputChange}>
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField fullWidth label="Zip Code" margin="normal" name="zipCode" value={employee.zipCode} onChange={handleInputChange} />
          <FormControl fullWidth margin="normal">
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select labelId="department-select-label" label="Department" name="department" value={employee.department} onChange={handleInputChange}>
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
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>HR Net Form</DialogTitle>
          <DialogContent>
            <p>{modalMessage}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  )
}

export default CreateEmployee;

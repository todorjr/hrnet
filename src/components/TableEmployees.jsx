import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'



function TableEmployees () {
    const navigate = useNavigate()

    const goBack = () => {
      navigate('/')
    };
    return (
        <div>
            <h1>Table Employees</h1>
            <Button onClick={goBack}>Home</Button>
        </div>

    )
}

export default TableEmployees
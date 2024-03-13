import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { TableData }  from 'data-render-table';


function TableEmployees () {
    const navigate = useNavigate()

    const goBack = () => {
      navigate('/')
    };
    return (
        <div>
            <TableData />
            <Button onClick={goBack}>Home</Button>
        </div>

    )
}

export default TableEmployees
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import Table from 'data-render-table';


function TableEmployees () {
    const navigate = useNavigate()

    const goBack = () => {
      navigate('/')
    };
    return (
        <div>
            <Table />
            <Button onClick={goBack}>Home</Button>
        </div>

    )
}

export default TableEmployees
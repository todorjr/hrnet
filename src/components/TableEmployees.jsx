import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import Table from 'data-render-table'

// eslint-disable-next-line react/prop-types
function TableEmployees ({employees}) {
    const navigate = useNavigate()

    const goBack = () => { navigate('/') }
    return (
        <div>
            <Table employees={employees}/>
            <div style={{ textAlign: 'center' }}>
                <Button onClick={goBack}>Home</Button>
            </div>
        </div>

    )
}

export default TableEmployees
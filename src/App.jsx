import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './style/form.css'
import CreateEmployee from "./components/CreateEmployee"
import TableEmployees from "./components/TableEmployees"

function App() {

  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem('employees')
    return storedEmployees ? JSON.parse(storedEmployees) : []
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const addEmployee = (employee) => {
    const formattedEmployee = {
      ...employee,
      birthDate: formatDate(employee.birthDate),
      startDate: formatDate(employee.startDate)
    }
    setEmployees([...employees, formattedEmployee])
  }

  return (
    <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee addEmployee={addEmployee}/>} />
          <Route path="/employees" element={<TableEmployees employees={employees}/>} />

        </Routes>
    </Router>
  );
}

export default App
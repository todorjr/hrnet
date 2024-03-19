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

  const addEmployee = (employee) => {
    setEmployees([...employees, employee])
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
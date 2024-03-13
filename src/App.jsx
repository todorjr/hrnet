import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateEmployee from "./components/CreateEmployee"
import TableEmployees from "./components/TableEmployees"


function App() {
  const [employees, setEmployees] = useState([])

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
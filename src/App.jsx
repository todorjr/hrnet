
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateEmployee from "./components/CreateEmployee"
import TableEmployees from "./components/TableEmployees"


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<TableEmployees />} />

        </Routes>
    </Router>
  );
}

export default App
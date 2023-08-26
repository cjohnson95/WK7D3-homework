import { useState } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Employeepage from "./components/employeepage/Employeepage";

function App() {
  
  const [currentEmployee, setCurrentEmployee] = useState({
    name:'nothing here',
    title:'nothing',
  });

  function handleUserClick(employeeObject) {
    setCurrentEmployee(employeeObject);
    console.log(employeeObject);
  }

  return (
    <div className="App">
      <Homepage handleUserClick={handleUserClick} />
      <Employeepage employee={currentEmployee}/>
    </div>
  );
}

export default App;

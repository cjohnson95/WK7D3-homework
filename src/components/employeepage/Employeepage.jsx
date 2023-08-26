import "./employeepage.css";
import Header from "../header/Header";

function Employeepage({employee}) {
 
  return (
    <div className="Employeepage">
      <Header title="Employee" />
      <div className="employeeOverview card">
      <div className="profile-icon"></div>
      <div className="profile-info">
        <h2>{employee.name}</h2>
        <h4>{employee.title}</h4>
      </div>
      </div>
      <div className="employeeOffice card">
      <h3>Call Office</h3>
      <p>617-000-0002</p>
      </div>
      <div className="employeeMobile card">
      <h3>Call Mobile</h3>
      <p>781-000-0002</p>
      </div>
      <div className="employeeSMS card">
      <h3>SMS</h3>
      <p>617-002-0000</p>
      </div>
      <div className="employeeEmail card">
      <h3>Email</h3>
      <p>jtaylor@fmail.com</p>
      </div>
    </div>
  );
}

export default Employeepage;

import "./employeelistitem.css";

function Employeelistitem({
  employeeName, 
  employeeTitle, 
  handleUserClick}) {
  return (
    <div onClick={ () => 
    {handleUserClick({name:employeeName, title:employeeTitle})}} 
    className="Employeelistitem">
      <img></img>
      <h3>{employeeName}</h3>
      <p>{employeeTitle}</p>
    </div>
  );
}

export default Employeelistitem;

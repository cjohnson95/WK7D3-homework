import "./employeelist.css";
import Employeelistitem from "../employeelistitem/Employeelistitem";

function Employeelist({handleUserClick}) {
  const employeeObjectList = [
    { name: "James King", title: "President and CEO" },
    { name: "Julie Taylor", title: "Security Analyst" },
    { name: "Eugene Lee", title: "Help Desk" },
    { name: "John Williams", title: "Head of Sales" },
    { name: "Ray Moore", title: "Software Engineer" },
  ];

  return (
    <div className="employeelist">
      {employeeObjectList.map((item) => {
        return (
          <Employeelistitem
          handleUserClick={handleUserClick}
            employeeName={item.name}
            employeeTitle={item.title}
          />
        );
      })}
    </div>
  );
}

export default Employeelist;

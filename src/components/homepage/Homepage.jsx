import "./homepage.css";
import Header from "../header/Header";
import Searchbar from "../searchbar/Searchbar";
import Employeelist from "../employeelist/Employeelist";

function Homepage({handleUserClick}) {
  return (
    <div className="Homepage">
      <Header title = "Employee Directory"/>
      <Searchbar />
      <Employeelist handleUserClick={handleUserClick}/>
    </div>
  );
}

export default Homepage;

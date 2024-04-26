import Employee from "./Components/Employee";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "caleb",
      role: "dev",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      id: 2,
      name: "shri",
      role: "fsd",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      id: 3,
      name: "gandhi",
      role: "politician",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
  ]);

  function updateParent(id, newName, newRole, newImg) {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole, img: newImg };
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  }

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => (
          <Employee
            key={Math.random()}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            updateParent={updateParent}
          />
        ))}
      </div>
      <Button variant="outline-primary">Primary</Button>{" "}
    </>
  );
}

export default App;

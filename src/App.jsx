import Employee from "./Components/Employee";
import { useState } from "react";
import Button from "react-bootstrap/Button";


function App() {
  const [employees, setEmployees] = useState([
    {
      name: "caleb",
      role: "dev",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      name: "shri",
      role: "fsd",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    {
      name: "gandhi",
      role: "politician",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => (
          <Employee
            key={Math.random()}
            name={employee.name}
            role={employee.role}
            img={employee.img}
          />
        ))}
      </div>
      <Button variant="outline-primary">Primary</Button>{" "}
    </>
  );
}

export default App;

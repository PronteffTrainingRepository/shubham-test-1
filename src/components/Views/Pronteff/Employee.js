import React, { useState } from "react";

function NewEmployee() {
  const [employee, setInfo] = useState({
    id: "",
    name: "",
    location: "",
    salary: "",
  });

  function setEmployee(e) {
    setInfo(...employee, { [e.target.name]: e.target.value });
  }

  return (
    <div>
      <label>Id :&nbsp; &nbsp; &nbsp;&nbsp;</label>
      <input type="text" name="id" value={employee.id} onChange={setEmployee} />
      <br />
      <label>Name :&nbsp; &nbsp; &nbsp;&nbsp;</label>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={setEmployee}
      />
      <br />
      <label>Location :&nbsp;&nbsp;</label>
      <input
        type="text"
        name="location"
        value={employee.location}
        onChange={setEmployee}
      />
      <br />
      <label>Salary :&nbsp; &nbsp; &nbsp;&nbsp;</label>
      <input
        type="number"
        name="salary"
        value={employee.salary}
        onChange={setEmployee}
      />
      <br />
      <p>
        You Have Entered Name : <b>{employee.id}</b> <br />
        You Have Entered Name : <b>{employee.name}</b> <br />
        you Have Entered Location :<b>{employee.location}</b> <br />
        You Have Entered Name : <b>{employee.salary}</b> <br />
      </p>
      <SalaryComponent onSalaryChange={setEmployee} salary={employee.salary} />
    </div>
  );
}
const SalaryComponent = ({ onSalaryChange, salary }) => {
  return (
    <div>
      <label>Salary :&nbsp; &nbsp; &nbsp;&nbsp;</label>
      <input
        type="number"
        name="salary"
        value={salary}
        onChange={onSalaryChange}
      />
      <br />
    </div>
  );
};
export default NewEmployee;

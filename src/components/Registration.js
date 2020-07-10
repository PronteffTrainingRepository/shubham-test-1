import React, { Component } from "react";//importing React from react and component class
//import "./Registration.css";  //importing external css file

export class Registration extends Component {
  //Constructor starts
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      emp_id: "",
      profession: "",
      gender: false,
      tecs: "",
      desc: "",
    };
       this.handleChange = this.handleChange.bind(this);
  }
  //Constructor ends

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      }
    );
  };
  //   handlename = (event) => {
  //     this.setState({ fullname: event.target.value });
  //   };
  //   handleid = (event) => {
  //     this.setState({ emp_id: event.target.value });
  //   };
  //   handleprofession = (event) => {
  //     this.setState({ profession: event.target.value });
  //   };

  //After Submit What will happen on Submit....

  onFormSubmit =(event) => {
    alert(`My name is : ${this.state.fullname}.
    Employee ID is : ${this.state.emp_id}.
    Profession is : ${this.state.profession}.
    Gender is : ${this.state.gender}.
    I know these technologies : ${this.state.tecs}.
    My message is : ${this.state.desc}`);
 window.location.reload();
    event.preventDefault();   
  }
  resetIt = (event) => {
    window.location.reload();
  }

  //Rendering Start
  render() {
    return (
      <div className="c1">
        <h1>Registration Form</h1>
        {/* Form Starts */}
        <form onSubmit={this.onFormSubmit}>
          {/* Employee Name Starts */}
          <label>Name :</label>
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handleChange}
            required
            style={{ marginLeft: "78px", width: "500px" }}
          />
          {/* Employee Name Ends */}
          <br />
          {/* Employee Id Starts */}
          <label>Employee ID :</label>
          <input
            type="number"
            name="emp_id"
            value={this.state.emp_id}
            onChange={this.handleChange}
            required
            style={{ marginLeft: "32px", width: "500px" }}
          />
          {/* Employee ID Ends */}
          <br />
          {/* Select Profession Starts */}
          <label>Profession :</label>
          <select
            name="profession"
            value={this.state.profession}
            onChange={this.handleChange}
            required
            style={{ marginLeft: "49px" }}
          >
            <option></option>
            <option value="Development">Development</option>
            <option value="Networking">Networking</option>
          </select>
          {/* Select Profession Ends */}
          <br />
          <br />
          {/* Select Gender starts */}
          <label>Gender :</label>
          <input
            type="radio"
            name="gender"
            onChange={this.handleChange}
            value="male"
            required
            style={{ marginLeft: "70px" }}
          />
          Male
          <input
            type="radio"
            name="gender"
            onChange={this.handleChange}
            value="female"
            required
          />
          Female
          {/* Select Gender Ends */}
          <br />
          <br />
          {/* Select Skills Starts */}
          <label>
            Known <br />
            Technologies :
          </label>
          <input
            type="checkbox"
            name="tecs"
            onChange={this.handleChange}
            value="Java"
            style={{ marginLeft: "32px" }}
          />
          Java
          <input
            type="checkbox"
            name="tecs"
            onChange={this.handleChange}
            value="Angularjs"
          />
          AngularJs
          <input
            type="checkbox"
            name="tecs"
            onChange={this.handleChange}
            value="Reactjs"
          />
          ReactJs
          <input
            type="checkbox"
            name="tecs"
            onChange={this.handleChange}
            value="Nodejs"
          />
          NodeJs
          {/* Select Skills Ends */}
          <br />
          <br />
          {/* TextArea Starts */}
          <textarea
            style={{ height: "90px" }}
            name="desc"
            onChange={this.handleChange}
            placeholder="write something...."
            required
            style={{ marginLeft: "132px", height: "80px",width:"510px" }}
          ></textarea>
          {/* TextArea Ends */}
          <br />
          {/* Buttons Starts */}
          <input type="submit" style={{ marginLeft: "132px" }} />
          <input type="reset" value="Reset" onClick={this.resetIt} />
          {/* Button Ends */}
        </form>
        {/* Form Ends */}
      </div>
    );
  }
}

export default Registration;// Registration.js can export to other file with any tagname there....

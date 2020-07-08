import React, { Component } from "react";
import "./Registration.css";

export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      emp_id: "",
      profession: "",
      gender: false,
      tecs: [],
      desc: "",
    };
  }
  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        console.log(this.state);
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
    handlesubmit(event) {
        event.preventDefault();
      alert(`my name is${this.state.fullname}`);
    }
    
  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={this.handlesubmit}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="empid">Employee ID :</label>
          <input
            type="number"
            id="empid"
            name="emp_id"
            value={this.state.emp_id}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="profs">Profession :</label>
          <select
            id="profs"
            name="profession"
            value={this.state.profession}
            onChange={this.handleChange}
          >
            <option value="Development">Development</option>
            <option value="Networking">Networking</option>
          </select>
          <br />
          <br />
          <label>Gender :</label>
          <input
            type="radio"
            name="gender"
            onChange={this.handleChange}
            value="male"
          />
          Male
          <input
            type="radio"
            name="gender"
            onChange={this.handleChange}
            value="female"
          />
          Female
          <br />
          <br />
          <label>Known Technologies :</label>
          <input
            type="checkbox"
            name="tecs[]"
            onChange={this.handleChange}
            value="Java"
          />
          Java
          <input
            type="checkbox"
            name="tecs[]"
            onChange={this.handleChange}
            value="Angularjs"
          />
          AngularJs
          <input
            type="checkbox"
            name="tecs[]"
            onChange={this.handleChange}
            value="Reactjs"
          />
          ReactJs
          <input
            type="checkbox"
            name="tecs[]"
            onChange={this.handleChange}
            value="Nodejs"
          />
          NodeJs
          <br />
          <br />
                <textarea name="desc" onChange={this.handleChange}
                placeholder="write something....">
           
          </textarea>
          <br />
          <input type="submit" />
          <input type="reset" />
        </form>
      </div>
    );
  }
}

export default Registration;

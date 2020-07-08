import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export class Login extends Component {
    constructor(props)
    {
    super(props);
      this.state =
      {
      selectedDate: new Date(),
      empid: "",
      pwd: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleEmpidChange = this.handleEmpidChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({selectedDate: date});
  }
  handleEmpidChange(event) {
    this.setState({ emp_id: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ pwd: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
   
    alert(`Employee ID is ${this.state.emp_id} Password is ${this.state.pwd} Date is${this.state.selectedDate}`);
    window.location.reload();
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1 style={{ textAlign: "center" }}>Employee Login Portal</h1>

        <table style={{ marginLeft: "320px" }}>
          <tr>
            <td>
              <label>Employee ID :</label>{" "}
            </td>
            <td>
              <input
                type="text"
                value={this.state.value}
                name="emp_id"
                onChange={this.handleEmpidChange}
                placeholder="Employee Id"
                required
                style={{ width: "500px", height: "20px" }}
              />
            </td>
            <td><p name="p1"></p></td>
          </tr>
          <br />

          <tr>
            <td>
              <label>PassWord : </label>
            </td>
            <td>
              <input
                type="password"
                name="Pwd"
                onChange={this.handlePasswordChange}
                value={this.state.value}
                placeholder="Password"
                required
                style={{ width: "500px", height: "20px" }}
              />
            </td>
          </tr>
          <br />

          <tr>
            <td colSpan="2">
              <DatePicker
                selected={this.state.selectedDate}
                onChange={this.handleDateChange}
                name="startDate"
                dateFormat="dd/MM/yyyy"
                isClearable
                scrollableMonthYearDropdown
                showYearDropdown
              />
            </td>
          </tr>
          <br />

          <tr>
            {" "}
            <td colSpan="2">
              <input type="submit" value="Login" />{" "}
            </td>
          </tr>
        </table>
      </form>
    );
  }
}

export default Login;

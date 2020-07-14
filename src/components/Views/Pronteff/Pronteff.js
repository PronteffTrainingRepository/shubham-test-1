import React, { Component } from "react";
import "./Pronteff.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
class Pronteff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pswd: "",
    };
    this.handlename = this.handlename.bind(this);
    this.handlepass = this.handlepass.bind(this);
  }
  handlename = (event) => {
    this.setState({
      user: event.target.value
    });
  };
  handlepass = (event) => {
    this.setState({
      pswd: event.target.value
    });
  };
  onFormSubmit = (event) => {
    alert(`UserName :${this.state.user}.
          Password :${this.state.pswd}`);
    window.location.reload();
    event.preventDefault();
  };
  render() {
    return (
      // main div starts
      <div className="main">
        <form onSubmit={this.onFormSubmit}>
          {/* Logo div starts */}
          <div className="logo"></div>
          {/* Logo div Ends */}
          {/* Input div starts */}
          <div className="form1">
            {/* username Starts */}
            <i
              class="fa fa-user-circle"
              aria-hidden="false"
              style={{ color: "white", opacity: "0.5" }}
            ></i>
            <input
              type="text"
              placeholder="Username"
              name="user"
              value={this.state.user}
              onChange={this.handlename}
              required
            />
            {/* username Ends */}
            <br />
            {/* password starts */}
            <i
              class="fa fa-lock"
              aria-hidden="false"
              style={{ color: "white", opacity: "0.5" }}
            ></i>
            <input
              type="password"
              placeholder="Password"
              name="pswd"
              value={this.state.pswd}
              onChange={this.handlepass}
              required
            />
            {/* password Ends */}
            <br />
            {/* submit button starts */}
            <input type="submit" value="Sign in" />
            {/* submit button ends */}
            <br />
            {/* Input div Ends */}
            <FaFacebookF
              style={{
                height: "40px",
                width: "100px",

                backgroundColor: "#295B98",
                color: "white",
                borderRadius: "4px",
              }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IoLogoTwitter
              style={{
                height: "40px",
                width: "100px",
                backgroundColor: "#00AEEF",
                color: "white",
                borderRadius: "4px",
              }}
            />
            <br />
            {/* forget password link */}
            <a href="https://www.pronteff.com/" target="_blank~">Lost Your Password?</a>
            {/* forget password link */}
          </div>
        </form>
        {/* Form tag Ends */}
      </div>
      //   main div ends
    );
  }
}

export default Pronteff;

import React, { Component } from "react";
import {
  Button,
  Input,
  FormGroup,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "./Pronteff2.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

class Pronteff2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pswd: "",
      userError: "",
      pswdError: "",
    };
    // this.handlepswd = this.handlepswd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   handleuser = (event) => {
  //     this.setState({
  //       user: event.target.value,
  //     });
  //   };
  //   handlepswd(event) {
  //     this.setState({
  //       pswd: event.target.value,
  //     });
  // // }
  // onFormSubmit = (event) => {
  //     alert(`Username is : ${this.state.user}.
  //     Password is : ${this.state.pswd}`)

  // };
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "user") {
      this.setState({ userError: "" });
    }
    if (event.target.name === "pswd") {
      this.setState({ pswdError: "" });
    }
  }

  validate = () => {
    let userError = "";
    let pswdError = "";
    if (!this.state.user) {
      userError = "Username is Required";
    }
    if (!this.state.pswd) {
      pswdError = "Password is Required";
    }
    if (userError || pswdError) {
      this.setState({ userError, pswdError });
      let err = userError;
      let err1 = pswdError;
      if (err && err1) {
        alert("empid and password is required");
      } else if (err) {
        alert(err);
      } else if (err1) {
        alert(err1);
      }
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    const isValid = this.validate();
    if (isValid) {
      alert(`id is ${this.state.user} and password is ${this.state.pswd}`);
    } else {
      console.log(this.event);
    }
    event.preventDefault();
  };

  render() {
    return (
      // Main Div Started
      <div>
        <Form
          className="loginform"
          onSubmit={this.handleSubmit}
          action="/action_page.php"
        >
          {/* Logo Start */}
          <div className="logo mb-3"></div>
          {/* Logo End */}
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText
                style={{
                  backgroundColor: "#437082",
                  borderColor: "#437082 #437082 #358d9c #437082",
                  borderWidth: "1.8px",
                  borderRadius: "0px",
                }}
              >
                <FaUserAlt></FaUserAlt>
              </InputGroupText>
            </InputGroupAddon>
            {/* Username Starts */}
            <Input
              type="text"
              placeholder="Username"
              name="user"
              onChange={this.handleChange}
              required
            />

            <span style={{ fontSize: 12, color: "red" }}>
              <b>{this.state.userError}</b>
            </span>
            {/* Username Ends */}
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText
                style={{
                  backgroundColor: "#437082",
                  borderColor: "#437082 #437082 #358d9c #437082 ",
                  borderWidth: "1.8px",
                  borderRadius: "0px",
                }}
              >
                <FaLock />
              </InputGroupText>
            </InputGroupAddon>
            {/* Password Field Starts */}
            <Input
              type="password"
              placeholder="Pswd"
              name="pswd"
              onChange={this.handleChange}
            />
            {/* Password Field Ends */}
          </InputGroup>
          {/* Sign in Button Starts */}
          <Button
            className="btn-lg btn-block b1"
            style={{ backgroundColor: "#29a6b2" }}
          >
            Sign in
          </Button>
          {/* Sign in Button Ends */}
          {/* FaceBook Icon Starts */}
          <FaFacebookF
            className="mt-2 mb-3"
            style={{
              height: "45px",
              width: "140px",
              backgroundColor: "#295B98",
              color: "white",
              borderRadius: "4px",
            }}
          />
          {/* Facebook Logo Ends */}
          <span className="p-2"></span>
          {/* Twitter Logo Starts */}
          <IoLogoTwitter
            className="mt-2 mb-3"
            style={{
              height: "45px",
              width: "140px",
              backgroundColor: "#00AEEF",
              color: "white",
              borderRadius: "4px",
            }}
          />
          {/* Twitter Logo Ends */}
          {/* Lost Password Starts */}
          <div className="text-center">
            <a href="https://www.pronteff.com/" style={{ color: "whitesmoke" }}>
              Lost Your Password?
            </a>
          </div>
          {/* Lost Password Ends */}
        </Form>
      </div>
      // Main Div Ended
    );
  }
}

export default Pronteff2;

import React, { Component } from "react";
import "./Pronteff.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
class Pronteff extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      // main div starts
      <div className="main">
        <form>
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
            <input type="text" placeholder="Username" required />
            {/* username Ends */}
            <br />
            {/* password starts */}
            <i
              class="fa fa-lock"
              aria-hidden="false"
              style={{ color: "white", opacity: "0.5" }}
            ></i>
            <input type="password" placeholder="Password" required />
            {/* password Ends */}
            <br />
            {/* submit button starts */}
            <input type="submit" value="Sign in" />
            {/* submit button ends */}
            <br />
            {/* Input div Ends */}
                    <FaFacebookF
                        
              style={{
                height: "50px",
                width: "100px",
                
                backgroundColor: "#295B98",
                color: "white",
                borderRadius: "4px",
              }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IoLogoTwitter
              style={{
                height: "50px",
                width: "100px",
                backgroundColor: "#00AEEF",
                color: "white",
                borderRadius: "4px",
              }}
            />
            <br />
            {/* forget password link */}
            <a href="https://www.pronteff.com/">Lost Your Password?</a>
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

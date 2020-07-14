import React from "react";
import "./Homestyle.css";
import Clock from "react-digital-clock";

const Home = () => {
    return (
      <div className="Homestyle">
        <h2>Welcome to Home Page.</h2>
        <Clock />
      </div>
    );
}
export default Home;
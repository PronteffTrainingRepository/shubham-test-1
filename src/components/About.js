import React from 'react';
import './Aboutstyle.css';
const About = (props) => {
    return (
        <div className="Aboutstyle">
            <h2>Welcome to {props.name} page.</h2>
        </div>
    )
}

export default About;
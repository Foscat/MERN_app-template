import React from 'react';
import { Jumbotron } from "reactstrap";

// Simple jumborton that can take in prop styles and has classNames for easy css

const FlexTron = (props) => {
    return (
        <Jumbotron className={props.className} style={props.style}>
            <div style={props.titleStyle}>
                <h1 >{props.title}</h1>
                <h5>{props.subtitle}</h5>
            </div>
            <hr />
            <div style={props.contentStyle}>
                {props.children}
            </div>
        </Jumbotron>
    )
};

export default FlexTron;
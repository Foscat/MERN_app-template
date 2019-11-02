import React from 'react';
import { Jumbotron } from "reactstrap";

// Simple jumborton that can take in prop styles and has classNames for easy css

const FlexTron = (props) => {
    return (
        <Jumbotron className={props.className} style={props.style}>
            <h1 className="jumboTitle">{props.title}</h1>
            <p className="jumboSub">{props.subtitle}</p>
            <hr />
            <div className="jumboCon">
                {props.children}
            </div>
        </Jumbotron>
    )
};

export default FlexTron;
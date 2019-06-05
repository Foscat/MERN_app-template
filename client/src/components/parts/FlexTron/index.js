import React from 'react';
import { Jumbotron } from "reactstrap";

// Simple jumborton that can take in prop styles and has classNames for easy css

const FlexTron = (props) => {
    return (
        <div>
            <Jumbotron className="jumbotron FlexTron" style={props.style}>

                <div className="insideTron">
                    <h1 className="jumboTitle">{props.title}</h1>
                    <p className="jumboSub">{props.subtitle}</p>
                    <hr />
                    <div className="jumboCon">
                        {props.children}
                    </div>
                </div>


            </Jumbotron>

        </div>
    )
};

export default FlexTron;
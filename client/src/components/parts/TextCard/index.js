import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';

// General use card for wrapping around other components and give clean presentaiton
// Takes is style props to give ease of css 

const TextCard = (props) => {
    return(
        <Card className={props.className} style={props.style}>
        
            <CardHeader>

                <CardTitle>
                    <h2>{props.title}</h2>
                </CardTitle>

                <CardSubtitle>
                    <h4>{props.subtitle}</h4>
                </CardSubtitle>

            </CardHeader>

            <CardBody>

                <div style={props.contentStyle}>
                    {props.children}
                </div>
    
            </CardBody>

        </Card>
    )
}

export default TextCard;
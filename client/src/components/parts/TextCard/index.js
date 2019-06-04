import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';

const TextCard = (props) => {
    return(
        <div>
            <Card style={props.style}>
          
                <CardHeader>

                    <CardTitle>
                        <h2 className="txtCardTitle">{props.title}</h2>
                    </CardTitle>

                    <CardSubtitle>
                        <h4 className="txtCardSub">{props.subtitle}</h4>
                    </CardSubtitle>

                </CardHeader>

                <CardBody>

                    <div className="txtCardChildren">
                        {props.children}
                    </div>
        
                </CardBody>

            </Card>
        </div>
    )
}

export default TextCard;
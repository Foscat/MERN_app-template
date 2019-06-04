import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';

const TextCard = (props) => {
    return(
        <div>
            <Card className="card" style={props.style}>
          
                <CardHeader className="card-head">

                    <CardTitle>
                        <h2 className="card-title txtCardTitle">{props.title}</h2>
                    </CardTitle>

                    <CardSubtitle>
                        <h4 className="card-subtitle txtCardSub">{props.subtitle}</h4>
                    </CardSubtitle>

                </CardHeader>

                <CardBody className="card-body">

                    <div className="txtCardChildren">
                        {props.children}
                    </div>
        
                </CardBody>

            </Card>
        </div>
    )
}

export default TextCard;
import React from 'react';
import Flextron from "../FlexTron";
import TextCard from "../TextCard";
import { Row, Container } from 'reactstrap';
import CustomerSignUpForm from './CustomerSignUpForm';

// Basic signup component that holds its specific form inside it
// Gives simple interface for adding users to db
// Rinse and repeat for new tables in db.

const CustomerSignUp = (props) => {
    
    return(
        <div className="CustSignUp">

            <Container className="container">

                <Row className="row">

                    <Flextron
                     style={{backgroundColor: "#fff"}}
                     title="Join Today!"
                     subtitle="Become a member of the db!"
                    >
                     <p>Fill out form to add to user table</p>
                     <ul>
                        <li>This is a working form for testing db connection</li>
                        <li>To add new tables use biolderplate controllers, and routes.</li>
                        <li>Communicate with these routes with functions in utils folder.</li>
                        <li>Use these as boilerplate for new functions</li>
                     </ul>
                    </Flextron>

                    <TextCard 
                     title="Sign Up Card"
                     subtitle="Fill out info and sign up"
                     style={{backgroundColor: "rgb(193, 152, 154)"}}
                    >
                        <CustomerSignUpForm 
                            handleInputChange={props.handleInputChange}
                            handleFormSubmit={props.handleFormSubmit}
                        />
                    </TextCard>

                </Row>

            </Container>

        </div>
    )
}

export default CustomerSignUp;
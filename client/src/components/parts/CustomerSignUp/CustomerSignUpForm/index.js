import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Seperate form for easy changing of form aspects or can be replaced with preferred form component

const CustomerSignUpForm = (props) => {
    return(
        <div>
            <Form style={props.style}>

                <FormGroup className="form-group">
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="addCustName1" onChange={props.handleInputChange}
                     id="firstName" placeholder="First Name"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="addCustName2" onChange={props.handleInputChange}
                     id="lastName" placeholder="Last Name"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="email">Preferred Email</Label>
                    <Input type="email" name="addCustEmail" onChange={props.handleInputChange}
                     id="email" placeholder="Your email"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="password">Password</Label>
                    <Input type="password" name="addCustPass" onChange={props.handleInputChange}
                     id="password" placeholder="Password"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="phoneNum">Phone Number</Label>
                    <Input type="number" name="addCustPhone" onChange={props.handleInputChange}
                     id="phoneNum" placeholder="Your phone number"/>
                </FormGroup>

                <Button className="btn btn-success" onClick={props.handleFormSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default CustomerSignUpForm;